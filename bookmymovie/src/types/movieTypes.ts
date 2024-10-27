// src/types/movieTypes.ts
export interface Person {
    name: string;
    imageUrl: string;
    _id: string;
    role: string;
}

export interface Movie {
    _id: string;
    title: string;
    genre: string[];
    rating: number;
    description: string;
    duration: string;
    landscapeImgUrl: string;
    portraitImgUrl: string;
    cast: Person[];
    crew: Person[];
}

export interface Screen {
    _id: string;
    name: string;
    location: string;
}