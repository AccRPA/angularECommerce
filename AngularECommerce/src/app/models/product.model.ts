import { ProductDimensionsModel } from "./product-dimensions.model";
import { ProductMetaModel } from "./product-meta.model";
import { ProductReviewModel } from "./product-review.model";

export interface ProductModel {  
    idInBasket: number;
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: ProductDimensionsModel;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: ProductReviewModel[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: ProductMetaModel;
    images: string[];
    thumbnail: string;
    
}