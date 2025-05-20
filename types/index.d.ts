export interface Product {
    id: string;
    name: React.ReactNode;
    part: string;
    brand: string;
    price: number;
    vat?: number;
    availability: string;
    images: string[];
    features: string[];
    specifications: string[];
    category: string;
};



export interface RelatedProduct {
    id: string;
    name: React.ReactNode;
    price: number;
    vat?: number;
    image: string;
    brand?: string;
    description?: string;
};

export interface NewsletterSubscription { 
    email: string;
};