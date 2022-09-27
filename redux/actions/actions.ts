import { TypeActionBeers, TypeActionUser, TypesBeers, User } from '../../types/globals'

export const CreateActionSetBeer = function (beers: Array<TypesBeers>): TypeActionBeers {
  return {
    type: 'ACTION_SET_BUY_BEER',
    payload: beers,
  }
}

export const CreateActionSetUser = function (user: User): TypeActionUser {
  return {
    type: 'ACTION_SET_USER',
    payload: user,
  }
}
