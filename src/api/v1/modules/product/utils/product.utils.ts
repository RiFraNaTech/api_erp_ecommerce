export interface IProduct {
  _id: number;
  username: string;
  isAdmin: boolean;
  product_id: number;
  product_name: string;
  provider_id: number;
  category_id: number;
  unit_price: number;
  count_in_stock: number;
  brand_id: number;
  product_slug: string;
  product_description: string;
  perc_discount: number;
  units_per_box: number;
  measuring_unit_id: number;
  average_rating: number;
  commentary_count: number;
  discontinued: boolean;
}
