import styles from '../../styles/educationitem.module.css';

import { CATEGORY, CATEGORY_THEMES } from '../models/Category';


export default function EducationItem({ item }) {
    const { degree, university, graduationDate } = item;

    const theme = CATEGORY_THEMES[CATEGORY.EDUCATION];
    const titleClassNames = styles.title + ' ' + styles[theme];

    return (
        <div className={styles.container}>
            <div className={titleClassNames}>{degree}</div>
            <div className={styles.description}>
                {university} &nbsp; / &nbsp; {graduationDate}
            </div>
        </div>
    );
}
