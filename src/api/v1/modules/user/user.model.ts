import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ecommerce.e_usuario' })
export class User {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id!: number;

  @Column({ name: 'nombre_usuario' })
  username!: string;

  @Column({ name: 'password' })
  password!: string;

  @Column({ name: 'es_admin' })
  isAdmin!: boolean;
}

export interface IUserLogin {
  username: string;
  password: string;
}
