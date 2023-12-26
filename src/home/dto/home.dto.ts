import { PropertyType } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class HomeResponseDto {
  id: number;

  @Exclude()
  realtor_id: number;

  address: string;
  number_of_bedrooms: number;
  number_of_bathrooms: number;
  city: string;
  listed_date: Date;
  price: number;
  land_size: number;
  property_type: PropertyType;

  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;

  constructor(partial: Partial<HomeResponseDto>) {
    Object.assign(this, partial);
  }
}
