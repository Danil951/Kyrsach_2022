export interface TypesBeers {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  volume: object
  boil_volume: object
  method: object
  ingredients: object
  food_pairing: Array<string>
  brewers_tips: string
  contributed_by: string
}

export interface TypeActionBeers {
  type: string
  payload: Array<TypesBeers>
}

export interface TypeActionUser {
  type: string
  payload: User | undefined
}

export interface TypeState {
  beers: Array<TypesBeers>
  beersAll: Array<TypesBeers>
}

export type PropsModal = {
  open: boolean
  setOpen: (open: boolean) => void
  item: any
}

export type User = {
  email: string
  firstName: string
  lastName: string
  password: string
}
