import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Header } from "./Header";

export function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState([]);
    const { beerId } = useParams();
  
    useEffect(() => {
      const acquireBeer = async () => {
        const beerFromAPI = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );
        setRandomBeer(beerFromAPI.data);
      };
      acquireBeer();
    }, [beerId]);
  
    return (
      <div>
        <Header />
        <div key={randomBeer._id} className="card mb-3">
          <img src={randomBeer.image_url} className="card-img-top beer-img" alt={randomBeer.name} />
          <div className="card-body">
            <h1 className="card-title">{randomBeer.name}</h1>
            <h3 className="card-text text-muted">{randomBeer.tagline}</h3>
            <p className="card-text">
              <small>Attenuation level: {randomBeer.attenuation_level}</small>
            </p>
            <p className="card-text">
              <small>First brewed: {randomBeer.first_brewed}</small>
            </p>
            <p className="card-text">{randomBeer.description}</p>
            <p className="card-text text-muted">{randomBeer.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
  