import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import confetti from "canvas-confetti";
import { useSelector, useDispatch } from "react-redux";
import { WalletState } from "./reducers/walletReducer";
import { connectUserWallet } from "./actions/walletSlice";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
} from "./candy-machine";

const CounterText = styled.span``;

const MintContainer = styled.div``;

const MintButton = styled(Button)`
  background-color: #2F52E0;
`;

export interface MintProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Mint = (props: MintProps) => {
  const dispatch = useDispatch();

  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
          confetti();
          refreshCandyMachineState();
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `Private sale has been ended. All SFT's are sold out. Thank you!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `Private sale has been ended. All SFT's are sold out. Thank you!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Private sale hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  const presaleSupply = 5;

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
        const onConnectUserWallet = (pubKey: string) => {
          dispatch(connectUserWallet(pubKey));
        };
        onConnectUserWallet(String(wallet?.publicKey));
      }
    })();
  }, [wallet, props.connection, dispatch]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  return (
    <main>
      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
      <main className="max-w-4xl 2xl:max-w-5xl mx-auto flex items-center justify-center pt-4 px-4 text-left sm:block sm:p-4 md:mt-10">
        <div className="w-full relative flex flex-col bg-primary-200 overflow-hidden shadow-lg pt-6 rounded-2xl bg-white mb-12">
          <div className="px-4 pb-8 sm:px-6 lg:px-8">
            <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-full">
              <div className="flex flex-col justify-between sm:col-span-full text-primary lg:col-span-full h-full">
                <h2 className="flex text-2xl font-medium sm:pr-12  justify-center mb-4">
                  <span className="mr-3">⚔️</span>Solana Funky Trolls
                  <span className="ml-3">⚔️</span>
                </h2>
                <hr></hr>
                <h3 className="text-xl font-medium sm:pr-12 mt-6 mb-2 flex justify-center text-green-500">
                  <span className="mr-3">🎊</span>Presale launch
                  <span className="ml-3">🎊</span>
                </h3>
                <section className="mt-2">
                  <p className="">
                    Be part of the community, join our early adopters and get
                    the opportunity to get special rewards.
                  </p>
                  <div className="aspect-w-2 aspect-h-3 rounded-nft overflow-hidden sm:col-span-4 lg:col-span-5">
                    <img
                      src="/treasure.gif"
                      alt="SFT treasure chest"
                      className="object-center object-cover mx-auto"
                    />
                  </div>
                  <div className="border-2 shadow-md rounded-md border-purple-200 p-4">
                    <div className="">
                      <p className="font-bold text-green-500">About SFT's :</p>
                      <p className="p-4">
                        Solana Funky Trolls NFTs are a collection of
                        programmatically, randomly generated NFTs from hand made
                        art on the Solana blockchain. The 1st generation
                        consists of 10,000 randomly assembled Trolls. Each Troll
                        is comprised of unique traits and the possibilities are
                        endless!
                      </p>
                      <p className="p-4">
                        Presale supply is only <b>500</b> units at <b>1.5</b>{" "}
                        SOL. After the presale, available supply is going to be{" "}
                        <b>9450</b> units at <b>2</b> SOL. <br></br>
                        <b>50</b> units are kept for marketing purposes and
                        giveaways.
                      </p>
                    </div>
                  </div>
                </section>
                <section className="mt-8">
                  <div className="flex flex-col w-full">
                    <span className="border-2 py-1 w-full text-center shadow-md rounded-md border-purple-200 mb-6">
                      <h3 className="text-lg font-normal">
                        <span className="mr-3">💎</span>MINT IT !
                        <span className="ml-2">💎</span>
                      </h3>
                    </span>
                    <div className="flex sm:flex-row mt-2 justify-evenly items-center my-5">
                      <div className="text-sm md:text-sm">
                        {itemsRemaining > itemsAvailable - presaleSupply ? (
                          <div className="flex items-center price mb-3">
                            <p className="mr-3">
                              <b>Price:</b>
                            </p>
                            <span className="flex items-center mr-4 price--discounted">
                              <img
                                src="/sol-badge.svg"
                                alt="sol-badge"
                                className="h-4 w-4"
                              />
                              1,5
                            </span>
                            <span className="flex items-center price--regular">
                              <img
                                src="/sol-badge.svg"
                                alt="sol-badge"
                                className="h-4 w-4"
                              />
                              2
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center price mb-3">
                            <p className="mr-3">
                              <b>Price:</b>
                            </p>
                            <span className="flex items-center price--discounted">
                              <img
                                src="/sol-badge.svg"
                                alt="sol-badge"
                                className="h-4 w-4"
                              />
                              2
                            </span>
                          </div>
                        )}
                        <div className="mb-3">
                          {wallet && (
                            <p className="">
                              <b>Supply left:</b> {itemsRemaining}
                            </p>
                          )}
                        </div>
                        <div className="">
                          <p>
                            <b>Total price:</b> 1.5 + transaction fees
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <MintContainer>
                          {!wallet ? (
                            <p className="py-1 w-44 text-center text-sm font-light bg-purple-200 rounded-md px-4">
                              You must connect your wallet
                            </p>
                          ) : (
                            <div className="flex justify-center">
                              {itemsRemaining < presaleSupply && itemsRemaining !== 0 ? (
                                <p className="text-lg w-46 text-center bg-purple-200 p-2 rounded-md text-green-500">
                                  <span className="mr-3">🎊</span>End of presale
                                  <span className="ml-3">🎊</span>
                                </p>
                              ) : (
                                <MintButton
                                  disabled={isSoldOut || isMinting || !isActive}
                                  onClick={onMint}
                                  variant="contained"
                                >
                                  {isSoldOut ? (
                                    <p className="text-lg w-44 text-center">
                                      Sold out
                                    </p>
                                  ) : isActive ? (
                                    isMinting ? (
                                      <CircularProgress />
                                    ) : (
                                      <p className="text-lg w-44 text-center">
                                        Mint SFT
                                      </p>
                                    )
                                  ) : (
                                    <Countdown
                                      date={startDate}
                                      onMount={({ completed }) =>
                                        completed && setIsActive(true)
                                      }
                                      onComplete={() => setIsActive(true)}
                                      renderer={renderCounter}
                                    />
                                  )}
                                </MintButton>
                              )}
                            </div>
                          )}
                        </MintContainer>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Mint;
