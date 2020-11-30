import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

export default class DrinkCard extends React.Component {
  render() {
    const { drink } = this.props;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <Link to={{
          pathname: `/drink/${drink.id}`,
          state: {
            drink: drink
          }}}>
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={drink.imageUrl} />
            <Card.Body>
              <Card.Title className="drink-name">
                {drink.drinkName}
              </Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </div>
    )
  }
}