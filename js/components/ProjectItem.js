import Link from 'next/link';
import styles from '../../styles/projectitem.module.css';

import { CATEGORY, CATEGORY_THEMES } from '../models/Category';


export default function ProjectItem({ item }) {
    const { name, link, description } = item;

    const theme = CATEGORY_THEMES[CATEGORY.PROJECTS];
    const titleClassNames = styles.title + ' ' + styles[theme];

    return (
        <div className={styles.container}>
            <div className={titleClassNames}>{name}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.footer}>
                <Link href={link}>check it out</Link>
            </div>
        </div>
    );
}
