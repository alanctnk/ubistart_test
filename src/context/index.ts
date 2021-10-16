import React from "react"
import formReducer from "./reducers/formReducer"

const initialForm: any = {

  categories: [],
  match: null

}

const initialDrinks: any = {
  drinks: []
}

const initialDrink: any = {
  drink: {},
  isFavorite: false
}

const Context: any = React.createContext(null)
export {
  Context,
  initialForm,
  initialDrinks,
  initialDrink,
  formReducer
}