import Footer from "../Footers/footer"
import Header from "../Headers/header"
import MatrixRainCode from "../MatrixRainCode/MatrixRainCode";
const Labs = () => {

  return (
    <>
     <MatrixRainCode />
    <Header/>
    <div className="bg-transparent backdrop-blur-md mt-10 grid sm:grid-cols-12 gap-3">
      <div className="col-span-12 md:col-span-4">
        <a
            className="mt-3 group relative block rounded-2xl overflow-hidden dark:focus:outline-none dark:focus:ring-3 dark:focus:ring-gray-200 border-4  hover:border-gray-300 border-gray-500"
            href="/lab1"
          >   <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/photos/sqllab.png" alt="..." />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2">
            <div className="font-mono font-bold text-2xl text-white rounded-lg p-3 bg-transparent backdrop-blur-lg backdrop-brightness-75">
              SQL Lab
            </div>
          </div>
        </a>
      </div>
      <div className="col-span-12 md:col-span-4">
        <a
            className="mt-3 group relative block rounded-2xl overflow-hidden dark:focus:outline-none dark:focus:ring-3 dark:focus:ring-gray-200 border-4  hover:border-gray-300 border-gray-500"
            href="/phishing"
          >   <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/photos/plab.png" alt="..." />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2">
            <div className="font-mono font-bold text-2xl text-white rounded-lg p-3 bg-transparent backdrop-blur-lg backdrop-brightness-75">
              Phishing Lab
            </div>
          </div>
        </a>
      </div>
      {/* <div className="col-span-12 md:col-span-4">
        <a
            className="mt-3 group relative block rounded-2xl overflow-hidden dark:focus:outline-none dark:focus:ring-3 dark:focus:ring-gray-200 border-4  hover:border-gray-300 border-gray-500"
            href="/emailSpoofing"
          >   <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/photos/emailSpoofing.jpeg" alt="..." />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2">
            <div className="font-mono font-bold text-2xl text-white rounded-lg p-3 bg-transparent backdrop-blur-lg backdrop-brightness-75">
              Link spoofing Lab
            </div>
          </div>
        </a>
      </div> */}
    </div>
    <Footer/>
    </>
  );
};

export default Labs;
