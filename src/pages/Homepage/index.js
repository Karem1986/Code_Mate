import React, { useState, useEffect } from "react";
import UserReview from "../../components/UserReviews";
import axios from "axios";
// import { API_URL_QUOTES } from "../../constants/constants";
import { Box, Grid, Paper, Snackbar, Button, Slide } from "@material-ui/core";
import { useStyles } from "./styles";

const premierFounders = [

  {
    name: "Marios",
    description: "Full stack developer",
    imageUrl:
      "https://avatars2.githubusercontent.com/u/50610396?s=460&u=1f7c3ef1e02913b6ada27e305ac0cfd926d48a63&v=4",
      testimonial:
      "Code mate is fantastic! you can buddy up with someone whenever you want and find work as a developer",
  },
  {
    name: "Olena",
    description: "Front end developer",
    imageUrl:
      "https://avatars0.githubusercontent.com/u/7324142?s=460&u=def0ad84ddc36e8c631028faecfe5b6bfdded1cb&v=4",
      testimonial:
      "Code mate is what I needed to motivate myself pairing up with someone that understands the struggle of coding",
  },

  {
    name: "Hannah",
    description: "Full stack developer",
    imageUrl:
      "https://avatars2.githubusercontent.com/u/54165871?s=460&u=cc54240dff97246e937161b37796991ddeeb3e03&v=4",
      testimonial:
      "I have met lots of awesome web developers thanks to Code Mate and the best is that is f",
  
  },
];

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min));
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

export default function Homepage() {
  const classes = useStyles();

  return (
    <Box mt={4} className={classes.root}>
      <Grid container spacing={3}>

        {premierFounders.map((founder) => {
          return (
            <Grid item xs={12} sm={4}>
              <UserReview
                key={Math.random()}
                name={founder.name}
                description={founder.description}
                imageUrl={founder.imageUrl}
                testimonial={founder.testimonial}
              />
            </Grid>
          );
        })}

        
      </Grid>
    </Box>
  );
}