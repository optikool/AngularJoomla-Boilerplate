export const RestConfig = {
    path: '/index.php?',
    home: {
        query: {
            option: 'com_content',
            view: 'featured',
            Itemid: 101
        }
    },
    search: {
        query: {
            option: 'com_search',
            searchphrase: 'all',
            Itemid: 134
        }
    },
    contact: {
        query: {
            option: 'com_contact',
            task: 'contact.submit',
            id: 1
        },
        get: {
            option: 'com_contact',
            view: 'contact',
            id: 1,
            Itemid: 133
        }
    }
}

export const GalleryRestConfig =  {
    collection: {
        query: {
            option: 'com_xgallery',
            view: 'single'
        }
    },
    galleryCategory: {
        query: {
            option: 'com_xgallery',
            view: 'category'
        }
    },
    galleryMain: {
        query: {
            option: 'com_xgallery',
            view: 'main',
            Itemid: 122
        }
    },
    galleryRandom: {
        query: {
            option: 'com_xgallery',
            view: 'main',
            sort: 'random',
            limitstart: 0,
            Itemid: 122
        }
    },
    galleryPopular: {
        query: {
            option: 'com_xgallery',
            view: 'main',
            sort: 'popular',
            limitstart: 0,
            Itemid: 122
        }
    }
}

export const MovieRestConfig = {
    movie: {
        query: {
            option: 'com_xmovie',
            view: 'single'
        }
    },
    movieCategory: {
        query: {
            option: 'com_xmovie',
            view: 'category'
        }
    },
    movieMain: {
        query: {
            option: 'com_xmovie',
            view: 'main',
            Itemid: 133
        }
    },
    movieRandom: {
        query: {
            option: 'com_xmovie',
            view: 'main',
            sort: 'random',
            limitstart: 0,
            Itemid: 133
        }
    },
    moviePopular: {
        query: {
            option: 'com_xmovie',
            view: 'main',
            sort: 'popular',
            limitstart: 0,
            Itemid: 133
        }
    }
};

export const ArticleRestConfig = {
    article: {
        query: {
            option: 'com_content',
            view: 'article',
            catid: 16,
            Itemid: 381
        }
    },
    articleCategory: {
        query: {
            option: 'com_content',
            view: 'category',
            id: 16,
            Itemid: 381
        }
    }
};