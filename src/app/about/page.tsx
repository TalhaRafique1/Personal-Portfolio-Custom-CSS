import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import styles from './about.module.css'; // Import the CSS module

const About = () => (
  <div>
    <section className={styles.aboutContainer}>
      <div className={styles.aboutImageWrapper}>
        <Image
          className={styles.aboutImage}
          alt="hero"
          src="/images/Profile1.jpg"
          width={400}
          height={400} />
      </div>
      <div className={styles.aboutTextWrapper}>
        <h1 className={styles.aboutTitle}>
          Hi, I am Talha Rafique – A Frontend Developer Passionate About Crafting Interactive Web Experiences
        </h1>
        <p className={styles.aboutDescription}>
          Hello! I’m Talha Rafique, a dedicated frontend developer with a passion for crafting engaging and functional web applications. With a strong foundation in TypeScript and experience in developing projects like a to-do list app, number guessing game, calculator, adventure game, and currency converter, I enjoy transforming creative ideas into dynamic, interactive user experiences. I believe in clean, efficient code and am committed to continuous learning to keep up with the latest trends in web development. When I am not coding, I love exploring new tech innovations and honing my design skills.
        </p>
        <div className={styles.aboutIcons}>
          <Link href="https://www.linkedin.com/in/talha-rafique-1a70ab2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" passHref>
            <Link target="_blank" className={styles.iconLink} href={''}>
              <ImLinkedin />
            </Link>
          </Link>
          <Link href="https://github.com/TalhaRafique1" passHref>
            <Link target="_blank" className={styles.iconLink} href={''}>
              <FaGithubSquare />
            </Link>
          </Link>
          <Link href="https://x.com/Taha63796324?t=qS5S2ipD2UHTQNfpnIHdMA&s=09" passHref>
            <Link target="_blank" className={styles.iconLink} href={''}>
              <FaSquareXTwitter />
            </Link>
          </Link>
          <Link href="https://www.facebook.com/TalhaRafique" passHref>
            <Link target="_blank" className={styles.iconLink} href={''}>
              <FaFacebook />
            </Link>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default About;
