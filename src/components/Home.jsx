import React from 'react';
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle, 
  AiFillAmazonCircle, 
  AiFillYoutube, 
  AiFillInstagram
} from "react-icons/ai"

const Home = () => {
  return(
    <>
      <div className="home" >
        <main>
          <h1>VenturePortal</h1>
          
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Grpahics"/>

        <div>
          <p>
              We are your one and only solution to the tech problems you face
              every day. We are leading tech company whose aim is to increase the
              problem solving ability in children.
          </p>
        </div>  
      </div>

    <div className="home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p>
          As a highly self-motivated individual, I possess expertise in C++, Python, and JavaScript, along with a solid understanding of data structures. My proficiency in SQL allows me to handle databases with ease. I am genuinely passionate about creating web applications, with React being my tool of choice for crafting innovative and user-friendly interfaces. With a natural problem-solving mindset, I approach challenges with determination, seeking efficient and effective solutions. Additionally, my excellent teamwork and coordination skills enable me to collaborate seamlessly with colleagues, contributing to successful project outcomes. Overall, my diverse skill set and enthusiasm for technology drive me to excel in web development and deliver impactful solutions to complex problems.
        </p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>

        <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
            <a href="https://www.google.com/">
              <AiFillGoogleCircle />
              <p>Google</p>
            </a>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
            <a href="https://www.amazon.in/">
              <AiFillAmazonCircle />
              <p> Amazon</p>
            </a>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <a href="https://youtube.com/@arunvlogs52">
                <AiFillYoutube />
                <p>Youtube</p>
              </a>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <a href="https://instagram.com/arun_sh52">
                <AiFillInstagram />
                <p>Instagram </p>
              </a>
            </div>
          </article>
      </div>
    </div>
    

    </>
  );
  
};

export default Home