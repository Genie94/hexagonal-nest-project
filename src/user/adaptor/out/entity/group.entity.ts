import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Group')
export class Group {
  @PrimaryColumn()
  groupId: string;
  @Column()
  name: number;
}
