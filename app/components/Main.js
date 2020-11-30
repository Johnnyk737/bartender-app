import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Header from './Header'
import Footer from './Footer'
import DrinkCard from './DrinkCard'
import '../styles/main.less'

import json from '../../data.json'

/**
 * Home page
 * Show the most recently added drinks
 * Each page has header and footer
 * Home page has 'How to use'
 * Explain 'Find your Drink'
 * Explain what site offers
 * Link to Google Play/Apple App store for app
 */

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      drinkList: json
    }
  }

  generateDrinkList = () => {
    console.log(this.state.drinkList)

  }

  render() {

    const { drinkList } = this.state

    this.generateDrinkList();

    // let drinkListMap = null;

    let drinkListMap = drinkList.map(drink=>{
      return (
        <DrinkCard key={drink.id} drink={drink} />
      )
    })

    return (
      <>
        <Header />
        <section className="py-6 px-6">
          {/* TODO: we'll put a big picture of a bar in the background */}
          <Container>
            <Row>
              { drinkListMap || null}
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    )
  }
}

export default Main;