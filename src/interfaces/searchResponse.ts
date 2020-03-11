import { Movie } from './movie';
import { Actor } from './actor';
import { Tv } from './tv';

export interface SearchResponse {
    results: Movie[] | Actor[] | Tv[];
}