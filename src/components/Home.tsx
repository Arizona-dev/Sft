import { Link } from "react-router-dom";
import MastHead from "./MastHead";
import Roadmap from "./Roadmap"

const Home: React.FC = () => {
  return (
    <>
      <MastHead />
      <Roadmap />
      {/* <div className="h-full flex">
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 flex items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              <div className="pt-8 max-w-7xl mx-auto lg:px-8 bg-white border border-opacity-50 shadow-lg">
                <div className="flex px-6">
                  <h1 className="flex-1 text-2xl font-bold custom-black justify-center">
                    Solana Funky Trolls
                  </h1>
                </div>
                <div className="py-5">
                  <div className="bg-gray-50">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-indigo-600">
                          Mint your SFT and join the community.
                        </span>
                      </h2>
                      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                          <Link to="/mint" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Get Yours</Link>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Home;
