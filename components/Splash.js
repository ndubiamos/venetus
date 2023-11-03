import React, { useEffect, useState } from "react";
import styles from "./../styles/Splash.module.css";
import RegionSelect from "./RegionSelect";
import Onboarding from "./Onboarding";
import Dashboard from "./Dashboard";
import Viewer from "./Viewer";
import Settings from "./Settings";
import About from "./About";

const Splash = (props) => {
  const [getStarted, setGetStarted] = useState(false);
  const [done, setDone] = useState(false);
  const [done2, setDone2] = useState(false);
  const [view, setView] = useState(false);
  const [settings, setSettings] = useState(false);
  const [reset, setReset] = useState(false);
  const [on, setOn] = useState(false);
  const [author, setAuthor] = useState(false);

  useEffect(() => {
    if (props.region > 0) {
      setDone(true);
      setGetStarted(true);
    }
  }, [props.region]);

  useEffect(() => {
    if (props.onboarding) {
      setDone2(true);
    }
  }, [props.onboarding]);

  useEffect(() => {
    if (done2) {
      localStorage.setItem("onboarding", true);
      setOn(false);
    }
  }, [done2]);

  useEffect(() => {
    if (props.about) {
      setAuthor(false);
    }
  }, [props.about]);

  useEffect(() => {
    if (author) {
      localStorage.setItem("about", true);
      setAuthor(true);
    }
  }, [author]);

  const handleAbout = (about) => {
    props.setAuthor(true);
    setAuthor(true);
  };

  const handleRegion = (number) => {
    props.setRegion(number);
    localStorage.setItem("region", number);
    setDone(true);
    setReset(false);
  };

  return (
    <div className={styles.container}>
      {view && (
        <Viewer
          pred={props.pred}
          setPred={props.setPred}
          tensor={props.tensor}
          setTensor={props.setTensor}
          setView={setView}
          setNum={props.setNum}
          num={props.num}
          region={props.region}
          about={props.about}
          setAuthor={setAuthor}
        />
      )}
      {settings && !reset && !on && (
        <Settings setSettings={setSettings} setReset={setReset} setOn={setOn} />
      )}
      {done && done2 && !view && !settings && (
        <Dashboard
          setSettings={setSettings}
          setView={setView}
          num={props.num}
          setNum={props.setNum}
          region={props.region}
        />
      )}
      {on && <Onboarding setDone={setDone2} setOn={setOn} />}
      {getStarted && done && !done2 && <Onboarding setDone={setDone2} setOn={setOn} />}
      {reset && <RegionSelect handleRegion={handleRegion} region={props.region} />}
      {author && <About setAuthor={setAuthor} about={props.about} />} {/* Fixed the props */}
      {setAuthor && !author && !about && (
        <About setAuthor={setAuthor} aboout={props.about}/>
        )}
      {getStarted && !done2 && !done && (
        <RegionSelect handleRegion={handleRegion} region={props.region} />
      )}
      {!getStarted && (
        <div className={styles.splash}>
          <div className={styles.logo}>
            <img src="logo.svg" alt="Logo" />
            Venetus
          </div>
          <div className={styles.illustration}>
            <img className={styles.clouds} src="clouds.svg" alt="Clouds" />
            <img className={styles.trees} src="trees.svg" alt="Trees" />
            <img className={styles.person} src="person.svg" alt="Person" />
            <img className={styles.flower} src="flower.svg" alt="Flower" />
            <img className={styles.trash} src="trash.svg" alt="Trash" />
            <img className={styles.ground} src="ground.svg" alt="Ground" />
          </div>
          <div className={styles.title}>Update, Upgrade, Upcycle</div>
          <div className={styles.subtitle}>
            Scan your item's code and learn how to recycle effectively.
          </div>
          <div className={styles.button} onClick={() => setGetStarted(true)}>
            Get started
          </div>
        </div>
      )}
    </div>
  );
};

export default Splash;
