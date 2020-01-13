import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends Component {
  SwapiService = new SwapiService();
  constructor() {
    super();
    this.state = {
      planet: {}
    };
    this.updatePlanet();
  }

omPlanetLoaded = (planet) => {
this.setState({planet})
}
 

  updatePlanet() {
    const id = 12;
    this.SwapiService.getPlanet(id).then(this.omPlanetLoaded);
    };
  
  render() {
    const {planet: { id, name, population, rotationPeriod, diameter} } = this.state;

    return (
      <div className='random-planet jumbotron rounded'>
        <img
          className='planet-image'
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt='planet'
        />
        <div>
          <h4>{name}</h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='term'>Population</span>
              <span>{population}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
