export interface UserModel {
	Address?: AddressModel
	Company?: CompanyModel
	Email: string
	Id: number
	Initials: string
	Name: string
	Phone: string
	UserName: string
	Website: string
}

export interface AddressModel {
	City: string
	Location?: LocationModel
	Street: string
	Suite: string
	ZipCode: string
}

export interface LocationModel {
	Latitude: string
  	Longitude: string
}

export interface CompanyModel {
	Bs: string
	CatchPhrase: string
	Name: string
}
