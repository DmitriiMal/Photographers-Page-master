export interface ialbum {
        name: string;
        image: string;
        description: string;
        pictures: pictures[];
    }

export interface pictures {
    name: string;
    picture: string;
    date: string;
}