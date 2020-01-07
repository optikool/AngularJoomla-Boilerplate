// "id": "206",
// "title": "Kayumi - Arenas Eps 04",
// "alias": "kayumi-arenas-eps-04",
// "catid": "37",
// "thumb": "Kayumi_34_Arenas_Eps_04.jpg",
// "link": "http://media.eyenetdesigns.com/media/streams/Kayumi_34_Arenas_Eps_04/Kayumi_34_Arenas_Eps_04.m3u8",
// "time": "17:09",
// "access": "1",
// "hits": "357",
// "state": "0",
// "submitter": "OptiK",
// "displayDate": "2019-02-02 01:08:35",
// "intro": "<p>In this Episode, my daughter and I spent a couple days getting 1000 conquest points for gear. Clips are 1v1 Arenas at semi decent gear level. Video was captured in 4k and songs are taken from Beatport and include the following...</p>\r\n",
// "catalias": "world-of-warcraft",
// "cattitle": "World of Warcraft",
// "itemId": "177",
// "catido": 177,
// "catidoa": "world-of-warcraft",
// "imgThumb": "http://localhost/optikool-app/images/xm/thumbs/Kayumi_34_Arenas_Eps_04.jpg",
// "tags": []

export class Movie {
    id: number;
    title: string;
    alias: string;
    catid: number;
    thumb: string;
    link: string;
    time: Date;
    access: number;
    hits: number;
    state: number;
    submitter: string;
    displayDate: Date;
    intro: string;
    catalias: string;
    cattitle: string;
    itemId: number;
    catido: number;
    catidoa: string;
    imgThumb: string;
    tags: Array<any>;
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

export class MovieCategory {
    id: number;
    parent_id: number;
    level: number;
    path: string;
    extension: string;
    title: string;
    alias: string;
    description: string;
    access: number;
    params: Object;
    metadesc: Object;
    metakey: Object;
    metadata: Object;
}