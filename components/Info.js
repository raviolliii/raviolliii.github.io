import styles from '../styles/info.module.css'

export default function Info({ infoData }) {
    const { theme, title, subtitle, url } = infoData;

    return (
        <div className={styles.container}>
            <div className={styles.title + ' ' + styles[theme]}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
            <div className={styles.code}>
                <span className={styles['cmd-' + theme]}>curl</span>&nbsp;
                {url}
            </div>
        </div>
    );
}
