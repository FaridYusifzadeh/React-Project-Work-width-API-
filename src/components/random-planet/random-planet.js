import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Spinner from '../spinner';

export default class RandomPlanet extends Component {
  SwapiService = new SwapiService();
  constructor() {
    super();
    this.state = {
      planet: {},
      loading: true
    };
    this.updatePlanet();
  }

  omPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  updatePlanet() {
    const id = 12;
    this.SwapiService.getPlanet(id).then(this.omPlanetLoaded);
  }

  render() {
    const { planet, loading } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={planet} /> : null;

    // if (loading) {
    //   return <Spinner />;
    // }

    return (
      <div className='random-planet jumbotron rounded'>
        {spinner} {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
