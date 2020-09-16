import React, { useState, useEffect } from "react";
import video from "../../src/video.mp4";
import { useHistory } from "react-router-dom";
import Testimonials from "../components/Testimonials";

export default function Homepage() {
  //Dynamic route for button to book session page
  const history = useHistory();
  //Hooks: useState and useEffect ---> to fetch data from API for example

  //1.Three developers fotos and reviews, hardcoded for now, after can be from database
  const testimonials = [
    {
      name: "Olena",
      description: "Front end developer",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      testimonial:
        "Code mate is what I needed to motivate myself with someone that understands the struggle of coding your own projects",
    },

    {
      name: "Marios",
      description: "Full stack developer",
      imageUrl:
        "https://avatars2.githubusercontent.com/u/50610396?s=460&u=1f7c3ef1e02913b6ada27e305ac0cfd926d48a63&v=4",
      testimonial:
        "Code mate is fantastic!, not only you can buddy up with someone whenever you want, but also organize meetups and events to find work as a developer",
    },

    {
      name: "Hannah",
      description: "Full stack developer",
      imageUrl:
        "https://avatars2.githubusercontent.com/u/54165871?s=460&u=cc54240dff97246e937161b37796991ddeeb3e03&v=4",
      testimonial:
        "Since using Code mate, I have met lots of awesome developers, sessions are easy to book and you can do so whenever you need it",
    },
  ];

  //button to book session
  const goBookingSession = (e) => {
    history.push(`/code_session`);
  };

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
        <div>
          <h3>This is what our happy developers say</h3>
        </div>

        {testimonials.map((data, index) => {
          return (
            <Testimonials
              key={index}
              name={data.name}
              description={data.description}
              imageUrl={data.imageUrl}
              testimonial={data.testimonial}
            />
          );
        })}
      </div>
      <button onClick={goBookingSession}>
        Get your free trial session today
      </button>
    </div>
  );
}
