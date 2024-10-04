export interface UserDto {
	id: number
	name: string
	username: string
	email: string
	address?: AddressDto
	phone: string
	website: string
	company?: CompanyDto
}

export interface AddressDto {
	street: string
	suite: string
	city: string
	zipcode: string
	geo?: LocationDto
}

export interface LocationDto {
	lat: string
  	lng: string
}

export interface CompanyDto {
	name: string
	catchPhrase: string
	bs: string
}
