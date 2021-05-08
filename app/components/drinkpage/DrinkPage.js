import React, { useState } from 'react'

import { Header } from '../Header'
import { Footer } from '../Footer'

export const DrinkPage = ({location}) => {

  let [currDrink, setDrink] = useState(location.state.drink);

  const getIngredients = (drink) => {
    return drink.ingredientList.map((ingredient, i)=>{
      return (
        <li key={i} className="col-sm-6">
          {ingredient}
        </li>
      )
    })
  }

  const getDirections = (drink) => {
    return drink.directions.map((direction, i)=>{
      return (
        <li key={i}>
          {direction}
        </li>
      )
    })
  }

  return (
    <>
      <Header />
      <section className="py-6 mx-6">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <h3>
              {currDrink.drinkName}
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-2">
              <div className="mx-auto">
                <img src={currDrink.imageUrl} height="300px" width="300px" />
              </div>
            </div>
            <div className="col-lg-7 text-color">
              <div>
                <h5 className="font-weight-bold">
                  Ingredients
                </h5>
                <ul className="row d-flex list-unstyled">
                  { getIngredients(currDrink) || null }
                </ul>
              </div>
              <div>
                <h5 className="font-weight-bold">
                  Directions
                </h5>
                <ol>
                  { getDirections(currDrink) || null}
                </ol>
              </div>

            </div>
          </div>
        </div>
        
      </section>
      <Footer />
    </>
  )
}
