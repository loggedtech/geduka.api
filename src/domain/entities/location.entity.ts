import { Entity } from '../entity'

export interface LocationProps {
  zip: string
  place: string
  district: string
  city: string
  state: string
}

export class Location extends Entity<LocationProps> {
  private constructor(props: LocationProps, id?: string) {
    super(props, id)
  }

  public static instance(props: LocationProps, id?: string) {
    return new Location(props, id)
  }
}
