import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";

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

//Month icon style components:

// const theme = {
//   calendarIcon: {
//     textColor: "white", // text color of the header and footer
//     primaryColor: "#0da472", // background of the header and footer
//     backgroundColor: "#fafafa",
//   },
// };

export default function BookSession() {
  const classes = useStyles();

  // 2. Move this state to the new component described in step 1. You will need them otherwise
  // everything breaks. Renamed this to "setAnchorEl" to be less confusing (day and anchor has nothing
  // to do with each other so I didn't know what was going on here
  const [anchorEl, setAnchorEl] = useState(null);

  // 3. Also move this state to the new component described in step 1. This should be "false" to start with.
  let [showButton, setShowButton] = useState(false);

  //which time slot a person is selecting
  const [setTime, set_Time] = useState("");
  //Select a week during a month
  const [setWeek, set_Week] = useState(""); //week in calendar
  const [Month, set_Month] = useState(""); //month in calendar

  //Upon clicking on a day, the user will see a pop up with a date dropdown where can select a session
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); //shows pops up upon click
  };

  // 5. Move this to the new component too to update state moved in step 3... Removed some unnecessary code
  // as all you need to check something is selected is if the value is "" or not.
  const onChange = (event) => {
    if (event.currentTarget.value) {
      setShowButton(true);
    }
  };

  // 4. Move this to the new component described in step 1. This is important for updating the state
  // moved in step 2.
  const handleClose = () => {
    setAnchorEl(null); //if not click then do not show pop up
  };

  // 6. Move this across to the new component too.
  //logic for pop up--Boolean
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //Select a week within a month
  const handleWeek = (event) => {
    set_Week(event.currentTarget); //updates to the previous or following week in the calendar
  };

  //Select a month in the calendar
  const onMonth = (event) => {
    const [month] = event.currentTarget.value.split("-"); //IT DOES NOT WORK--STEPS HERE DARREN:
    //if click inside select options show the pop up
    // console.log("event", event);

    set_Month(month); // user can select any month in calendar to book sessions
  };

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
                  <ul className="month">
                    <h3>September </h3>
                    <Calendar
                      tileContent={
                        <div>
                          <select onChange={onMonth} value={Month}>
                            {" "}
                            <option value="">Choose a time slot</option>
                            <option value={`-9am`}>9am-10am</option>
                            <option value={`-10am`}>10am-11am</option>
                            <option value={`-11am`}>11am-12am</option>
                          </select>
                          <li>
                            {showButton ? (
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
                          </li>
                        </div>
                      }
                    />
                  </ul>
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
                  // 1. Move this HTML to a separate React component. This is so each copy of this component
                  // will have its own state for figuring out whether to show the "choose your buddy" button
                  // and you don't have to do everything here and rely on the day number changing (a bit weird to understand)
                  <li>
                    <span className="day-item">{number}</span>
                    {/* 7. Once you moved everything to that new component I mentioned... you only need to check showButton
                    is true/false to decide whether to show the button or not... */}
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
