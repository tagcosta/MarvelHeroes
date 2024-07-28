export interface Comic {
    id: number;
    title: string;
    dates: {
        type: string;
        date: string;
    }[];
    thumbnail: {
        path: string;
        extension: string;
    };
}