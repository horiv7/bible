import { Poet } from "./poet.model";

export interface Chapter {
    id: string;
    title: string;
    poets: Poet[]
}