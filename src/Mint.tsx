import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import confetti from "canvas-confetti";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import * as anchor from "@project-serum/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
} from "./candy-machine";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const ConnectButton = styled(WalletDialogButton)``;
const CounterText = styled.span``;

const MintContainer = styled.div``;

const MintButton = styled(Button)`
  background-color: rgba(99, 102, 241, 1);
  color: white;
  } :hover {
    background-color: rgba(120, 130, 255, 1);
    color: white;
  }
`;

const Loader = styled(CircularProgress)``;

const presaleSupply = Number(process.env.PRESALE_SUPPLY) ?? 0;

export interface MintProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
  // setReset: (val: boolean) => void;
}

const Mint = (props: MintProps) => {
  // const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  // const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const dispatch = useDispatch();
  const { setWalletBalance } = bindActionCreators(actionCreators, dispatch);
  const balanceState = useSelector((state: State) => state.balance);

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
        // itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      const balance = await props.connection.getBalance(wallet.publicKey);
      setWalletBalance(balance / LAMPORTS_PER_SOL);

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      // setItemsRedeemed(itemsRedeemed);

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
          message = `Presale has been ended. All SFT's are sold out. Thank you!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `Presale sale has been ended. All SFT's are sold out. Thank you!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Presale sale hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(refreshCandyMachineState, [wallet, props.candyMachineId, props.connection, setWalletBalance]);

  return (
    <>
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
      <div className="h-full flex">
        <div className="flex-1 flex flex-col overflow-hidden m-8">
          {/* Main content */}
          <div className="flex-1 flex items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto p-4 mb-8">
              <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-opacity-50 shadow-lg rounded-2xl">
                <div className="flex">
                  <h2 className="flex-1 text-2xl font-bold custom-black">
                    Mint
                  </h2>
                </div>
                <div className="mt-3 sm:mt-2">
                  <div className="block">
                    <div className="flex items-center border-b border-gray-200"></div>
                  </div>
                </div>
                <h1 className="text-2xl font-medium mt-6 mb-2 flex justify-center text-green-500">
                  Solana Funky Trolls
                </h1>
                <section className="mt-2">
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
                    <div className="flex flex-col sm:flex-row mt-2 justify-around items-center my-5">
                      <div className="text-sm md:text-base font-mono w-1/2">
                        {itemsRemaining >= itemsAvailable - presaleSupply ? (
                          <div className="flex items-center price">
                            <p className="mr-3">Price :</p>
                            <span className="flex items-center mr-4 price--discounted">
                              <img
                                src="/sol-badge.svg"
                                alt="sol-badge"
                                className="h-4 w-4 mr-1"
                              />
                              1.5
                            </span>
                            <span className="flex items-center price--regular">
                              <img
                                src="/sol-badge.svg"
                                alt="sol-badge"
                                className="h-4 w-4 mr-1"
                              />
                              2
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center price">
                            <p className="mr-3 font-bold">Price :</p>
                            <span className="flex items-center price--discounted">
                              <img
                                src="/sol-badge.svg"
                                alt="sol-badge"
                                className="h-4 w-4 mr-1"
                              />
                              2 + <i> transaction fees</i>
                            </span>
                          </div>
                        )}
                        <div className="mt-2">
                          {wallet && (
                            <p className="">Supply left : {itemsRemaining}</p>
                          )}
                        </div>
                        <div className="flex items-center mt-2">
                          <p className="mr-3 font-bold">Price :</p>
                          <span className="flex items-center price--discounted">
                            <img
                              src="/sol-badge.svg"
                              alt="sol-badge"
                              className="h-4 w-4 mr-1"
                            />
                            1.5 + <i> transaction fees</i>
                          </span>
                        </div>
                      </div>
                      <div className="mt-10 sm:mt-0">
                        <MintContainer>
                          {!wallet ? (
                            <ConnectButton type="button">
                              <p className="text-xs sm:w-22 md:w-28 text-center">Connect your wallet to mint</p>
                            </ConnectButton>
                            // <p className="py-2 text-center bg-indigo-500 shadow-md text-white rounded-md px-4">
                            //   Connect your wallet to mint
                            // </p>
                          ) : (
                            <div className="flex justify-center">
                              {itemsRemaining < presaleSupply &&
                              itemsRemaining !== 0 ? (
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
                                      <div className="">
                                        <Loader />
                                        <p className="text-indigo-500 pl-4">Approve transaction from your wallet. <br />Minting will take a few seconds please wait.</p>
                                      </div>
                                    ) : (
                                      <p className="text-lg w-28 text-center">
                                        Mint now!
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
            </main>
          </div>
        </div>
      </div>
    </>
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
