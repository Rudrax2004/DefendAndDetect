import Footer from "../Footers/footer"
import Header from "../Headers/header"
import MatrixRainCode from "../MatrixRainCode/MatrixRainCode";
import ParticlesContainer from "../practice/lab1/particle";
const Learn = () => {

  return (
    <>
     <ParticlesContainer />
    <Header/>
    <div className="bg-transparent backdrop-blur-md mt-10 grid sm:grid-cols-12 gap-3">
        <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
          <a
            className="mt-3 group relative block rounded-2xl overflow-hidden dark:focus:outline-none dark:focus:ring-3 dark:focus:ring-gray-200 border-4  hover:border-gray-300 border-gray-500"
            href="/intro"
          >
            <div className="aspect-w-10 aspect-h-2 sm:aspect-none rounded-xl overflow-y-visible">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                src="photos/intro.png"
                alt="Image Description"
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2">
              <div className="font-mono font-bold text-2xl text-white rounded-lg p-3 bg-transparent backdrop-blur-md backdrop-brightness-90">
                Introduction to CyberSecurity
              </div>
            </div>
          </a>
        </div>


      <div className="mt-3 sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
        <a
            className="mt-3 group relative block rounded-2xl overflow-hidden dark:focus:outline-none dark:focus:ring-3 dark:focus:ring-gray-200 border-4  hover:border-gray-300 border-gray-500"
            href="/webfunda"
          >   <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/photos/web.png" alt="..." />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2">
            <div className="font-mono font-bold text-2xl text-white rounded-lg p-3 bg-transparent backdrop-blur-lg backdrop-brightness-90">
              Web Fundamental
            </div>
          </div>
        </a>
      </div>
     
      <div className="col-span-12 md:col-span-4">
        <a
            className="mt-3 group relative block rounded-2xl overflow-hidden dark:focus:outline-none dark:focus:ring-3 dark:focus:ring-gray-200 border-4  hover:border-gray-300 border-gray-500"
            href="/introphishing"
          > <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="photos/phishing.png" alt="..." />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2 ">
            <div className=" font-mono font-bold  text-2xl text-white rounded-lg p-3  bg-transparent backdrop-blur-sm backdrop-brightness-90">
              Phishing
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}

      <div className="col-span-10 sm:col-span-10 md:col-span-5 ">
  {/* Card */}
        <a
            className="mt-3 group relative block rounded-2xl overflow-hidden dark:focus:outline-none dark:focus:ring-3 dark:focus:ring-gray-200 border-4  hover:border-gray-300 border-gray-500"
            href="/introsql"
          >
    <div className="aspect-w-16 aspect-h-1 sm:aspect-none focus:ring-white font-medium rounded-xl overflow-hidden">
      <img
        className="mb-2 group-hover:scale-105 transition-transform duration-500 focus:ring-white font-medium ease-in-out rounded-xl w-full object-cover"
        src="photos/sql_injection.png"
      />
    </div>
    <div className="absolute bottom-0 start-0 end-0 p-2">
      <div className="font-mono font-bold text-2xl text-white rounded-lg p-3 focus:ring-white bg-transparent backdrop-blur-sm backdrop-brightness-90">
        SQL Injection
      </div>
    </div>
  </a>
  {/* End Card */}
</div>


      <div className="mr-2 col-span-12 sm:col-span-6 md:col-span-3">
        {/* Card */}
        <a
            className="mt-3 group relative block rounded-2xl overflow-hidden dark:focus:outline-none dark:focus:ring-3 dark:focus:ring-gray-200 border-4  hover:border-gray-300 border-gray-500"
            href="/introjr"
          >  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="photos/sjr.png" alt="..." />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2">
          <div className=" font-mono font-bold  text-2xl text-white rounded-lg p-3  bg-transparent backdrop-blur-md backdrop-brightness-90">
              Junior Security Analyst
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
    </div>
    {/* // End Grid */}
    <Footer/>
    </>
  );
};

export default Learn;
