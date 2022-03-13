export default interface IProfile {
	id: string,
	name: string,
	properties: IProperty[]
}

export interface IProperty {
	name: string,
	value: string
}