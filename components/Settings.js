import React from "react";
import styles from "./../styles/Settings.module.css";

const Settings = (props) => {
	return (
		<div className={styles.settings}>
			<div className={styles.nav}>
				<img src="arrow-back.svg" onClick={() => props.setSettings(false)}/>
				<span className={styles.header}>Settings</span>
			</div>
			<div className={styles.all}>
				<div className={styles.item} onClick={() => props.setOn(true)}><span>Home</span> <img src="enter.svg"/></div>
				<div className={styles.item} onClick={() => props.setReset(true)}><span>Update region</span> <img src="enter.svg"/></div>
				<div className= {styles.item} onClick={() => props.setCredit(true)}><span>About us</span> <img src="enter.svg"/></div>
				<a href="https://github.com/ndubiamos/venetus#credit" target="_blank" className={styles.item}><span>Credit</span> <img src="enter.svg"/></a>
				<div className={styles.space}></div>
				<a href="https://londonrecycles.co.uk" target="_blank" className={styles.item}><span>London Recycles</span> <img src="enter.svg"/></a>
				<a href="https://recyclenow.com" target="_blank" className={styles.item}><span>Recycle Now</span> <img src="enter.svg"/></a>
				<div className={styles.space}></div>
				<a href="mailto:hi@ventus.com" target="_blank" className={styles.item}><span>Contact us</span> <img src="enter.svg"/></a>
				<div className={styles.credit}>Made by <a href="https://www.linkedin.com/in/cavalohumaid" target="_blank">Cavalo</a> & <a href="https://twitter.com/venetus" target="_blank">Elsin J</a></div>
			</div>
		</div>
	)
}

export default Settings;
