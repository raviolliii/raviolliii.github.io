import styles from '../../styles/workitem.module.css';

import { CATEGORY, CATEGORY_THEMES } from '../models/Category';


export default function WorkItem({ item }) {
    const { company, position, description, startDate, endDate } = item;

    const endDateStr = endDate ?? 'Present'
    let durationStr = startDate + ' - ' + endDateStr;

    const theme = CATEGORY_THEMES[CATEGORY.WORK];
    const titleClassNames = styles.title + ' ' + styles[theme];

    return (
        <div className={styles.container}>
            <div className={titleClassNames}>{company}</div>
            <div className={styles.subtitle}>{position} &nbsp; / &nbsp; {durationStr}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
}
