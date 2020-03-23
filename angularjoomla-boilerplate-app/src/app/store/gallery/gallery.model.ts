// "id": "94",
// "title": "My Art",
// "alias": "my-art",
// "catid": "12",
// "folder": "optikool\/optikool1392863227",
// "thumb": "optikool\/optikool1392863227\/AsianPictureSmallweb.jpg",
// "access": "1",
// "hits": "2689",
// "state": null,
// "author": "OptiK",
// "displayDate": "2014-02-20 02:27:07",
// "text": "These are some pictures I created in Photoshop over time. Some of them I have printed out and have hanging on my wall. Maybe one day I'll get back into it and create something again.",
// "itemId": "127",
// "catido": 124,
// "catidoa": "beautiful-art",
// "src": "http:\/\/localhost\/optikool-app\/\/components\/com_xgallery\/helpers\/img.php?tn=0&file=optikool\/optikool1392863227\/AsianPictureSmallweb.jpg",
// "imgThumb": "http:\/\/localhost\/optikool-app\/\/components\/com_xgallery\/helpers\/img.php?tn=1&file=optikool\/optikool1392863227\/AsianPictureSmallweb.jpg",
// "tags": []

export interface Collection {
    id: number;
    title: string;
    alias: string;
    catid: number;
    folder: string;
    thumb: string;
    access: number;
    hits: number;
    state: string;
    author: string;
    displayDate: Date;
    text: string;
    itemId: number;
    catido: number;
    catidoa: string;
    src: string;
    imgThumb: string;
    tags: Array<string>;
    isActive?: string;
}

// "id": "12",
// "parent_id": "1",
// "level": "1",
// "path": "beautiful-art",
// "extension": "com_xgallery",
// "title": "Beautiful Art",
// "alias": "beautiful-art",
// "description": "<p>Various art collections found over the years.<\/p>",
// "access": "1",
// "params": "{\"category_layout\":\"\",\"image\":\"images\\\/xg\\\/worldFace.JPG\"}",
// "metadesc": "",
// "metakey": "",
// "metadata": "{\"author\":\"\",\"robots\":\"\"}"


export interface CollectionCategory {
    id: number;
    parent_id: number;
    level: number;
    path: string;
    extension: string;
    title: string;
    alias: string;
    description: string;
    access: number;
    params: object; // convert to type
    metadesc: string;
    metakey: string;
    metadata: object; // convert to type
}

