interface Content {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: number;
    views: number; 
    description: string;
    cover: string;
    isSubscribed?: boolean;
}