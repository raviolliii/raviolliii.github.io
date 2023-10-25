import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Spoiler from './Spoiler';
import styles from '../../styles/info.module.css'

export default function Info({ infoData }) {
    const { theme, title, subtitle, url } = infoData;
    // NOTE: this should be dynamic and point to the text in the code div
    const copyText = "curl " + url;

    const [isSpoilerVisible, setIsSpoilerVisible] = useState(false);

    function toggleIsVisible() {
        setIsSpoilerVisible(!isSpoilerVisible);
    }

    return (
        <div className={styles.container}>
            <div className={styles.title + ' ' + styles[theme]}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
            <div className={styles.code}>
                <span className={styles['cmd-' + theme]}>curl</span>&nbsp;
                {url}
                <CopyButton text={copyText} />
            </div>
            <div className={styles.footer} onClick={toggleIsVisible}>
                spoiler&nbsp;
            </div>
            {isSpoilerVisible ? <Spoiler infoData={infoData} /> : null}
        </div>
    );
}

function CopyButton({ text }) {
    const COPY_TIMEOUT = 1000;

    const [isCopied, setIsCopied] = useState(false);

    // copy text and throttle copy action
    function copyCmd() {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), COPY_TIMEOUT);
    }

    // temporarily disable hover style effects when copied
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
