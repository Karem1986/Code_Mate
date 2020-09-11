import React from "react";
import video from "../../src/video.mp4";
import Olena from "../assets/Olena.jpg";
import marios from "../assets/marios.jpeg";
import Hannah from "../assets/Hannah.jpg";

export default function Homepage() {
  //1.Three developers fotos and reviews, hardcoded for now, after can be from database

  const testimonials = [
    {
      name: "Olena Steiner",
      description: "Front end developer",
    },

    {
      name: "Marios Kanellopoulos",
      description: "Full stack developer",
    },

    {
      name: "Hannah Larson",
      description: "Back end developer",
    },
  ];

  //2.Hooks: useState and useEffect --> buttom that after clicking leads to a page

  return (
    <div className="homepage">
      <h1>Welcome to Code Mate</h1>

      <video
        src={video}
        alt="code-mate"
        autoPlay="true"
        width="800"
        height="500"
      ></video>

      <div>
        <h2>Why should you use Code Mate?</h2>
        {testimonials.map((card) => {
          return (
            <div>
              {card.name} {""}
              {card.description}
            </div>
          );
        })}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <img src={Olena}></img>
          <img src={marios}></img>
          <img src={Hannah}></img>
        </div>
      </div>
    </div>
  );
}
