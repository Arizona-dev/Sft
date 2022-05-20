import React from "react";

const Socials: React.FC = () => {
  return (
    <div className="mx-auto color-dark-text font-ibm-plex-mono">
      <div className="md:flex py-20 mx-6 md:mx-10 md:px-0 lg:py-32" id="team">
        <div className="md:w-1/2 lg:text-right md:flex lg:flex-row-reverse lg:pr-24 relative">
          <h3 className="pb-5 md:pb-0 text-xl md:text-2xl lg:text-4xl lg:ml-44 font-syne font-bold">
            THE <span className="lg:w-full md:block">TEAM</span>
          </h3>
        </div>
        <div className="md:w-1/2 text-base grid grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl">
          <div className="">
            <a href="https://twitter.com/themaze_eth" target="_blank" rel="noreferrer">
              <img src="/assets/images/team/themaze.png" alt="sft_maze" />
              <p className="font-syne font-bold uppercase pt-5">@themaze_eth</p>
            </a>
            <p className=" text-sm">Artist</p>
          </div>
          <div className="">
            <a href="https://twitter.com/Zhenzhe_" target="_blank" rel="noreferrer">
              <img src="/assets/images/team/zhen.png" alt="sft_zhen" />
              <p className="font-syne font-bold uppercase pt-5">@Zhenzhe_</p>
            </a>
            <p className=" text-sm">Engineering</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="py-20 mx-6 md:mx-10 md:px-0 lg:py-32">
        <div className="md:text-center relative">
          <div className="w-full md:flex lg:block md:px-10">
            <div className="md:w-1/2 lg:w-full md:text-left">
              <h3 className="text-xl md:text-4xl lg:text-center font-bold md:mx-auto">
                JOIN OUR DISCORD
                <span className="lg:w-full lg:block"> COMMUNITY</span>
              </h3>
            </div>
            <div className="md:w-1/2 lg:w-full md:text-left lg:text-center">
              <p className="lg:mt-10 md:mx-auto lg:w-1/3 mb-10">
                Join our Discord server to keep up to date with Solana Funky
                Trolls!
              </p>
              <a
                href="https://discord.com/invite/eQWZ9c7Wbt"
                target="_blank"
                rel="noreferrer"
                className="button-sft bg-custom-black rounded-lg text-white p-5 px-10 md:px-15 inline-block"
              >
                <img
                  src="assets/images/discord-white.svg"
                  className="w-5 inline-block"
                  alt="discord logo"
                />
                <span className="pl-3 text-sm font-medium">Join Discord</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
