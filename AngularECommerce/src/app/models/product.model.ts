import { ProductDimensionsModel } from "./product-dimensions.model";
import { ProductMetaModel } from "./product-meta.model";

export interface ProductModel {    
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
    reviews: string[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: ProductMetaModel;
    images: string[];
    thumbnail: string;
    
}