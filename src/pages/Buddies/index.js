import React, { useEffect, useState } from "react";
import DevProfiles from "../../components/DevProfiles";
import axios from "axios";

export default function Buddies() {
  const [githubUsers, setGithubUsers] = useState([]);

  //Display the profiles from Github until backend users is created:

  useEffect(() => {
    async function getProfiles() {
      try {
        const API_URL = `https://api.github.com`;

        const profiles = await axios.get(`${API_URL}/users?limit=5`);

        console.log("testing api", profiles);
        setGithubUsers(profiles.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getProfiles();
  }, []);

  return (
    <div>
      <h1>Select your coding buddy: </h1>

      <span>
        {githubUsers.map((data, index) => {
          return (
            <DevProfiles
              key={index}
              login={data.login}
              url={data.url}
              avatar_url={data.avatar_url}
            />
          );
        })}
      </span>
    </div>
  );
}
