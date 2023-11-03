import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/About.module.css'; // Import the CSS module

const TeamMember = ({ name, image, socialLinks }) => {
  return (
    <div className={styles.teamMember}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className={styles.socialLinks}>
        {socialLinks.map((link, index) => (
          <Link href={link.url} key={index}>
            <a target="_blank">
              <img src={link.icon} alt={link.name} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

const About = (props) => {
  const [author, setAuthor] = useState(""); // Use setAuthor instead of viewAuthor
  const handleContinue = () => {
    props.handleAbout(author);
  };
  const teamMembers = [
    {
      name: 'Cavalo Humaid',
      image: '/cavalo.png',
      socialLinks: [
        {
          name: 'Twitter',
          icon: '/twitter.svg',
          url: 'https://twitter.com/cavalohumaid',
        },
      ],
    },
    {
      name: 'Eskin John',
      image: '/eskin.png',
      socialLinks: [
        {
          name: 'Twitter',
          icon: '/twitter.svg',
          url: 'https://twitter.com/eskinjohn',
        },
      ],
    },
    {
      name: 'Jane Doe',
      image: '/jane.png',
      socialLinks: [
        {
          name: 'Twitter',
          icon: '/twitter.svg',
          url: 'https://twitter.com/janedoe',
        },
      ],
    },
  ];

  return (
    <div className={styles.aboutUsPage}>
      <h1>About Us</h1>
      <div className={styles.teamMembers}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <div className={styles.button} onClick={handleContinue}>
        Close
      </div>
    </div>
  );
};

export default About;
