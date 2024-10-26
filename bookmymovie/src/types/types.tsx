export interface MovieCardType {
    title: string;
    portraitImgUrl: string;

    _id: string;
    rating: number;
    type: string;

    // cast: CelebrityCardType[];
    // crew: CelebrityCardType[];

}
export interface CelebrityCardType{
    name: string;
    imageUrl: string;
    _id: string;
    role: string;
}