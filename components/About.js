import React, { useState } from 'react'; // Import React and useState
import Link from 'next/link';
import styles from './../styles/about.module.css'; // Import the CSS module

const TeamMember = ({ name, image, socialLinks }) => {
  return (
    <div className={styles.teamMember}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className={styles.socialLinks}>
        {socialLinks.map((link, index) => (
          <Link href={link.url} key={index}>
            <a target="_blank" rel="noreferrer noopener">
              <img src={link.icon} alt={link.name} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

const About = (props) => {
  const [credit, setCredit] = useState(true); // Use setCredit instead of viewCredit
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
      image: '/Eskin.png',
      socialLinks: [
        {
          name: 'Twitter',
          icon: '/twitter.svg',
          url: 'https://twitter.com/eslinjohn',
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
useEffect(() => {
		if (props.about) {
			setCredit(true);
		}
	}, [props.about]);

	const handleAbout = (number) => {
		props.setRegion(number);
		localStorage.setCredit("credit", number);
		credit(true);
		setCredit(false);
	}
  return (
    <div className={styles.aboutUsPage}>
      <h1>About Us</h1>
      <div className={styles.teamMembers}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))} {/* Close the map function properly */}
      </div>
    </div>
  );
};

export default About;
