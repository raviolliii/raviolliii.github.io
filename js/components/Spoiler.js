import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/spoiler.module.css';

import fetchData from '../gateways/InfoDataProviderGateway';
import getRawContentViewTransformer from '../transformers/RawContentViewTransformerFactory';
import getStyledContentViewTransformer from '../transformers/StyledContentViewTransformerFactory';


export default function Spoiler({ infoData }) {
    const { category, url } = infoData;

    // TODO: set this state once to avoid multiple API calls
    const [responseTime, setResponseTime] = useState(null);
    const [rawViewContent, setRawViewContent] = useState(null);
    const [styledViewContent, setStyledViewContent] = useState(null);

    async function fetchAndUpdatePreviews() {
        const start = Date.now();
        const rawResponseStr = await fetchData(url);
        const end = Date.now();

        // set latency of call
        setResponseTime(end - start);

        // transform response to raw view
        const rawViewTransformer = getRawContentViewTransformer(category);
        setRawViewContent(rawViewTransformer(rawResponseStr));

        // transform response to styled view
        const styledViewTransformer = getStyledContentViewTransformer(category);
        setStyledViewContent(styledViewTransformer(rawResponseStr));
    }

    useEffect(() => {
        // NOTE: only for debugging the loading screen
        // setTimeout(fetchAndUpdatePreviews, 3000);
        fetchAndUpdatePreviews();
    }, []);

    return (
        <div className={styles.container}>
            {!!rawViewContent ? (
                <SplitView
                    responseTime={responseTime}
                    rawViewContent={rawViewContent}
                    styledViewContent={styledViewContent}
                />
            ) : <Loading />}
        </div>
    );
}

function SplitView({ responseTime, rawViewContent, styledViewContent }) {
    return (
        <>
            <div className={styles.subcontainer}>
                <div className={styles.rawViewContainerTitle}>
                    Raw Response Fetched ({responseTime}ms)
                </div>
                <div className={styles.rawViewContainer}>
                    {rawViewContent}
                </div>
            </div>
            <div className={styles.divider}>
                <FontAwesomeIcon icon={faArrowRight} size='xl' />
            </div>
            <div className={styles.subcontainer}>
                <div className={styles.styledViewContainerTitle}>&nbsp;</div>
                <div className={styles.styledViewContainer}>
                    {styledViewContent}
                </div>
            </div>
        </>
    );
}

function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <FontAwesomeIcon icon={faEllipsis} size='xl' fade />
        </div>
    );
}
