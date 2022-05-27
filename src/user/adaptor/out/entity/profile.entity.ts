import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Profile')
export class Profile {
  @PrimaryColumn()
  profileId: string;
  @Column()
  name: number;
}
