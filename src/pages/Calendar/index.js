import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import index from "./index.css";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  button: {
    backgroundColor: "green",
    borderRadius: 150,
    fontSize: 15,
    minWidth: 250,
    margin: 10,
    padding: 15,
    fontWeight: "bold",
  },
}));

export default function BookSession() {
  const classes = useStyles();
  const [anchorEl, set_Day] = useState(null);

  //Upon clicking on a day, the user will see a pop up with a date dropdown where can select a session
  const handleClick = (event) => {
    // set_Day(event.currentTarget); //shows pops up upon click
    //if click inside day then show pop up
    if (set_Day(event.currentTarget)) {
      return "simple-popover";
    } else {
      return undefined;
    }
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

              <div hidden="true">
                <Button
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                  className={classes.button}
                >
                  Select a time slot
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
                  <Typography className={classes.typography}></Typography>
                </Popover>
              </div>

              <ul className="days">
                <li>
                  <span className="day-item">1</span>
                </li>
                <li>
                  <span className="day-item">2</span>
                </li>
                <li>
                  <span className="day-item">3</span>
                </li>
                <li>
                  <span className="day-item">4</span>
                </li>
                <li>
                  <span className="day-item">5</span>
                </li>
                <li>
                  <span className="day-item">6</span>
                </li>
                <li>
                  <span className="day-item">7</span>
                </li>
                <li>
                  <span className="day-item">8</span>
                </li>
                <li>
                  <span className="day-item">9</span>
                  <span className="repeating-event"></span>
                  <span className="repeating-event"></span>
                  <span className="repeating-event"></span>
                </li>
                <li className="today">
                  <span className="day-item">10</span>
                  <span className="repeating-event"></span>
                  <span className="repeating-event"></span>
                </li>
                <li>
                  <span className="day-item">11</span>
                </li>
                <li>
                  <span className="day-item">12</span>
                </li>
                <li>
                  <span className="day-item">13</span>
                </li>
                <li>
                  <span className="day-item">14</span>
                </li>
                <li className="selected">
                  <span className="day-item">15</span>
                </li>
                <li>
                  <span className="day-item">16</span>
                </li>
                <li>
                  <span className="day-item">17</span>
                </li>
                <li>
                  <span className="day-item">18</span>
                </li>
                <li>
                  <span className="day-item">19</span>
                </li>
                <li>
                  <span className="day-item">20</span>
                </li>
                <li>
                  <span className="day-item">21</span>
                </li>
                <li>
                  <span className="day-item">22</span>
                </li>
                <li>
                  <span className="day-item">23</span>
                </li>
                <li>
                  <span className="day-item">24</span>
                </li>
                <li>
                  <span className="day-item">25</span>
                </li>
                <li>
                  <span className="day-item">26</span>
                </li>
                <li>
                  <span className="day-item">27</span>
                </li>
                <li>
                  <span className="day-item">28</span>
                </li>
                <li>
                  <span className="day-item">29</span>
                </li>
                <li>
                  <span className="day-item">30</span>
                </li>
                <li>
                  <span className="day-item">31</span>
                </li>
                <li>
                  <span className="day-item extra-days">1</span>
                </li>
                <li>
                  <span className="day-item extra-days">2</span>
                </li>
                <li>
                  <span className="day-item extra-days">3</span>
                </li>
                <li>
                  <span className="day-item extra-days">4</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
