import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer() {
    return (
        <div className={styles.container}>
            (check out my <Link href="https://github.com/raviolliii">github</Link> for more)
        </div>
    );
}
