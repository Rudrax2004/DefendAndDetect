/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { TECollapse } from 'tw-elements-react';
import { useAuth } from '../storage/auth';

const AccordionBasicExample = ({ index }) => {
  const [activeElements, setActiveElements] = useState([]);
  const { TokenAuthorization } = useAuth();
  const [fyqs, setFyqs] = useState([]);

  const handleClick = (value) => {
    const index = activeElements.indexOf(value);
    if (index !== -1) {
      setActiveElements(activeElements.filter((el) => el !== value));
    } else {
      setActiveElements([...activeElements, value]);
    }
  };

  const getAllFyqs = async () => {
    try {
      const response = await fetch('https://defendanddetect-production.up.railway.app/api/labs/fyq', {
        method: "GET",
        headers: {
          "Authorization": TokenAuthorization,
        },
      });

      const data = await response.json();
      await setFyqs(data.labs[index].fyqs); // Set the fyqs array of the first lab in state
      if (data.labs[index].fyqs.length > 0) {
        // Open the first accordion item by default
        setActiveElements([data.labs[index].fyqs[0]._id]);
      }
    } catch (error) {
      console.log("Failed to get data: ", error);
    }
  }

  useEffect(() => {
    getAllFyqs();
  }, []);

  return (
    <div className='container rounded-lg border border-gray-100 p-4'>
    <p className='text-green-600 text-3xl font-bold mb-4'>Unlock Your knowledge!</p>
<div className='z-10'>
      {fyqs.map((fyq) => (
        <div key={fyq._id} id="accordionExample">
          <div className="rounded-[10px] mb-2 mt-2 border border-neutral-200 dark:border-neutral-500">
            <h2 className="mb-0" id={`heading${fyq._id}`}>
              <button
                className={`bg-primary font-bold text-zinc-300 group relative flex items-center rounded-t-[5px] border-0 w-full h-full px-5 py-4 text-left text-base transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring focus:border-primary focus:bg-blue-700 ${activeElements.includes(fyq._id) ? 'bg-blue-700' : ''}`}
                type="button"
                onClick={() => handleClick(fyq._id)}
                aria-expanded="true"
                aria-controls={`collapse${fyq._id}`}
              >
                {fyq.question}
                <span className="ml-auto h-5 w-5 shrink-0 fill-[#0034a4] transition-transform duration-300 ease-in-out motion-reduce:transition-none dark:fill-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`h-6 w-6 transform ${activeElements.includes(fyq._id) ? 'rotate-[-180deg]' : 'rotate-0'}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse
              show={activeElements.includes(fyq._id)}
              className="!mt-0 !rounded-b-none rounded-lg border border-gray-100 !shadow-none"
            >
              <div className="rounded-lg border border-gray-100 text-zinc-300 font-medium px-5 py-4">{fyq.answer}</div>
            </TECollapse>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default AccordionBasicExample;
