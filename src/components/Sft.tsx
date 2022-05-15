import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import {
  getParsedNftAccountsByOwner,
  isValidSolanaAddress,
} from "@nfteyez/sol-rayz";
import axios from "axios";

import * as anchor from "@project-serum/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";

export interface SftProps {
  connection: anchor.web3.Connection;
}

export default function Sft(props: SftProps) {
  const [nftData, setNftData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [sft, setSft] = useState<any>(null);
  const [meta, setMeta] = useState<any>(null);

  async function getMeta(url: string) {
    await fetch(url)
      .then((resp) => {
        return resp.blob();
      })
      .then((blob) => {
        const units = ["bytes", "KB", "MB"];
        let l = 0,
          n = parseInt(blob.size.toString(), 10) || 0;
        while (n >= 1024 && ++l) {
          n = n / 1024;
        }

        let height = 0;
        let width = 0;
        const img = new Image();
        img.src = URL.createObjectURL(blob);
        img.onload = () => {
          width = img.width;
          height = img.height;
          var reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function () {
            var base64data = reader.result;
            setMeta({
              size: n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l],
              height,
              width,
              image: base64data,
            });
            return {
              size: n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l],
              height,
              width,
              image: base64data,
            };
          };
        };
      });
  }

  const wallet = useAnchorWallet();

  useEffect(() => {
    const getAllNftData = async () => {
      try {
        const connect = props.connection;
        let ownerToken = wallet ? wallet.publicKey : "";
        if (!isValidSolanaAddress(String(ownerToken)))
          throw new Error("solana address is not valid");
        const nfts = await getParsedNftAccountsByOwner({
          publicAddress: ownerToken,
          connection: connect,
        });
        return nfts;
      } catch (error) {
        console.error(error);
      }
    };

    const getNftTokenData = async () => {
      try {
        let nftData = await getAllNftData();
        nftData = nftData?.filter(
          (nft) => nft.updateAuthority === process.env.REACT_APP_TREASURY_ADDRESS
        );
        var data = nftData
          ? Object.keys(nftData).map((key) =>
              nftData ? nftData[Number(key)] : { data: { uri: "" } }
            )
          : [];
        if (data.length === 0) throw new Error("No Sft found");
        let arr = [];
        let n = data.length;
        for (let i = 0; i < n; i++) {
          let val = await axios.get(data[i].data.uri);
          arr.push(val);
        }
        arr.sort((a, b) => (a.data.edition > b.data.edition ? 1 : -1));
        setSft(arr[0].data);
        await getMeta(arr[0].data.image);
        return setNftData(arr);
      } catch (error) {
        console.log(error);
      }
    };

    const getData = () => {
      (async () => {
        if (!wallet || loading) return;
  
        setLoading(true);
        await getNftTokenData();
        return () => {
          setLoading(false);
          setNftData(null);
        };
      })();
    };
    getData();
  }, [loading, props.connection, wallet]);

  return (
    <>
      <div className="h-full flex">
        <div className="flex-1 flex flex-col overflow-hidden m-8">
          {/* Main content */}
          <div className="flex-1 flex items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto p-4 mb-8">
              <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-opacity-50 shadow-lg rounded-2xl">
                <div className="flex">
                  <h1 className="flex-1 text-2xl font-bold custom-black">
                    Your Collection
                  </h1>
                </div>

                <div className="mt-3 sm:mt-2">
                  <div className="block">
                    <div className="flex items-center border-b border-gray-200"></div>
                  </div>
                </div>
                {/* Gallery */}
                <section
                  className="mt-8 pb-16"
                  aria-labelledby="gallery-heading"
                >
                  {loading ? (
                    !nftData || nftData.length === 0 ? (
                      <div className="text-center my-10 text-lg">
                        <p className="text-gray-600">
                          You don't own an SFT yet ! 😢
                        </p>
                        <p className="text-indigo-600">
                          Go mint one{" "}
                          <Link to="/mint" className="text-green-500">
                            here
                          </Link>{" "}
                          before they're all gone ! ⌛️
                        </p>
                      </div>
                    ) : (
                      <div className="flex">
                        <div className="overflow-y-auto p-0 md:p-2 w-5/12 sm:w-7/12 [max-height: 0.25rem]">
                          <ul className="p-6 grid grid-cols-1 gap-y-8 sm:gap-x-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                            {nftData &&
                              nftData.length > 0 &&
                              nftData.map((val: any, ind: any) => (
                                <li
                                  key={ind}
                                  className="relative"
                                  onClick={async () => {
                                    setSft(val.data);
                                    await getMeta(val.data.image);
                                  }}
                                >
                                  <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                                    <img
                                      src={val.data.image}
                                      alt=""
                                      className="object-cover pointer-events-none group-hover:opacity-75 cursor-pointer"
                                    />
                                    <button
                                      type="button"
                                      className="absolute inset-0 focus:outline-none"
                                    >
                                      <span className="sr-only">
                                        View details for {val.data.symbol} #
                                        {val.data.edition}
                                      </span>
                                    </button>
                                  </div>
                                  <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                                    {val.data.symbol} #{val.data.edition}
                                  </p>
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div className="relative border-l p-0 md:p-2 w-7/12 sm:w-5/12">
                          <div className="p-6">
                            <div className="pb-16 space-y-6">
                              <div>
                                <div className="block w-full rounded-lg overflow-hidden">
                                  <img
                                    src={meta && meta.image}
                                    alt=""
                                    className="object-cover"
                                  />
                                </div>
                                <div className="mt-4 flex items-start justify-between">
                                  <div>
                                    <h2 className="text-lg font-medium text-gray-900">
                                      {sft && sft.symbol} #{sft && sft.edition}
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-900">
                                  Information
                                </h3>
                                <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                  <div className="py-3 flex justify-between text-sm font-medium">
                                    <dt className="text-gray-500">
                                      Dimensions
                                    </dt>
                                    <dd className="text-gray-900">
                                      {meta && meta.height} {meta && "x"}{" "}
                                      {meta && meta.width}
                                    </dd>
                                  </div>
                                  <div className="py-3 flex justify-between text-sm font-medium">
                                    <dt className="text-gray-500">Size</dt>
                                    <dd className="text-gray-900">
                                      {meta && meta.size}
                                    </dd>
                                  </div>
                                </dl>
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-900">
                                  Description
                                </h3>
                                <div className="mt-2 flex items-center justify-between">
                                  <p className="text-sm text-gray-500 italic">
                                    {sft && sft.description}
                                  </p>
                                </div>
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-900">
                                  Attributes
                                </h3>
                                <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                  {sft &&
                                    sft.attributes &&
                                    sft.attributes.map((val: any, ind: any) => {
                                      return (
                                        <div
                                          className="py-3 flex justify-between text-sm font-medium"
                                          key={ind}
                                        >
                                          <dt className="text-gray-500">
                                            {val.trait_type}
                                          </dt>
                                          <dd className="text-gray-900">
                                            {val.value}
                                          </dd>
                                        </div>
                                      );
                                    })}
                                </dl>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="text-center my-5">
                      {!wallet ? (
                        <div className="text-indigo-600">
                          <p className="text-lg">
                            Connect your wallet to see your SFT collection
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="flex">
                            <div className="overflow-y-auto p-0 md:p-2 w-5/12 sm:w-7/12">
                              <p className="custom-black mb-2">
                                Loading collection ...
                              </p>
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                                <div className="animate-pulse flex space-x-4">
                                  <div className="flex-1 space-y-6 py-1">
                                    <div className="h-40 bg-gray-100 rounded"></div>
                                    <div className="space-y-3">
                                      <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-gray-100 rounded col-span-2"></div>
                                        <div className="h-2 bg-gray-100 rounded col-span-1"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="animate-pulse flex space-x-4">
                                  <div className="flex-1 space-y-6 py-1">
                                    <div className="h-40 bg-gray-100 rounded"></div>
                                    <div className="space-y-3">
                                      <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-gray-100 rounded col-span-2"></div>
                                        <div className="h-2 bg-gray-100 rounded col-span-1"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="animate-pulse flex space-x-4">
                                  <div className="flex-1 space-y-6 py-1">
                                    <div className="h-40 bg-gray-100 rounded"></div>
                                    <div className="space-y-3">
                                      <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-gray-100 rounded col-span-2"></div>
                                        <div className="h-2 bg-gray-100 rounded col-span-1"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="animate-pulse flex space-x-4">
                                  <div className="flex-1 space-y-6 py-1">
                                    <div className="h-40 bg-gray-100 rounded"></div>
                                    <div className="space-y-3">
                                      <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-gray-100 rounded col-span-2"></div>
                                        <div className="h-2 bg-gray-100 rounded col-span-1"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="animate-pulse flex space-x-4">
                                  <div className="flex-1 space-y-6 py-1">
                                    <div className="h-40 bg-gray-100 rounded"></div>
                                    <div className="space-y-3">
                                      <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-gray-100 rounded col-span-2"></div>
                                        <div className="h-2 bg-gray-100 rounded col-span-1"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="animate-pulse flex space-x-4">
                                  <div className="flex-1 space-y-6 py-1">
                                    <div className="h-40 bg-gray-100 rounded"></div>
                                    <div className="space-y-3">
                                      <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-gray-100 rounded col-span-2"></div>
                                        <div className="h-2 bg-gray-100 rounded col-span-1"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="animate-pulse flex space-x-4">
                                  <div className="flex-1 space-y-6 py-1">
                                    <div className="h-40 bg-gray-100 rounded"></div>
                                    <div className="space-y-3">
                                      <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-gray-100 rounded col-span-2"></div>
                                        <div className="h-2 bg-gray-100 rounded col-span-1"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="animate-pulse flex space-x-4">
                                  <div className="flex-1 space-y-6 py-1">
                                    <div className="h-40 bg-gray-100 rounded"></div>
                                    <div className="space-y-3">
                                      <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-gray-100 rounded col-span-2"></div>
                                        <div className="h-2 bg-gray-100 rounded col-span-1"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="relative border-l p-0 md:p-2 w-7/12 sm:w-5/12">
                              <div className="p-4 animate-pulse flex">
                                <div className="flex-1 space-y-6 py-1">
                                  <div className="h-40 bg-gray-100 rounded"></div>
                                  <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                      <div className="h-2 bg-gray-100 rounded col-span-2"></div>
                                      <div className="h-2 bg-gray-100 rounded col-span-1"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
