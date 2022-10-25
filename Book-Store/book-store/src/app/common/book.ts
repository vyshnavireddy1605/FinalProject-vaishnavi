export class Book 
{
    constructor(public book_id:number,
        public book_name:string,
        public book_publisher:string,
        public book_description:string,
        public unit_price:number,
        public book_image: string,
        public active:number,
        public available_stock:number,
        public category_id:number
        )
        {

        }
}
