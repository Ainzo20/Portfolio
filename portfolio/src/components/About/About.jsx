import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = ()=>{
    return <section className={styles.container}>
        <h2 className={styles.title} id='about'>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} 
            alt="half picture of me" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt=" UI icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>
                            Fontend Developer
                        </h3>
                        <p>with experience in building Eye catching user friendly and optimized UI for Mobile and Web applications.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt=" UI icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>
                            Graphic Designer
                        </h3>
                        <p>Familiar with design principles and have designed several flyers for customers.</p>
                    </div>
                </li>
            </ul>
        </div>

    </section>;
};