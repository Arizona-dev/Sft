import { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import * as anchor from "@project-serum/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { connectUserWallet } from "../actions/walletSlice";

import { shortenAddress } from "../candy-machine";

import { useSelector, useDispatch } from "react-redux";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const ConnectButton = styled(WalletDialogButton)``;

export interface NavbarProps {
  connection: anchor.web3.Connection;
}

const Navbar = (props: NavbarProps) => {
  const [active, setActive] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);
  const [balance, setBalance] = useState<number>();

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  const MintContainer = styled.div``;
  const wallet = useAnchorWallet();
  const dispatch = useDispatch();

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

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex nav-font justify-items-stretch items-center custom-black">
          <div className="flex lg:w-3/12 justify-start md:justify-center">
            <Link to="/" className="flex">
              <svg
                width="190px"
                height="80px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="150.2400329589844 34.99501953125 199.51993408203126 80.0099609375"
                className="background: rgba(0, 0, 0, 0);"
                preserveAspectRatio="xMidYMid"
              >
                <defs>
                  <linearGradient
                    id="editing-shiny-gradient"
                    x1="0.5087262032186417"
                    x2="0.49127379678135824"
                    y1="0.00007615242180436521"
                    y2="0.9999238475781956"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0.0" stopColor="#00ffa3" />
                    <stop offset="0.5" stopColor="#03e1ff" />
                    <stop offset="1.0" stopColor="#dc1fff" />
                  </linearGradient>
                  <linearGradient
                    id="editing-shiny-gradient2"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop offset="0.2" stopColor="#fff" stopOpacity="0.8" />
                    <stop offset="0.8" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                  <filter
                    id="editing-shiny2"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feMorphology operator="erode" radius="2" />
                  </filter>
                  <filter
                    id="editing-shiny"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feFlood floodColor="#fff" result="flood" />
                    <feConvolveMatrix
                      in="SourceGraphic"
                      result="conv"
                      order="8,8"
                      divisor="1"
                      kernelMatrix="0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0"
                    />
                    <feOffset dx="0" dy="4" in="conv" result="offset" />
                    <feComposite
                      operator="in"
                      in="flood"
                      in2="offset"
                      result="comp"
                    />
                    <feGaussianBlur
                      in="offset"
                      stdDeviation="3"
                      result="shadow"
                    />
                    <feColorMatrix
                      in="shadow"
                      type="matrix"
                      values="0.7 0 0 0 0  0 0.7 0 0 0  0 0 0.7 0 0  0 0 0 0.3 0"
                      result="dark-shadow"
                    />
                    <feOffset
                      dx="0"
                      dy="4"
                      in="dark-shadow"
                      result="offset-shadow"
                    />
                    <feOffset dx="0" dy="2" in="conv" result="offset-2" />
                    <feComposite
                      operator="out"
                      in="offset"
                      in2="offset-2"
                      result="edge-diff"
                    />
                    <feGaussianBlur
                      in="edge-diff"
                      stdDeviation="1"
                      result="edge-blur"
                    />
                    <feColorMatrix
                      in="edge-blur"
                      result="edge-shadow"
                      type="matrix"
                      values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
                    />
                    <feComposite
                      operator="in"
                      in="edge-shadow"
                      in2="offset"
                      result="edge-shadow-in"
                    />
                    <feOffset
                      dx="0"
                      dy="1"
                      in="edge-shadow-in"
                      result="edge-shadow-final"
                    />
                    <feMerge result="out">
                      <feMergeNode in="offset-shadow" />
                      <feMergeNode in="comp" />
                      <feMergeNode in="edge-shadow-final" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <g filter="url(#editing-shiny)">
                  <g transform="translate(206.875, 88.125)">
                    <path
                      d="M22.50-3.75L3.75-3.75L3.75-7.50L0-7.50L0-11.25L7.50-11.25L7.50-7.50L18.75-7.50L18.75-15L3.75-15L3.75-18.75L0-18.75L0-26.25L3.75-26.25L3.75-30L22.50-30L22.50-26.25L26.25-26.25L26.25-22.50L18.75-22.50L18.75-26.25L7.50-26.25L7.50-18.75L22.50-18.75L22.50-15L26.25-15L26.25-7.50L22.50-7.50L22.50-3.75ZM37.50-3.75L30-3.75L30-30L56.25-30L56.25-26.25L37.50-26.25L37.50-18.75L52.50-18.75L52.50-15L37.50-15L37.50-3.75ZM78.75-3.75L71.25-3.75L71.25-26.25L63.75-26.25L63.75-30L86.25-30L86.25-26.25L78.75-26.25L78.75-3.75Z"
                      fill="url(#editing-shiny-gradient)"
                    />
                  </g>
                </g>
                <g filter="url(#editing-shiny2)">
                  <g transform="translate(206.875, 88.125)">
                    <path
                      d="M22.50-3.75L3.75-3.75L3.75-7.50L0-7.50L0-11.25L7.50-11.25L7.50-7.50L18.75-7.50L18.75-15L3.75-15L3.75-18.75L0-18.75L0-26.25L3.75-26.25L3.75-30L22.50-30L22.50-26.25L26.25-26.25L26.25-22.50L18.75-22.50L18.75-26.25L7.50-26.25L7.50-18.75L22.50-18.75L22.50-15L26.25-15L26.25-7.50L22.50-7.50L22.50-3.75ZM37.50-3.75L30-3.75L30-30L56.25-30L56.25-26.25L37.50-26.25L37.50-18.75L52.50-18.75L52.50-15L37.50-15L37.50-3.75ZM78.75-3.75L71.25-3.75L71.25-26.25L63.75-26.25L63.75-30L86.25-30L86.25-26.25L78.75-26.25L78.75-3.75Z"
                      fill="url(#editing-shiny-gradient2)"
                    />
                  </g>
                </g>
              </svg>
            </Link>
          </div>
          <div className="hidden lg:inline-block w-6/12">
            <div className="space-x-2">
              <NavLink to="/" className="py-4 px-2">
                Home
              </NavLink>
              <NavLink to="/mint" className="py-4 px-2">
                Presale
              </NavLink>
              <NavLink to="/mysft" className="py-4 px-2">
                MySFT
              </NavLink>
              <NavLink to="/search" className="py-4 px-2">
                SearchSFT
              </NavLink>
              <button
                className={`py-4 px-2 inline-flex cursor-pointer justify-center`}
                type="button"
                onClick={() => (active ? setActive(false) : setActive(true))}
              >
                Other
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-2 h-5 w-5 group-hover:text-green-400"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <div
                  className={`${
                    active ? "fixed" : "hidden"
                  } bg-white rounded-b-md shadow-lg top-20 w-28 py-2`}
                >
                  <NavLink
                    to="assets"
                    className="p-1 block w-full whitespace-nowrap"
                  >
                    Assets
                  </NavLink>
                  <NavLink
                    to="faq"
                    className="p-1 mt-2 block w-full whitespace-nowrap"
                  >
                    FAQ
                  </NavLink>
                </div>
              </button>
            </div>
          </div>
          <div className="flex lg:mx-4">
            <MintContainer>
              {!wallet ? (
                <ConnectButton type="button">
                  <p className="text-xs w-28 text-center">Connect Wallet</p>
                </ConnectButton>
              ) : (
                <div className="border-2 rounded-md px-2 py-1 w-36 border-green-400">
                  {wallet && (
                    <p className="text-xs">
                      <b>Wallet </b>
                      {shortenAddress(wallet.publicKey.toBase58() || "")}
                    </p>
                  )}
                  {wallet && (
                    <p className="text-xs">
                      <b>Balance</b> {(balance || 0).toLocaleString()} SOL
                    </p>
                  )}
                </div>
              )}
            </MintContainer>
          </div>
          <div className="flex lg:hidden w-full justify-end mx-5">
            <button
              className={`menu ${
                mobileNav ? "opened" : ""
              } hover:bg-green-100 rounded-md`}
              onClick={() => setMobileNav(!mobileNav)}
              aria-label="Main Menu"
            >
              <svg width="30" height="30" viewBox="0 0 100 100">
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
          <div className="hidden lg:flex space-x-2 w-3/12 justify-center">
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
        <div
          className={`lg:hidden shadow-lg text-xl w-full items-center custom-black bg-white z-10 p-4 ${
            mobileNav ? "block" : "hidden"
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
                Presale
              </NavLink>
            </li>
            <li>
              <NavLink to="mysft" className="block py-4 px-2">
                MySFT
              </NavLink>
            </li>
            <li>
              <NavLink to="search" className="block py-4 px-2">
                SearchSFT
              </NavLink>
            </li>
            <li>
              <NavLink to="assets" className="block py-4 px-2">
                Assets
              </NavLink>
            </li>
            <li>
              <NavLink to="faq" className="block py-4 px-2">
                FAQ
              </NavLink>
            </li>
            <li>
              <div className="flex flex-wrap justify-center py-4">
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
                  href="https://discord.gg/eQWZ9c7Wbt"
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
