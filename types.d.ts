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

interface AuthCredentials {
    fullName: string;
    email: string;
    password: string;
    age: number;
    universityCard: string;
}