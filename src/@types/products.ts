export interface IProduct {
    id?: string | number,
    name: string,
    price: number ,
    description: string,
    created_at: Date | null | undefined;
    
}