import React from "react";
import FadeInSection from "./FadeInSection";

const MastHead: React.FC = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center"
        style={{ minHeight: "calc(100vh - 60px)" }}
      >
        <FadeInSection>
          <div className="font-syne text-center flex flex-col mx-4 -mt-20">
            <h1 className="font-medium text-5xl lg:text-6xl mb-3">
              We are Solana Funky Trolls
            </h1>
            <div
              style={{
                backgroundColor: "rgba(52, 211, 153, 1)",
                height: "4px",
              }}
            />
            <h2 className="text-3xl underline-offset-6 mt-3">
              A NFT community on the <u>Solana</u> blockchain
            </h2>
          </div>
        </FadeInSection>
      </div>
      <hr></hr>
      <section className="my-10">
        {/* What is solana funky trolls? */}
        <FadeInSection>
          <div className="md:flex py-10 mx-6 md:mx-10">
            <div className="md:w-1/2 lg:text-right sm:flex lg:flex-row-reverse relative pr-4 md:pr-0">
              <div className="lg:text-right lg:pr-24">
                <p className="text-xl md:text-2xl lg:text-4xl font-syne font-bold text-green-400">
                  WHAT IS
                  <span className="lg:w-full md:block">
                    {" "}
                    SOLANA FUNKY TROLLS?
                  </span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 text-base lg:pr-20 pt-6 md:pt-0 tracking-wide">
              <p>
                From the darkest forest to icy mountains, there is always a
                troll. Trolling is a way of life, now there is a path to do it
                with style!
              </p>
              <p className="mt-3">
                The SFT collection supply consists of 10 000 unique Funky Trolls
                that can be minted on the Solana blockchain.
              </p>
              <p className="mt-3">
                Each troll is randomly generated from over 200 possible traits
                across 10 layers.
              </p>
            </div>
          </div>
        </FadeInSection>
        {/* How much sft can I mint? */}
        <FadeInSection>
          <div className="md:flex py-10 mx-6 md:mx-10">
            <div className="md:w-1/2 lg:text-right sm:flex lg:flex-row-reverse relative pr-4 md:pr-0">
              <div className="lg:text-right lg:pr-24">
                <p className="text-xl md:text-2xl lg:text-4xl font-syne font-bold text-green-400">
                  HOW MUCH SFT
                  <span className="lg:w-full md:block"> CAN I MINT?</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 text-base lg:pr-20 pt-6 md:pt-0 tracking-wide">
              <p>
                9 925 SFT can be minted on the Solana blockchain as 75 SFT is
                kept in reserve for marketing, airdrops and events purposes.
              </p>
              <p className="mt-3">
                Minting quantity is not limited per wallet. If you want to buy
                more than one, just repeat the process.
              </p>
            </div>
          </div>
        </FadeInSection>
        {/* Where is stored the metadata? */}
        <FadeInSection>
          <div className="md:flex py-10 mx-6 md:mx-10">
            <div className="md:w-1/2 lg:text-right sm:flex lg:flex-row-reverse relative pr-4 md:pr-0">
              <div className="lg:text-right lg:pr-24">
                <p className="text-xl md:text-2xl lg:text-4xl font-syne font-bold text-green-400">
                  WHERE IS STORED
                  <span className="lg:w-full md:block"> THE METADATA?</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 text-base lg:pr-20 pt-6 md:pt-0 tracking-wide">
              <p>
                The Solana Funky Trolls' metadata is stored on Arwaeve, a
                permanent decentralised data storage.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
};

export default MastHead;
