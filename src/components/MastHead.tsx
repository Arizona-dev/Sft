import React from "react";

const MastHead: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/vecteezy_1.mp4" type="video/mp4" />
        </video>
        <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
          <img
            src="/assets/logo.png"
            alt="logo"
            width={128 / 3}
            height={114 / 3}
          />
        </div>
        <div className="font-bold z-10 text-white opacity-90 text-center flex flex-col items-center justify-center">
          <h1 className="p-1 text-6xl xl:text-5xl bg-black bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">Solana Funky Trolls</h1>
          <h2 className="mt-4 p-1 text-4xl xl:text-3xl tracking-tight bg-black">
            They're out !
          </h2>
        </div>
        <div className="flex-grow-0 pb-20">
          <img
            src="/assets/arrow-down.png"
            width={188 / 3}
            height={105 / 3}
            alt="scroll down"
          />
        </div>
      </div>
      <section>
        <div className="flex flex-col items-start md:flex-row mx-10 my-20">
          <div className="md:w-1/2 bg-blue-50 rounded-lg p-6">
            <p className="text-lg md:text-2xl text-green-400 font-medium uppercase tracking-wide mb-2">
              Solana Funky Trolls
            </p>
            <p className="text-sm md:text-base custom-black tracking-wide mb-2">
              From the darkest forest to icy mountains, there is always a troll.
              Trolling is a way of life, now there is a path to do it with
              style!
            </p>
            <p className="text-sm md:text-base custom-black tracking-wide mb-2">
              The SFT is a collection of 9,999 unique randomly generated
              FunkyTrolls stored on the Solana blockchain. With a minting cost
              of 2 SOL, get a chance to get the rarest ones and show your troll
              attitude!
            </p>
            <p className="text-sm md:text-base custom-black tracking-wide mb-2">
              The holders will be rewarded on an ongong basis and a
              specific wallet will be setup to block funds on long-term
              stacking.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              className="mx-auto -mt-10"
              src="../assets/sft_preview.gif"
              alt="sft preview"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MastHead;
