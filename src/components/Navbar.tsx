import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import * as anchor from "@project-serum/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { isMobile } from "react-device-detect";

import { shortenAddress } from "../candy-machine";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const ConnectButton = styled(WalletDialogButton)`wallet-btn`;
const MintContainer = styled.div``;
export interface NavbarProps {
  connection: anchor.web3.Connection;
}

const Navbar = (props: NavbarProps) => {
  const [mobileNav, setMobileNav] = useState(false);

  const wallet = useAnchorWallet();
  const dispatch = useDispatch();

  const { setWalletAddress, setWalletBalance } = bindActionCreators(
    actionCreators,
    dispatch
  );
  // const walletAddress = useSelector((state: State) => state.wallet);
  const balanceState = useSelector((state: State) => state.balance);

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setWalletBalance(balance / LAMPORTS_PER_SOL);
        setWalletAddress(wallet.publicKey.toString());
      }
    })();
  }, [wallet, props.connection, setWalletBalance, setWalletAddress]);

  return (
    <nav className="bg-white shadow-lg sticky w-full">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex lg:text-left font-syne custom-black py-2 mx-4">
          <div className="hidden lg:flex lg:flex-1 sm:order-1 py-4 pl-5">
            <div className="space-x-3">
              <NavLink to="/" className="py-4 px-2">
                Home
              </NavLink>
              <NavLink to="/mint" className="py-4 px-2">
                Mint
              </NavLink>
              <NavLink to="/mysft" className="py-4 px-2">
                My-SFT
              </NavLink>
            </div>
          </div>
          <div className="flex-1 justify-end sm:order-2 items-center text-center">
            <div className="w-24 md:w-40">
              <Link to="/">
                <img src="/logo.svg" alt="SFT Logo" width="160" />
              </Link>
            </div>
          </div>
          <div className="flex justify-between space-x-10 sm:order-3">
            <div className="hidden lg:flex items-center">
              <MintContainer>
                {!isMobile &&
                  (!wallet ? (
                    <ConnectButton
                      type="button"
                      className="wallet-btn bg-custom-black rounded-lg text-white px-4 py-4"
                    >
                      <p className="text-xs w-24 sm:w-24 md:w-28 text-center">
                        Connect Wallet
                      </p>
                    </ConnectButton>
                  ) : (
                    <div className="border-b-2 border-r-2 py-2 w-44 border-green-400 underline-offset-2 pr-2">
                      {wallet && (
                        <div className="flex flex-row-reverse gap-2 justify-between">
                          <p className="text-sm">
                            <u>Wallet</u>
                          </p>
                          <p className="text-sm">
                            {shortenAddress(wallet.publicKey.toBase58() || "")}
                          </p>
                        </div>
                      )}
                      {wallet && (
                        <div className="flex flex-row-reverse gap-2 justify-between">
                          <p className="text-sm">
                            <u>Balance</u>
                          </p>
                          <p className="text-sm">
                            {(balanceState || 0).toLocaleString()} SOL
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                {isMobile && (
                  <div className="border-b-2 border-r-2 p-1 w-44 border-green-400">
                    <p className="text-xs">
                      Your device is not supported, please use a computer to
                      connect to your wallet
                    </p>
                  </div>
                )}
              </MintContainer>
            </div>
            <div className="flex lg:hidden items-center">
              <button
                className={`menu ${
                  mobileNav ? "opened" : ""
                } hover:bg-green-100 rounded-md`}
                onClick={() => setMobileNav(!mobileNav)}
                aria-label="Main Menu"
              >
                <svg width="40" height="40" viewBox="0 0 100 100">
                  <path
                    className="line line1"
                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                  />
                  <path className="line line2" d="M 20,50 H 80" />
                  <path
                    className="line line3"
                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden space-x-3 p-4 items-center">
              <a
                href="https://twitter.com/SolanaFunkyTrolls"
                target="_blank"
                rel="noreferrer"
                className="custom-black hover:text-green-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://discord.gg/eQWZ9c7Wbt"
                target="_blank"
                rel="noreferrer"
                className="custom-black hover:text-green-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="h-8 w-8"
                >
                  <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`fade-in-nav  text-center shadow-lg text-xl w-full items-center bg-white p-6 order-3 ${
            mobileNav ? "is-visible" : ""
          }`}
        >
          <ul>
            <li>
              <NavLink to="/" className="block py-4 px-2">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="mint" className="block py-4 px-2">
                Mint
              </NavLink>
            </li>
            <li>
              <NavLink to="mysft" className="block py-4 px-2">
                My-SFT
              </NavLink>
            </li>
            <li>
              <div className="flex flex-wrap justify-center pt-5">
                <a
                  href="https://twitter.com/SolanaFunkyTrolls"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-10 w-10"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://discord.com/invite/eQWZ9c7Wbt"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="h-10 w-10"
                  >
                    <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
