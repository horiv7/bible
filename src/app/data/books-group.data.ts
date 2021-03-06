import { BooksGroup } from './../models/books-group.model'

let booksGroupData: BooksGroup[] = [
    {
        "title": "Zakoni",
        "description": "Mojsijeve knjige",
        "img": "./../../../assets/images/zakoni.jpg",
        "biblePart": "Stari zavet",
        "ordinal": 1,
        "booksIds": [{ "bookId": "1" }, { "bookId": "2" }]
        , "id": "1"
    }, {
        "title": "Proroci",
        "description": "Proročke knjige",
        "img": "./../../../assets/images/proroci.jpg",
        "biblePart": "Stari zavet",
        "ordinal": 2,
        "booksIds": [{ "bookId": "1" }, { "bookId": "2" }]
        , "id": "2"
    }, {
        "title": "Spisi",
        "description": "Spisi, dnevnici, psalmi",
        "img": "./../../../assets/images/spisi.jpg",
        "biblePart": "Stari zavet",
        "ordinal": 3,
        "booksIds": [{ "bookId": "1" }, { "bookId": "2" }]
        , "id": "3"
    }, {
        "title": "Jevanđelja",
        "description": "Četiri apostolska Jevanđelja",
        "img": "./../../../assets/images/jevandjelja.jpg",
        "biblePart": "Novi zavet",
        "ordinal": 1,
        "booksIds": [{ "bookId": "1" }, { "bookId": "2" }]
        , "id": "4"
    }, {
        "title": "Poslanice",
        "description": "Apostolske poslanice",
        "img": "./../../../assets/images/poslanice.jpg",
        "biblePart": "Novi zavet",
        "ordinal": 2,
        "booksIds": [{ "bookId": "1" }, { "bookId": "2" }]
        , "id": "5"
    }, {
        "title": "Otkrovenje",
        "description": "Jovanovo otkrovenje ili Apokalipsa",
        "img": "./../../../assets/images/otkrovenje.jpg",
        "biblePart": "Novi zavet",
        "ordinal": 3,
        "booksIds": [{ "bookId": "1" }, { "bookId": "2" }]
        , "id": "6"
    }
]


export function getBooksGroup(): BooksGroup[] {
    return booksGroupData;
}
