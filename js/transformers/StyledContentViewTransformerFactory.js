import {
    transformCurrentlyToStyledContent,
    transformWorkToStyledContent,
    transformProjectsToStyledContent,
    transformEducationToStyledContent,
    transformInterestsToStyledContent
} from './StyledContentViewTransformers';
import { CATEGORY } from '../models/Category';


const CATEGORY_TO_TRANSFORMER_MAPPING = {
    [CATEGORY.CURRENTLY]: transformCurrentlyToStyledContent,
    [CATEGORY.WORK]: transformWorkToStyledContent,
    [CATEGORY.PROJECTS]: transformProjectsToStyledContent,
    [CATEGORY.EDUCATION]: transformEducationToStyledContent,
    [CATEGORY.INTERESTS]: transformInterestsToStyledContent
}

/**
 * Returns a styled content view transformer to be used for the given Category.
 */
export default function getStyledContentViewTransformer(category) {
    const transformer = CATEGORY_TO_TRANSFORMER_MAPPING[category];
    console.log('[StyledContentViewTransformerFactory] Chosen transformer: ' + transformer.name);
    return transformer;
}
