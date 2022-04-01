import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Header } from "./Header";

export function BeerDetails() {
  const [beer, setBeer] = useState([]);
  const { beerId } = useParams();

  useEffect(() => {
    const acquireBeer = async () => {
      const beerFromAPI = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeer(beerFromAPI.data);
    };
    acquireBeer();
  }, [beerId]);

  return (
    <div>
      <Header />
      <div key={beer._id} className="card mb-3">
        <img src={beer.image_url} className="beer-img" alt={beer.name} />
        <div className="card-body">
          <h1 className="card-title">{beer.name}</h1>
          <h3 className="card-text text-muted">{beer.tagline}</h3>
          <p className="card-text">
            <small>Attenuation level: {beer.attenuation_level}</small>
          </p>
          <p className="card-text">
            <small>First brewed: {beer.first_brewed}</small>
          </p>
          <p className="card-text">{beer.description}</p>
          <p className="card-text text-muted">{beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}
