import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./Header";

export function Beers() {
  const [listOfbeers, setListOfBeers] = useState([]);

  useEffect(() => {
    const acquireBeers = async () => {
      const beersFromAPI = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setListOfBeers(beersFromAPI.data);
    };
    acquireBeers();
  }, []);

  return (
    <div>
      <Header />
      {listOfbeers.map((beer) => {
        return (
          <div key={beer._id} className="card mb-3 beer-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={beer.image_url}
                  className="img-fluid rounded-start beer-img"
                  alt={beer.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title">
                    <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                  </h1>
                  <h3 className="card-text text-muted">{beer.tagline}</h3>
                  <p className="card-text">
                    <b>Created By: </b> {beer.contributed_by}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
