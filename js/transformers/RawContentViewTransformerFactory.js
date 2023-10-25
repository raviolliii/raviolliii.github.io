import { CATEGORY } from '../models/Category';
import { transformToJson, transformToString } from './RawContentViewTransformers';

/**
 * Returns a content view transformer to be used for the raw info 
 * related to the given Category.
 */
export default function getRawContentViewTransformer(category) {
    let transformer = null;

    // "currently" category has data transformed into a raw string, all
    // other categories have a JSON raw view
    if (category == CATEGORY.CURRENTLY) {
        transformer = transformToString;
    } else {
        transformer = transformToJson;
    }

    console.log('[RawContentViewTransformerFactory] Chosen transformer: ' + transformer.name);
    return transformer;
}
