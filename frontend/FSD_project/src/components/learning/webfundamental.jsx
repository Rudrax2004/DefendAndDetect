/* eslint-disable no-unused-vars */
// WebFundamentalsPage.jsx
import React from 'react';
import Footer from '../Footers/footer';
import Header from '../Headers/header';
import ParticlesContainer from "../practice/lab1/particle";
import MatrixRainCode from '../MatrixRainCode/MatrixRainCode';
const WebFundamentals = () => {
  return (
    <div >
      <Header />
      <div className="bg-black mt-20 container ">
        <div className="bg-opacity-70 bg-gray-800 p-8">
          <h1 className="text-3xl font-bold text-yellow-500 mb-8">Web Fundamentals</h1>
          <section className="mb-8">
<h2 className="text-2xl font-bold text-gray-400 mb-4">About</h2>
<p className="text-gray-200">
  Welcome to the Web Application Security Path! This learning path is designed to teach you the essentials of attacking web applications. The path is divided into four sections, each focusing on different aspects of web security. Feel free to explore and check off the topics as you progress through your learning journey.
</p>
</section>

<section className="mb-8">
<h2 className="text-2xl font-bold text-gray-400 mb-4">Section 1: How The Web Works</h2>
<p className="text-gray-200">
This section provides fundamental knowledge about the functioning of the web. It covers topics such as Domain Name System (DNS) in detail, an in-depth understanding of Hypertext Transfer Protocol (HTTP), insights into how websites work, and a comprehensive overview of putting these concepts together.          </p>

</section>

<section className="mb-8">
<h2 className="text-2xl font-bold text-gray-400 mb-4">Section 2: Introduction to Web Hacking</h2>
<p className="text-gray-200">
  {`In this section, you will delve into the essentials of web hacking. Topics include navigating through an application, discovering content, enumerating subdomains, bypassing authentication, understanding Insecure Direct Object Reference (IDOR), dealing with File Inclusion, an introduction to Server-Side Request Forgery (SSRF), and exploiting common vulnerabilities like Cross-site Scripting (XSS) and SQL Injection.`}
</p>
<form>
  <ul className="list-disc ml-8 text4gray-700">
  </ul>
</form>
</section>

<section className="mb-8">
<h2 className="text-2xl font-bold text-gray-400 mb-4">Section 3: Security Tools - Burp Suite</h2>
<p className="text-gray-200">
  {`This section focuses on one of the industry-standard tools, Burp Suite. You'll start with the basics and progress to using advanced features such as Repeater, Intruder, and other modules. Additionally, you'll explore extensions that enhance the functionality of Burp Suite.`}
</p>
</section>

<section className="mb-8">
<h2 className="text-2xl font-bold text-gray-400 mb-4">Section 4: Web Hacking Fundamentals</h2>
<p className="text-gray-200">
  {`Building upon the basics, this section reinforces your understanding of how websites work and HTTP. It revisits Burp Suite basics and explores the latest version of the OWASP Top 10 for 2021. Practical exercises with OWASP Juice Shop, understanding upload vulnerabilities, and navigating through challenges like "Pickle Rick" will solidify your web hacking fundamentals.`}
</p>
</section>
        </div>
      </div>
      <MatrixRainCode/>
      <Footer />
    </div>
  );
};

export default WebFundamentals;

