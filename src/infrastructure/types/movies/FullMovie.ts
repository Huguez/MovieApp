
export interface FullMovie {
   id:                    number;
   title:                 string;
   backdrop:              string;
   description:           string;
   poster:                string;
   rating:                number;
   release_date:          Date;
   vote_average:          number;
   vote_count:            number;
   budget?:               number;
   production_companies?: ProductionCompany[]
   tagline?:              string;
}

export interface ProductionCompany {
   id:             number;
   logo_path:      null | string;
   name:           string;
   origin_country: string;
}
