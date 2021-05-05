import React from 'react'

import { Header } from '../Header'
import { Footer } from '../Footer'

class FindDrink extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section className="py-6 px-6">
          Find your Drink
        </section>
        <Footer />
      </div>
    )
  }
}

export default FindDrink
