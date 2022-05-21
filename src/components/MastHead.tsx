import React from "react";
import FadeInSection from "./FadeInSection";

const MastHead: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <FadeInSection>
          <div className="font-syne text-center flex flex-col mx-2">
            <h1 className="font-medium text-6xl xl:text-5xl mb-3">
              We are Solana Funky Trolls
            </h1>
            <hr
              style={{
                color: "green",
                backgroundColor: "rgba(52, 211, 153, 1)",
                height: "4px",
              }}
            />
            <h2 className="text-3xl xl:text-2xl underline-offset-6 mt-3">
              A NFT community on the <u>Solana</u> blockchain
            </h2>
          </div>
        </FadeInSection>
      </div>
      <hr></hr>
      <section>
        {/* What is solana funky trolls? */}
        <FadeInSection>
          <div className="md:flex pt-10 md:pt-20 pb-20 mx-6 md:mx-10 lg:py-32">
            <div className="md:w-1/2 lg:text-right sm:flex lg:flex-row-reverse relative">
              <div className="lg:text-right lg:pr-24">
                <p className="text-xl md:text-2xl lg:text-4xl font-syne font-bold">
                  WHAT IS
                  <span className="lg:w-full md:block">
                    {" "}
                    SOLANA FUNKY TROLLS?
                  </span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 text-base lg:pr-40 pt-10 md:pt-0 tracking-wide">
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
          <div className="md:flex md:pt-20 pb-20 mx-6 md:mx-10 lg:py-32">
            <div className="md:w-1/2 lg:order-2 lg:flex-row-reverse relative">
              <div className="lg:text-left lg:pr-24">
                <p className="text-xl md:text-2xl lg:text-4xl font-syne font-bold">
                  HOW MUCH SFT
                  <span className="lg:w-full md:block"> CAN I MINT?</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 lg:text-right lg:order-1 lg:flex-row-reverse text-base lg:pl-10 lg:pr-24 2xl: pt-10 md:pt-0 tracking-wide">
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
          <FadeInSection>{/* Where is stored the metadata? */}</FadeInSection>
          <div className="md:flex pt-10 md:pt-20 pb-20 mx-6 md:mx-10 lg:py-32">
            <div className="md:w-1/2 lg:text-right sm:flex lg:flex-row-reverse relative">
              <div className="lg:text-right lg:pr-24">
                <p className="text-xl md:text-2xl lg:text-4xl font-syne font-bold">
                  WHERE IS STORED
                  <span className="lg:w-full md:block"> THE METADATA?</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 text-base lg:pr-40 pt-10 md:pt-0 tracking-wide">
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
