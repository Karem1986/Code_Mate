import React from "react";
import index from "../pages/Buddies/index.css";

export default function DevProfiles(props) {
  return (
    <div className="Parent">
      <div className="children">
        <img src={props.avatar_url} width="300" height="300" />
        <h4>Alias name: {props.login}</h4>

        <a target="_blank" href={props.html_url}>
          {" "}
          <h5> Github profile</h5>{" "}
        </a>
      </div>
    </div>
  );
}
