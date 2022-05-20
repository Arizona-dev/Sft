import React from "react";
import { Link } from "react-router-dom";

const Roadmap: React.FC = () => {
  return (
    <div className="">
      <section>
        <div className="bg-black text-white py-8">
          <div className="container mx-auto flex flex-col items-start lg:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="text-3xl md:text-4xl text-green-400 uppercase tracking-loose mb-2">
                Roadmap
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Check out our roadmap for Solana Funky Trolls !
                <br />
                Go through all the steps to know the exact process of the fest.
              </p>
              <Link
                to="/mint"
                className="bg-transparent hover:bg-green-400 text-green-400 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-green-400 hover:border-transparent"
              >
                Mint now
              </Link>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid #34d399",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid #34d399",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-green-400">
                        Stage 1 - Q2 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        SFT Release &<br></br> Open Mint
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Solana Funky Trolls NFTs release ready for users to{" "}
                        <b>Mint</b> and join our community
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-green-400">
                        Stage 2 - Q2 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Metadata and ranking
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Each minted NFT will be published with their{" "}
                        <b>attributes</b> visible and <b>rarity</b> provided on
                        our website
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-green-400">
                        Stage 3 - Q3 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Community Wallet
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Setup of a dedicated community wallet where SFT holders
                        can submit ideas and vote for them
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-green-400">
                        Stage 4 - Q3 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        SFT Airdrop
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The top <b>5</b> holders which has the most invites on
                        the SFT Discord will receive <b>1 SFT</b>
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-green-400">
                        Stage 5 - Q3 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-right">
                        Mechanical Keyboard Prototyping
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Prototyping the <b>SFT MechKey</b> with special discount for SFT holders
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-green-400 text-left">
                        Stage 6 - Q4 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">
                        SFT MechKey Pre-Order
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-left">
                        Launching the SFT MechKey on our website and taking pre-orders
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-green-400 text-left">
                        Stage 7 - Q1 2023
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">
                        SFT MechKey Shipping &<br></br> Launch
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-left">
                        Launching the SFT MechKey on our website and shipping the orders
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1 w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-green-400 text-left">
                        Stage 8 - Future
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">
                        SFT Holders Ideas
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-left">
                        SFT Holders submitting ideas for the SFT community to vote
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  alt="timeline"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
