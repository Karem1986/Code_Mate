import React from "react";

export default function DevProfiles(props) {
  return (
    <div className="buddies">
      <img src={props.avatar_url} width="500px" heigth="450px" />
      <h4>Username: {props.login}</h4>

      <a target="_blank" href={props.url}>
        {" "}
        <h4>Github profile </h4>
      </a>
    </div>
  );
}
