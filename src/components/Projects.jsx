import React from "react";
import BrujasLogo from "../brujas.jpg";
import BairesLogo from "../baires (2).jpg";
import NorfolkLogo from "../Norfolk.jpg";
import Netflix from "../netflix-clon.JPG";
import Spotify from "../spotify-clon.JPG";
import Oscars from "../oscars.JPG";
import Works from "./Works";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Mis Projectos</h2>
      <Works
        img={Oscars}
        title="Oscar Ballot"
        url="https://oscar-poll.web.app/"
      />
      <Works
        img={Netflix}
        title="Netflix Clon"
        url="https://netflix-clon-3e2ca.web.app/"
      />
      <Works
        img={Spotify}
        title="Spotify Clon"
        url="https://spotify-clon-24325.web.app/"
      />
      <Works
        img={BrujasLogo}
        title="Brujas"
        url="http://brujasindumentaria.com.ar/"
      />

      <Works
        img={BairesLogo}
        title="Baires"
        url="http://c2260817.ferozo.com/"
      />

      <Works img={NorfolkLogo} title="Norfolk" url="http://norfolk.com.ar/" />
    </div>
  );
}

export default Projects;
