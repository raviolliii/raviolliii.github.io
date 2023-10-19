import styles from '../styles/header.module.css';

export default function Header() {
    return (
        <div className={styles.container}>
            hello hello! 👋🏽
            <br />
            <p className={styles.subtitle}>
                i'm Ravi, a software engineer. i just like getting coffee and building things -
                hit some of the endpoints below to find out more about me (i promise they're safe haha)
            </p>
        </div>
    );
}
