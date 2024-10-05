import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero =() =>{
    return <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Karl</h1>
        <p className={styles.description}>I'm front-end junior developer with 1 year of experience using Flutter, Dart, HTML, CSS, JavaScript and ReactJs. Get in touch with me if you wish to learn more!</p>
        <a href="mailto:karlvait21@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/man.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
}