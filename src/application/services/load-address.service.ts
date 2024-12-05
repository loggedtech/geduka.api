import { Address, Location } from '~/domain/entities'
import type { AddressGateway, LocationGateway } from '../gateways'
import type { AddressInput, AddressOutput, AddressUsecase } from '../usecases'

export class LoadAddressService implements AddressUsecase {
  constructor(
    private readonly location: LocationGateway,
    private readonly address: AddressGateway
  ) {}

  async execute(data: AddressInput): Promise<AddressOutput> {
    const { zip, place, number, complement, district, city, state } = data

    let location = await this.location.findByZip(zip)

    if (location === null) {
      location = Location.instance({ zip, place, district, city, state })
      await this.location.create(location)
    }

    let address = await this.address.findByProps({
      locationId: location.id,
      number,
      complement,
    })

    if (address === null) {
      address = Address.instance({
        locationId: location.id,
        number,
        complement,
      })
      await this.address.create(address)
    }

    return { id: address.id }
  }
}
