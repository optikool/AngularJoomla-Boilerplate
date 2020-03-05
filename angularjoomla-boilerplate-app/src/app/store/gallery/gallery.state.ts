import { Collection, CollectionCategory } from './gallery.model';

export default class GalleryState {
    Collection: Collection;
    Collections: Array<Collection>;
    LatestCollectionLimit: number;
    LatestCollections: Array<Collection>;
    RandomCollections: Array<Collection>;
    CollectionCategory: CollectionCategory;
    CollectionError: Error
}

export const initialState = (): GalleryState => {
    return {
        Collection: {
            id: null,
            title: '',
            alias: '',
            catid: null,
            folder: '',
            thumb: '',
            access: null,
            hits: null,
            state: null,
            author: '',
            displayDate: null,
            text: '',
            itemId: null,
            catido: null,
            catidoa: '',
            src: '',
            imgThumb: '',
            tags: []
        },
        Collections: Array<Collection>(),
        LatestCollectionLimit: 10,
        LatestCollections: Array<Collection>(),
        RandomCollections: Array<Collection>(),
        CollectionCategory: {
            id: null,
            parent_id: null,
            level: null,
            path: '',
            extension: '',
            title: '',
            alias: '',
            description: '',
            access: null,
            params: null,
            metadesc: '',
            metakey: '',
            metadata: null
        },
        CollectionError: null
    };
};