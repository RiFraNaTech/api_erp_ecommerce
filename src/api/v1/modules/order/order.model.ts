import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ecommerce.e_pedido' })
export class Order {
  @PrimaryGeneratedColumn({ name: 'id_pedido' })
  id!: number;

  @Column({ name: 'id_usuario' })
  user_id!: number;

  @Column({ name: 'fecha_pedido' })
  order_date!: string;

  @Column({ name: 'fecha_pago' })
  delivered_date!: string;

  @Column({ name: 'fecha_envio' })
  shipping_date!: string;

  @Column({ name: 'id_dir_fact' })
  address_billing_id!: number;

  @Column({ name: 'id_dir_envio' })
  address_shipping_id!: number;

  @Column({ name: 'precio_envio' })
  shipping_price!: number;

  @Column({ name: 'precio_iva' })
  tax_price!: number;

  @Column({ name: 'precio_total' })
  total_price!: number;

  @Column({ name: 'enviado' })
  is_delivered!: boolean;

  @Column({ name: 'pagado' })
  id_paid!: boolean;

  @Column({ name: 'pedido_anulado' })
  is_active!: boolean;

  @Column({ name: 'fecha_anulado' })
  desactivated_date!: string;
}

export interface IOrderSearch {
  productName: string;
  productId: number;
}
