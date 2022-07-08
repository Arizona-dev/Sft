const Footer = () => {
  return (
    <footer className="bottom-0">
      <div className="flex flex-row w-full items-center bg-black py-2">
        <p className="w-1/2 font-light text-white text-xs flex flex-col sm:flex-row justify-center text-center sm:text-left">
          © Solana Funky Trolls
          <span className="sm:pl-1">2022</span>
        </p>
        <div className="flex flex-row space-x-4 mobile:space-x-6 text-center w-1/2 justify-center">
          <a
            href="https://discord.com/invite/eQWZ9c7Wbt"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col sm:flex-row justify-center items-center text-white f-social-icon p-1"
          >
            <img
              src="assets/images/discord-white.svg"
              className="w-6 mobile:w-5"
              alt="discord logo"
            />
            <span className="pt-1 sm:pt-0 sm:pl-2 text-xs font-medium hidden mobile:flex">
              Join Discord
            </span>
          </a>
          <a
            href="https://twitter.com/S_FunkyTrolls"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col sm:flex-row justify-center items-center text-white p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 21"
              className="w-6 mobile:w-5"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
            <span className="pt-1 sm:pt-0 sm:pl-2 text-xs font-medium hidden mobile:flex">
              Follow Us
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
