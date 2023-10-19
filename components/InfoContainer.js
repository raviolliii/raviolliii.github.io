import Info from './Info';
import styles from '../styles/infocontainer.module.css'

// TODO: move this to a remote config?
const INFO_CONFIG = [
    {
        "title": "currently",
        "theme": "gold",
        "subtitle": "literally as we speak",
        "url": "https://ravi-dev-3rp5yv6msa-uc.a.run.app/currently"
    },
    {
        "title": "work",
        "theme": "blue",
        "subtitle": "the occasional scary prod deployment",
        "url": "https://ravi-dev-3rp5yv6msa-uc.a.run.app/work"
    },
    {
        "title": "projects",
        "theme": "green",
        "subtitle": "we all have distractions, right?",
        "url": "https://ravi-dev-3rp5yv6msa-uc.a.run.app/projects"
    },
    {
        "title": "education",
        "theme": "red",
        "subtitle": "i definitely read the textbook, for sure",
        "url": "https://ravi-dev-3rp5yv6msa-uc.a.run.app/education"
    },
    {
        "title": "interests",
        "theme": "white",
        "subtitle": "in case you're interested",
        "url": "https://ravi-dev-3rp5yv6msa-uc.a.run.app/interests"
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
