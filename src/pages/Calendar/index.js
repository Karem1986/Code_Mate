import React from "react";
import index from "./index.css";

export default function BookSession() {
  return (
    <div>
      <h2 className="h2-book-session">Book your session here</h2>

      <div className="week">
        <div className="day">
          <h4 className="day-label">Times</h4>

          <div className="time-column">9am-11am</div>

          <h4 className="day-label">Sunday</h4>

          <div className="day">
            <div className="inside-day">select sunday</div>
          </div>
          <h4 className="day-label">Monday</h4>
          <div className="day">
            <div className="inside-day">select monday</div>
            <div className="inside-day">select monday</div>
          </div>
          <h4 className="day-label">Tuesday</h4>

          <div className="day">
            <div className="inside-day">select tuesday</div>
            <div className="inside-day">select tuesday</div>
            <div className="inside-day">select tuesday</div>
          </div>
          <h4 className="day-label">Wednesday</h4>
          <div className="day">
            <div className="inside-day">select Wednesday</div>
            <div className="inside-day">select Wednesday</div>
            <div className="inside-day">select Wednesday</div>
          </div>
          <h4 className="day-label">Thursday</h4>
          <div className="day">
            <div className="inside-day">select Thursday</div>
            <div className="inside-day">select Thursday</div>
            <div className="inside-day">select Thursday</div>
            <div className="inside-day">select Thursday</div>
          </div>
          <h4 className="day-label">Friday</h4>
          <div className="day">
            {" "}
            <div className="inside-day">select</div>
            <div className="inside-day">select</div>
            <div className="inside-day">select</div>
            <div className="inside-day">select</div>
          </div>
          <h4 className="day-label">Saturday</h4>
          <div className="day">
            {" "}
            <div className="inside-day">select</div>
            <div className="inside-day">select</div>
            <div className="inside-day">select</div>
            <div className="inside-day">select</div>
          </div>
        </div>
      </div>
    </div>
  );
}
