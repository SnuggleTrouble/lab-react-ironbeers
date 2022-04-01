import React from "react";
import axios from "axios";
import { Header } from "./Header";
import { useState } from "react";

export function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);
    setName("");
    setTagline("");
    setDescription("");
    setFirst_brewed("");
    setBrewers_tips("");
    setAttenuation_level(0);
    setContributed_by("");
  };

  return (
    <div>
      <Header />
      <div>
        <form className="new-beer-form" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              autocomplete="off"
              onChange={(event) => setName(event.target.value)}
            />
            <label for="floatingInput" className="form-label">
              Name
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              autocomplete="off"
              onChange={(event) => setTagline(event.target.value)}
            />
            <label for="floatingInput" className="form-label">
              Tagline
            </label>
          </div>

          <div className="form-floating mb-3">
            <textarea
              type="text"
              className="form-control"
              id="floatingTextarea"
              style={{height: "150px"}}
              autocomplete="off"
              onChange={(event) => setDescription(event.target.value)}
            />
            <label for="floatingInput" className="form-label">
              Description
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              autocomplete="off"
              onChange={(event) => setFirst_brewed(event.target.value)}
            />
            <label for="floatingInput" className="form-label">
              First Brewed
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              autocomplete="off"
              onChange={(event) => setBrewers_tips(event.target.value)}
            />
            <label for="floatingInput" className="form-label">
              Brewers Tips
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              autocomplete="off"
              onChange={(event) => setAttenuation_level(event.target.value)}
            />
            <label for="floatingInput" className="form-label">
              Attenuation Level
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              autocomplete="off"
              onChange={(event) => setContributed_by(event.target.value)}
            />
            <label for="floatingInput" className="form-label">
              Contributed by
            </label>
          </div>
          <div className="text-center">
            <button type="submit" className="linkBtn">
              Add New
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
