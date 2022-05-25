import React from "react";
import { Link } from "react-router-dom";

const Roadmap: React.FC = () => {
  return (
    <section>
      <div className="bg-black text-white sm:px-5 pb-4">
        <div className="mx-auto flex flex-col items-start lg:flex-row">
          <div className="flex flex-col w-full sticky lg:w-1/3 px-4 lg:px-8 pt-12">
            <p className="text-3xl md:text-4xl text-green-400 uppercase mb-2 font-syne">
              Roadmap
            </p>
            <p className="text-sm md:text-base mb-4">
              Check out our roadmap for Solana Funky Trolls !
              <br />
              Go through all the steps to know the exact process of the fest.
            </p>
            <Link
              to="/mint"
              className="bg-transparent hover:bg-green-400 text-green-400 hover:text-white text-center rounded shadow hover:shadow-lg py-2 px-4 border border-green-400 hover:border-transparent"
            >
              Mint now
            </Link>
          </div>
          <div className="mx-auto pt-12 lg:w-2/3 sticky">
            <div className="w-full h-full">
              <div className="flex flex-col overflow-hidden px-4 lg:px-8">
                <div className="roadmap-divider"></div>
                <div className="mb-8 flex justify-between sm:flex-row-reverse items-center w-full ">
                  <div className="hidden sm:inline-block order-1 sm:w-6/12"></div>
                  <div className="order-1 sm:w-6/12 px-6 sm:px-8 py-4 sm:text-right">
                    <p className="mb-3 text-base text-green-400">
                      Stage 1 - Q2 2022
                    </p>
                    <h4 className="mb-3 font-bold font-syne text-lg md:text-2xl">
                      SFT Release & Open Mint
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-white text-opacity-100">
                      Solana Funky Trolls NFTs release ready for users to{" "}
                      <b>Mint</b> and join our community
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full">
                  <div className="hidden sm:flex order-1 w-6/12"></div>
                  <div className="order-1 sm:w-6/12 px-6 sm:px-8 py-4 text-left">
                    <p className="mb-3 text-base text-green-400">
                      Stage 2 - Q3 2022
                    </p>
                    <h4 className="mb-3 font-bold font-syne text-lg md:text-2xl">
                      Community Wallet
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-white text-opacity-100">
                      Setup of a dedicated community wallet where SFT holders
                      can submit ideas and vote for them
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between sm:flex-row-reverse items-center w-full ">
                  <div className="hidden sm:flex order-1 sm:w-6/12"></div>
                  <div className="order-1 sm:w-6/12 px-6 sm:px-8 py-4 sm:text-right">
                    <p className="mb-3 text-base text-green-400">
                      Stage 3 - Q3 2022
                    </p>
                    <h4 className="mb-3 font-bold font-syne text-lg md:text-2xl">
                      SFT Airdrop
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-white text-opacity-100">
                      The top <b>10</b> holders which has invited valid users on
                      the SFT Discord will receive <b>1 SFT</b>
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full">
                  <div className="hidden sm:flex order-1 w-6/12"></div>
                  <div className="order-1 sm:w-6/12 px-6 sm:px-8 py-4 text-left">
                    <p className="mb-3 text-base text-green-400">
                      Stage 4 - Q3 2022
                    </p>
                    <h4 className="mb-3 font-bold font-syne text-lg md:text-2xl">
                      Mechanical Keyboard Prototyping
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-white text-opacity-100">
                      Prototyping the <b>SFT MechKey</b> with special discount
                      for SFT holders
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between sm:flex-row-reverse items-center w-full ">
                  <div className="hidden sm:flex order-1 sm:w-6/12"></div>
                  <div className="order-1 sm:w-6/12 px-6 sm:px-8 py-4 sm:text-right">
                    <p className="mb-3 text-base text-green-400">
                      Stage 5 - Q4 2022
                    </p>
                    <h4 className="mb-3 font-bold font-syne text-lg md:text-2xl">
                      SFT MechKey Launch & Pre-Order
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-white text-opacity-100">
                      Launching the SFT MechKey on our website and taking
                      pre-orders
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full">
                  <div className="hidden sm:flex order-1 w-6/12"></div>
                  <div className="order-1 sm:w-6/12 px-6 sm:px-8 py-4 text-left">
                    <p className="mb-3 text-base text-green-400">
                      Stage 6 - Q2 2023
                    </p>
                    <h4 className="mb-3 font-bold font-syne text-lg md:text-2xl">
                      SFT MechKey Shipping
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-white text-opacity-100">
                      Shipping out Orders !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
