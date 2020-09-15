import React, { useState } from "react";
import index from "./index.css";

export default function BookSession() {
  const [selectDay, set_Day] = useState("");

  const event_Date = (event) => {
    set_Day(event.target.value);
    console.log("select Day");
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
              <ul className="days" onClick={event_Date}>
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

                  <div className="repeating-event">
                    <span className="event-title">
                      This is an event with a large text
                    </span>
                    <span className="event-duration">(3)</span>
                  </div>
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
