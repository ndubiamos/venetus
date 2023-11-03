// About.js
import React from "react";
import styles from "./../styles/About.module.css";
import Dashboard from "./Dashboard";

const teamMembers = [
  {
    name: "Cavalo Humaid",
    image: "/cavalo.png",
    twitterHandle: "@cavalohumaid",
  },
  {
    name: "Eskin John",
    image: "/Eskin.png",
    twitterHandle: "@eskinjohn",
  },
  {
    name: "Jane Doe",
    image: "/jane.png",
    twitterHandle: "@janedoe",
  },
];

const About = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.nav}>
        <div className={styles.header}>Venetus</div>
        <div className={styles.right}>
          <img
            src="settings.svg"
            onClick={() => props.setSettings(true)}
            className={styles.settings}
          />
          <img
            onClick={() => handleShare()}
            className={styles.help}
            src="share.svg"
          />
        </div>
    <div className={styles.aboutPage}>
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
