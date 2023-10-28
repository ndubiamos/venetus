import React from "react";
import styles from "./../styles/Desktop.module.css";
import Splash from "./Splash";

const Desktop = (props) => {
  return (
    <div className={styles.desktop}>
      {props.check && (
        <Splash
          region={props.region}
          pred={props.pred}
          setPred={props.setPred}
          tensor={props.tensor}
          setTensor={props.setTensor}
          setNum={props.setNum}
          num={props.num}
          onboarding={props.onboarding}
          setRegion={props.setRegion}
        />
      )}
      <div className={styles.badge}>
        <img src="logo-with-back.svg" />
        <div className={styles.badgewrap}>
          <div className={styles.name}>Venetus</div>
          <div className={styles.credit}>
            Made by{" "}
            <a href="https://www.linkedin.com/in/leonorfurtado" target="_blank">
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
      <a
        href="https://github.com/ndubiamos/venetus"
        target="_blank"
        className={styles.github}
      >
        <img src="github.svg" /> View on GitHub
      </a>
      <div className={styles.qrcode}>
        <img src="qrcode.png" />
        <span>Open on your phone ✨</span>
      </div>
    </div>
  );
};

export default Desktop;
