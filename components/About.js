import React from "react";
import styles from "./../styles/About.module.css";
import styles from "./../styles/Desktop.module.css";
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

const About = (props) => {
  // Define a function to handle the share action
  const handleShare = () => {
    // Implement the share functionality here
    // For example, you can use a share API or show a share dialog
    // This is a placeholder function
    console.log("Share action triggered");
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.nav}>
        <div className={styles.header}>Venetus</div>
        <div className={styles.right}>
          <img
            src="settings.svg"
            onClick={() => props.setSettings(true)}
            className={styles.settings}
            alt="Settings"
          />
          <img
            onClick={handleShare}
            className={styles.help}
            src="share.svg"
            alt="Share"
          />
        </div>
      </div>
      <div className={styles.aboutPage}>
        <h1>About Us</h1>
        <div className={styles.teamMembersGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <a
                href={`https://twitter.com/${member.twitterHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.twitterLink}
              >
                <img
                  src="/twitter.svg"
                  alt="Twitter"
                  className={styles.twitterIcon}
                />
                {member.twitterHandle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
