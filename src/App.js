import React, { useState, useEffect } from "react";
import texasCounties from "./data";
import "./App.css";

const App = () => {
  const [counties, setCounties] = useState([]);

  useEffect(() => {
    const parsedData = JSON.parse(texasCounties);
    setCounties(parsedData);
  }, []);

  return (
    <div className="menu navigation-menu">
      <h1>Mai County Texas</h1>
      <ul>
        {counties.map((county, index) => (
          <li key={index}>
            <h2>{county.name}</h2>
            <p>
              <strong>Location:</strong> {county.location}
            </p>
            <p>
              <strong>Courthouse Address:</strong> {county.courthouse_address}
            </p>

            <p>
              <strong>Appraisal District Office:</strong>{" "}
              {county.appraisal_district_office_address}
            </p>
            <p>
              <strong>Registration Office:</strong>{" "}
              {county.registration_office_address}
            </p>
            <p>
              <strong>Local Municipality:</strong> {county.local_municipality}
            </p>
            <p>
              <strong>Elected Officials:</strong>
            </p>
            <ul>
              {Object.entries(county.elected_officials).map(
                ([title, name], index) => (
                  <li key={index}>
                    <strong>{title}:</strong> {name}
                  </li>
                )
              )}
            </ul>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={county.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {county.website}
              </a>
            </p>
            <p>
              <strong>Commissioner Court Minutes:</strong>{" "}
            </p>
            <a
              href={county.commissioner_court_minutes}
              target="_blank"
              rel="noopener noreferrer"
            >
              {county.commissioner_court_minutes}
            </a>
            <p>****</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
