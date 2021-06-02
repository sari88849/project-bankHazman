import { LatLng, LatLngLiteral } from 'ngx-google-places-autocomplete/objects/latLng';
import { pathToFileURL } from 'url';
import { Recommendation } from './recommendation';

export class Useres {
    constructor
        (
            public CodeUser?: number,
            public FName?: string,
            public LName?: string,
            public Password?: string,
            public DateOfBirth?: string,
            public Mail?: string,
            public Phone?: string,
            public CodeSector?: number,
            public Min?: number,
            public MinToLearn?: number,
            public AgeMin?: number,
            public AgeMax?: number,
            public AddressX?: number,
            public AddressY?: number,

            public listRecommendation: Array<Recommendation> = new Array<Recommendation>()

        ) { }

}

export class Useres1 {
    constructor
        (
            public CodeUser?: number,
            public FName?: string,
            public LName?: string,
            public Password?: string,
            public DateOfBirth?: string,
            public Mail?: string,
            public Phone?: string,
            public CodeSector?: number,
            public Min?: number,
            public MinToLearn?: number,
            public AgeMin?: number,
            public AgeMax?: number,
            public AddressX?: number,
            public AddressY?: number,
            public dist?: number,
            public listRecommendation: Array<Recommendation> = new Array<Recommendation>(),
            public path?: Array<Array<LatLng | LatLngLiteral>>
        ) { }

}
