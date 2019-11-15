import { Photo } from './photo';

// same format as in our API

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    // optional
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
