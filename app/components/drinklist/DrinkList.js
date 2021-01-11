import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

import Header from '../Header'
import Footer from '../Footer'
import { DrinkCard } from '../DrinkCard'
import FilterSideBar from '../filter/FilterSideBar'
import '../../styles/main.less'

import json from '../../../data.json'

class DrinkList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      drinks: json,
      filter: ''
    }
  }

  filterDrinks = (filter) => {

    let { drinks } = this.state

    let drinkListMap = drinks.filter(drink=>filter ? drink.drinkName.toLowerCase().includes(filter) : true).map(drink=>{
      return (
        <DrinkCard key={drink.id} drink={drink} />
      )
    })

    return drinkListMap
  }

  handleChange = (e) => {
    this.setState({
      filter: e.target.value
    })
  }


  render() {

    let { filter } = this.state

    let drinkList = this.filterDrinks(filter)

    return (
      <div>
        <Header />
        <FilterSideBar />
        <section className="py-6 px-6">
          {/* <div className="search-bar">
            <input type="textarea" 
              className="search-textarea" 
              onChange={event=>this.handleChange(event)}
              placeholder="Filter Drinks" />
          </div> */}
          <div className="drink-list">
            <Container>
              <Row>
                { drinkList }
              </Row>
            </Container>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default DrinkList;
