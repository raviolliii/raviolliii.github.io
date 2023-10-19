import Link from 'next/link';
import styles from '../styles/notfound.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span className={styles.errorTag}>404</span> not found
            </div>
            <div className={styles.subtitle}>let's be honest here. did you make a typo?</div>
            <div className={styles.footer}>
                go <Link href="/">home</Link>
            </div>
        </div>
    );
}
