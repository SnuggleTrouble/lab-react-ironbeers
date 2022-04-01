import React from "react";
import { Link } from "react-router-dom";
import allBeers from "./../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

export function Home() {
  return (
    <div className="homepage">
      <div className="card mb-3">
        <img
          className="card-img-top"
          src={allBeers}
          alt="all beers available"
        />
        <div className="card-body">
          <Link to="/beers">
            <h2 className="card-title">All Beers</h2>
          </Link>
          <p className="card-text">
            Gondor armor maybe seriously wheels enter birthday undone.
            Conscience why Fells corrupted finished regained. Thanks grasp
            fellowship enslaved many meant visit deposit ruins Bain trick. Pain
            special Boffins sell carven necessary balls. Archers ruling rowan
            mine's 100 depart evisceration ease Khazad-dum!
          </p>
        </div>
      </div>
      <div className="card mb-3">
        <img
          className="card-img-top"
          src={randomBeer}
          alt="pick a random beer"
        />
        <div className="card-body">
          <Link to="/random-beer">
            <h2 className="card-title">Random Beer</h2>
          </Link>
          <p className="card-text">
            Reward Sam serpent keep lovely bay reads? Time bandy Galeton sticky
            menu their distance presumed cage. Yards city oversized raining
            Probably. Looked merrier high cat eavesdropping juice keepsakes
            Entwives spies resting corks? Five-stringed language curse Greyhame
            always strongest deposit disturber distance children's. There is
            only one Lord of the Ring.
          </p>
        </div>
      </div>
      <div className="card mb-3">
        <img className="card-img-top" src={newBeer} alt="add a new beer" />
        <div className="card-body">
          <Link to="/new-beer">
            <h2 className="card-title">New Beer</h2>
          </Link>
          <p className="card-text">
            Begun climbing only fancy resisted Bard? Forks arrest along axes
            engage driven Gimli wane. Roam closest streaming seemed Captain?
            Calls Dúnedain strawberries seek tools finer. Cirith beheading felt.
            Dawn trousers abroad tart dominate second Gibbets. Sam... I'm glad
            you are with me.
          </p>
        </div>
      </div>
    </div>
  );
}
