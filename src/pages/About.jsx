import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "../Components/about.css";


export default function About() {
  return (
    <>
    <h1 className="what"> What is this all about?</h1>
    <div className="about-container">
      <div className="una">
      <div>
      <p className="about-des">
      KRIMC Cube Shop is a Puzzle Store <br/>that sells good quality puzzles <br/>that can be used by Cuber in Competition
      </p>
      </div>
      <div>
        <img className="logoabout" src="../public/rubiks/logoabout.png"/>
      </div>
      </div>
      <div className="ngalawa">
      <div>
        <img className="about1" src="../public/rubiks/about1.png"/>
      </div>
      <div>
      <p className="about-des-right">
       All Started in January 2021, <br/>a boy name Kyle Corpuz come up <br/>with an idea  in turning his hobby to money,
      </p>
      </div>
      </div>
    </div>
    </>
  );
}
