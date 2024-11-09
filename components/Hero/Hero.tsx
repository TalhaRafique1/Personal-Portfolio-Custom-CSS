import React from 'react';
import Image from 'next/image';
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import cssStyle from './Hero.module.css';

const Hero = () => {
  return (
    <div className={cssStyle.heroContainer}>
      <Image
        className={cssStyle.heroImage}
        alt="hero"
        src="/images/Profile1.jpg"
        width={400}
        height={400}
      />
      <h1 className={cssStyle.heroTitle}>
        Hi, I am Talha Rafique – A Frontend Developer Passionate About Crafting Interactive Web Experiences
      </h1>
      <p className={cssStyle.heroDescription}>
        Hello! I’m Talha Rafique, a dedicated frontend developer with a passion for crafting engaging and functional web applications. From building a to-do list app, number guessing game, calculator, to an adventure game and currency converter, I bring ideas to life with clean, efficient code.
      </p>
      <div className={cssStyle.heroIcons}>
        <a href="https://www.linkedin.com/in/your-profile" className={cssStyle.iconButton}>
          <ImLinkedin />
        </a>
        <a href="https://github.com/your-profile" className={cssStyle.iconButton}>
          <FaGithubSquare />
        </a>
        <a href="https://twitter.com/your-profile" className={cssStyle.iconButton}>
          <FaSquareXTwitter />
        </a>
        <a href="https://facebook.com/your-profile" className={cssStyle.iconButton}>
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Hero;
