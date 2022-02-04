import { Chapter } from "./chapter.model";

export interface Book {
    id: string;
    title: string;
    placeOfWriting: string;
    writingCompleted: string;
    coverPeriod: string;
    author:string;
    chapters: Chapter[];
    booksGroup:string;
}