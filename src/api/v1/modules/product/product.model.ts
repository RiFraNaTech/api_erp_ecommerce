import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "ecommerce.e_productos" })
export class Product {
  @PrimaryGeneratedColumn({ name: "id_producto" })
  id!: number;

  @Column({ name: "nombre_prod" })
  name!: string;

  @Column({ name: "precio_unit" })
  unitPrice!: number;

  @Column({ name: "cant_stock" })
  stock!: number;

  @Column({ name: "slug" })
  slug!: string;

  @Column({ name: "descripcion" })
  description!: string;

  @Column({ name: "porc_dscto" })
  discount!: number;

  @Column({ name: "unidades_caja" })
  unitsPerBox!: number;

  @Column({ name: "prom_calif_prod" })
  averageRating!: number;

  @Column({ name: "num_comentarios" })
  commentaryCount!: number;

  @Column({ name: "descontinuado" })
  discontinued!: boolean;
}
