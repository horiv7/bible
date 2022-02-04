import { Book } from "./book.model";

export interface BooksGroup {
    id: string;
    title: string;
    description: string;
    img: string;
    biblePart: string;
    ordinal: number;
    booksIds: { bookId: string }[]
}