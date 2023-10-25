import Info from './Info';
import styles from '../../styles/infocontainer.module.css'

import { CATEGORY, CATEGORY_ENDPOINTS, CATEGORY_THEMES } from '../models/Category';

// TODO: build this dynamically
const INFO_CONFIG = [
    {
        "category": CATEGORY.CURRENTLY,
        "url": CATEGORY_ENDPOINTS[CATEGORY.CURRENTLY],
        "title": "currently",
        "subtitle": "literally as we speak",
        "theme": CATEGORY_THEMES[CATEGORY.CURRENTLY]
    },
    {
        "category": CATEGORY.WORK,
        "url": CATEGORY_ENDPOINTS[CATEGORY.WORK],
        "title": "work",
        "subtitle": "the occasional scary prod deployment",
        "theme": CATEGORY_THEMES[CATEGORY.WORK]
    },
    {
        "category": CATEGORY.PROJECTS,
        "url": CATEGORY_ENDPOINTS[CATEGORY.PROJECTS],
        "title": "projects",
        "subtitle": "we all have distractions, right?",
        "theme": CATEGORY_THEMES[CATEGORY.PROJECTS]
    },
    {
        "category": CATEGORY.EDUCATION,
        "url": CATEGORY_ENDPOINTS[CATEGORY.EDUCATION],
        "title": "education",
        "subtitle": "i definitely read the textbook, for sure",
        "theme": CATEGORY_THEMES[CATEGORY.EDUCATION]
    },
    {
        "category": CATEGORY.INTERESTS,
        "url": CATEGORY_ENDPOINTS[CATEGORY.INTERESTS],
        "title": "interests",
        "subtitle": "in case you're interested",
        "theme": CATEGORY_THEMES[CATEGORY.INTERESTS]
    }
];

export default function InfoContainer() {
    return (
        <div className={styles.container}>
            {INFO_CONFIG.map((infoData, i) => (
                <Info key={i} infoData={infoData} />
            ))}
        </div>
    );
}
