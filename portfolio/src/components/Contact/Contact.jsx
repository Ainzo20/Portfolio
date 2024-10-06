import React from "react";

import styles from "./Contact.module.css";
import contacts from "../../data/contacts.json";
import { getImageUrl } from "../../utils";
export const Contact =()=>{
    return <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>{
            contacts.map((contact,id)=>{
                return (
                    <li className={styles.link}>
                        <img className={styles.images}src={getImageUrl(contact.imageSrc)} alt={contact.title} />
                        <a href={contact.link}>{`My ${contact.title}`}</a>
                    </li>
                )
            })
            }
        </ul>
    </footer>
}