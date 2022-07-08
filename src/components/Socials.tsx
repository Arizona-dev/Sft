import React from "react";
import FadeInSection from "./FadeInSection";

const Socials: React.FC = () => {
  return (
    <div className="mx-auto">
      <FadeInSection>
        <div className="md:flex py-20 mx-6 md:mx-10 md:px-0 lg:py-32">
          <div className="md:w-1/2 lg:text-right md:flex lg:flex-row-reverse lg:pr-24">
            <h3 className="pb-5 md:pb-0 text-xl md:text-2xl lg:text-4xl lg:ml-44 font-syne font-bold">
              THE <span className="lg:w-full md:block">TEAM</span>
            </h3>
          </div>
          <div className="md:w-1/2 text-base max-w-xl grid grid-cols-2 gap-5">
            <div>
              <a
                href="https://twitter.com/themaze_eth"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/images/team/themaze.png" alt="sft_maze" />
                <p className="font-bold font-syne uppercase pt-5 text-sm sm:text-base">
                  @themaze_eth
                </p>
              </a>
              <p className="text-sm">Artist</p>
            </div>
            <div>
              <a
                href="https://twitter.com/Zhenzhe_"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/images/team/zhen.png" alt="sft_zhen" />
                <p className="font-bold font-syne uppercase pt-5 text-sm sm:text-base">@Zhenzhe_</p>
              </a>
              <p className="text-sm">Engineering</p>
            </div>
          </div>
        </div>
      </FadeInSection>
      <hr></hr>
      <div className="mx-auto color-dark-text">
        <div className="md:flex py-20 mx-6 md:mx-10 md:px-0 lg:py-32">
          <div className="md:w-1/2 lg:text-right md:flex lg:flex-row-reverse lg:pr-24">
            <h3 className="pb-5 md:pb-0 text-xl md:text-2xl lg:text-4xl lg:ml-44 font-syne font-bold">
              JOIN OUR
              <span className="lg:w-full md:block"> COMMUNITY</span>
            </h3>
          </div>
          <div className="md:w-1/2 text-left">
            <p className="md:mx-auto mb-10">
              Join our Discord server and follow us on Twitter to keep up to
              date with Solana Funky Trolls!
            </p>
            <div className="flex flex-row space-x-4 text-center">
              <a
                href="https://discord.com/invite/eQWZ9c7Wbt"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col sm:flex-row justify-center items-center button-sft bg-black rounded-lg text-white p-2 sm:p-5 w-48"
              >
                <img
                  src="assets/images/discord-white.svg"
                  className="w-5"
                  alt="discord logo"
                />
                <span className="pt-1 sm:pt-0 sm:pl-2 text-xs md:text-sm font-medium">
                  Join Discord
                </span>
              </a>
              <a
                href="https://twitter.com/S_FunkyTrolls"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col sm:flex-row justify-center items-center button-sft bg-black rounded-lg text-white p-2 sm:p-5 w-48"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 22"
                  className="w-5"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sm:pl-2 text-xs md:text-sm font-medium">
                  Follow us
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
