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
                    <div className={styles.badge}>
        <img src="logo-with-back.svg" />
        <div className={styles.badgewrap}>
          <div className={styles.name}>Venetus</div>
          <div className={styles.credit}>
            Made by{" "}
            <a href="https://www.linkedin.com/in/cavalohumaid" target="_blank">
              Cavalo H
            </a>{" "}
            &{" "}
            <a href="https://twitter.com/ndubiamos/" target="_blank">
             Eskin J
            </a>
          </div>
        </div>
      </div>
      <a
        href="https://twitter.com/intent/tweet?text=Check%20out%20Venetus%20to%20learn%20how%20to%20recycle%20your%20plastic%20better%20with%20AI&url=http%3A%2F%2Fvenetus.vercel.app"
        className={styles.share}
        target="_blank"
      >
        <img src="twitter.svg" /> Share
      </a>
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
