import { Movies } from "./movie";

export interface MovieResponse {
   dates?:         Dates;      
   page:          number;
   results:       Movies;
   total_pages:   number;
   total_results: number;
}

export interface Dates {
   maximum: Date;
   minimum: Date;
}