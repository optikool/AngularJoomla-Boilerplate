// "id": "113",
// "title": "The call",
// "alias": "the-call",
// "catid": "16",
// "access": "1",
// "hits": "2464",
// "featured": "0",
// "state": "1",
// "author": "OptiK",
// "displayDate": "2012-10-10 10:19:40",
// "text": "<p>Got a call on my work phone from a recruiter that found me through LinkedIn today. I'm wondering how she found my work number because I don't even know the number.</p>\r\n"
class BateArticle {
    fullTest?: string;
}

export class Article extends BateArticle {
    id: number;
    title: string;
    alias: string;
    catid: number;
    access: number;
    hits: number;
    featured: number;
    state: number;
    author: string;
    displayDate: Date;
    text: string;
}