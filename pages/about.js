// pages/about.js
import React, { useEffect } from 'react';
import About from '../components/About';
import styles from '../styles/About.module.css';
import Desktop from './Desktop';
import Head from 'next/head';

const teamMembers = [
  {
    name: 'Cavalo Humaid',
    image: '/cavalo.png',
    twitterHandle: '@cavalohumaid',
  },
  {
    name: 'Eskin John',
    image: '/eskin.png',
    twitterHandle: '@eskinjohn',
  },
  {
    name: 'Jane Doe',
    image: '/jane.png',
    twitterHandle: '@janedoe',
  },
];

const About = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
          console.log('Service worker registered: ', registration);
        }).catch(error => {
          console.log('Service worker registration failed: ', error);
        });
      });
    }
  }, []);

  return (
    <div className={styles.aboutPage}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Information about our team members" />
        {/* Add more meta tags as needed */}
        <link rel="manifest" href="/manifest.json" />
        {/* Include other necessary meta tags for PWA */}
      </Head>
      <Navbar />
      <h1>About Us</h1>
      <div className={styles.teamMembersGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <a href={`https://twitter.com/${member.twitterHandle}`} target="_blank" className={styles.twitterLink}>
              <img src="/twitter.svg" alt="Twitter" className={styles.twitterIcon} />
              {member.twitterHandle}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
