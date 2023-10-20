import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/info.module.css'

export default function Info({ infoData }) {
    const { theme, title, subtitle, url } = infoData;
    const copyText = "curl " + url;

    return (
        <div className={styles.container}>
            <div className={styles.title + ' ' + styles[theme]}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
            <div className={styles.code}>
                <span className={styles['cmd-' + theme]}>curl</span>&nbsp;
                {url}
                <CopyButton text={copyText} />
            </div>
        </div>
    );
}

function CopyButton({ text }) {
    const [isCopied, setIsCopied] = useState(false);

    function copyCmd() {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
    }

    let containerClassNames = styles.copyBtn;
    if (!isCopied) {
        containerClassNames += " " + styles.hoverable;
    }
    return (
        <div className={containerClassNames} onClick={!isCopied ? copyCmd : null}>
            <FontAwesomeIcon icon={isCopied ? faCheck : faCopy} size='lg' />
        </div>
   );
}
