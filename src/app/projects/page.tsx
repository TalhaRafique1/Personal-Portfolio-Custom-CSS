import React from 'react';
import Image from 'next/image';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <div>
      <section className={`${styles['project-container']} mt-20`}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className={`${styles['project-title']} lg:w-1/3 lg:mb-0 mb-4`}>
              Here are some of my Projects
            </h1>
            <p className={`${styles['project-description']} lg:pl-6 lg:w-2/3 mx-auto`}>
              Here are some of the projects I have built using TypeScript, showcasing my skills in developing interactive and functional applications. From a task management to-do list, an engaging number guessing game, and a fully functional calculator, to an adventure game and a currency converter, each project reflects my commitment to clean code and user-friendly interfaces. Take a look at these projects to see how I approach problem-solving and web development in TypeScript!
            </p> 
          </div>

          <div className={styles['project-grid']}>
            <div className={styles['project-card']}>
              <Image
                width={300}
                height={200}
                alt="project-1"
                className={styles['project-image']}
                src="/images/To-Do.jpg"
              />
            </div>
            <div className={styles['project-card']}>
              <Image
                width={300}
                height={200}
                alt="project-2"
                className={styles['project-image']}
                src="/images/project.jpg"
              />
            </div>
            <div className={styles['project-card']}>
              <Image
                width={300}
                height={200}
                alt="project-3"
                className={styles['project-image']}
                src="/images/number.jpg"
              />
            </div>
            <div className={styles['project-card']}>
              <Image
                width={300}
                height={200}
                alt="project-4"
                className={styles['project-image']}
                src="/images/game.jpg"
              />
            </div>
            <div className={styles['project-card']}>
              <Image
                width={300}
                height={200}
                alt="project-5"
                className={styles['project-image']}
                src="/images/cli.jpg"
              />
            </div>
            <div className={styles['project-card']}>
              <Image
                width={300}
                height={200}
                alt="project-6"
                className={styles['project-image']}
                src="/images/calculator.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
