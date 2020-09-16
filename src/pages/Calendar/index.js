import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import index from "./index.css";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  button: {
    backgroundColor: "black",
    borderRadius: 100,
    fontSize: 10,
    minWidth: 50,
    margin: 5,
    padding: 5,
    fontWeight: "bold",
    color: "white",
  },
}));

export default function BookSession() {
  const classes = useStyles();
  const [anchorEl, set_Day] = useState(null);
  let [showButton, set_Button] = useState(null);
  //which time slot a person is selecting
  const [setTime, set_Time] = useState("");

  //Upon clicking on a day, the user will see a pop up with a date dropdown where can select a session
  const handleClick = (event) => {
    set_Day(event.currentTarget); //shows pops up upon click
  };

  const onChange = (event) => {
    const [day, time] = event.currentTarget.value.split("-");
    //if click inside select options show the pop up
    // console.log("event", event);
    set_Button(day);
    set_Time(time);
  };

  const handleClose = () => {
    set_Day(null); //if not click then do not show pop up
  };

  //logic for pop up--Boolean
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <h2 className="h2-book-session">Book your session here</h2>

      <div className="col-md-12">
        <div className="bt-calendar monthly-view">
          <div className="calendar-wrapper">
            <div className="calendar-table">
              <div className="calendar-month-zone">
                <ul>
                  <li className="prev">
                    <a className="btn">
                      <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="month">August 2017</li>
                  <li className="next">
                    <a className="btn">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="weekdays">
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
              </ul>

              <ul className="days">
                {[
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22,
                  23,
                  24,
                  25,
                  26,
                  27,
                  28,
                  29,
                  30,
                  31,
                  1,
                ].map((number) => (
                  <li>
                    <span className="day-item">{number}</span>
                    {showButton === number.toString() ? (
                      <div>
                        <Button
                          aria-describedby={id}
                          variant="contained"
                          onClick={handleClick}
                          className={classes.button}
                        >
                          Choose your buddy now
                        </Button>
                        <Popover
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                        >
                          <Typography className={classes.typography}>
                            <Link to="/code_session/:select_buddy">
                              Buddies
                            </Link>
                          </Typography>
                        </Popover>
                      </div>
                    ) : null}

                    <select onChange={onChange} value={setTime}>
                      {" "}
                      <option value="">Choose a time slot</option>
                      <option value={`${number}-9am`}>9am-10am</option>
                      <option value={`${number}-10am`}>10am-11am</option>
                      <option value={`${number}-11am`}>11am-12am</option>
                    </select>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
