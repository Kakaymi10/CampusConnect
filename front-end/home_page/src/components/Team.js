import React from 'react';
import './Team.css'
import daniel from './../assets/danielb.jpg'
import erica from './../assets/errica.jpeg'
import david from './../assets/david.jpeg'
import maker from './../assets/maker.jpeg'
import moussa from './../assets/moussa.jpeg'
import mourice from './../assets/mourice.png'
const TeamMember = ({ name, role, linkedinUrl, githubUrl, imageUrl }) => (
  <div className="box">
    <img src={imageUrl} alt={name} />
    <h3>{name}</h3>
    <h5>{role}</h5>
    <div className="icons">
      <a href={linkedinUrl}><i className="ri-linkedin-box-fill"></i></a>
      <a href={githubUrl}><i className="ri-github-fill"></i></a>
    </div>
  </div>
);

const Team = () => (
  <section className="team" id='Team'>
    <div className="center">
      <h1>Our Team</h1>
    </div>
    <div className="team-content">
      <TeamMember
        name="Mourice Onyinye"
        role="Developer"
        linkedinUrl="https://www.linkedin.com/in/maurice-onyonyi-5326859a/"
        githubUrl="#"
        imageUrl={mourice}
      />
      <TeamMember
        name="Daniel Burongu"
        role="Developer"
        linkedinUrl="https://www.linkedin.com/in/danielburongu/"
        githubUrl="https://github.com/danielburongu"
        imageUrl={daniel}
      />
      <TeamMember
        name="Erica Nsimirimana"
        role="Developer"
        linkedinUrl="https://www.linkedin.com/in/erica-nshimirimana-03040a241/"
        githubUrl="https://github.com/Ericanshimir"
        imageUrl={erica}
      />
      <TeamMember
        name="Long Deng Maker"
        role="Developer"
        linkedinUrl="https://www.linkedin.com/in/long-maker-long-deng-478124177/"
        githubUrl="https://github.com/longmaker2"
        imageUrl={maker}
      />
      <TeamMember
        name="Moussa Mustapha"
        role="Developer"
        linkedinUrl="https://www.linkedin.com/in/moussa-moustapha-moussa-316258226/"
        githubUrl="https://github.com/Kakaymi10"
        imageUrl={moussa}
      />
      <TeamMember
        name="David Mazimpaka"
        role="Developer"
        linkedinUrl="https://www.linkedin.com/in/mazimpaka-king-david-866b64172/"
        githubUrl="https://github.com/DavidkingMazimpaka"
        imageUrl={david}
      />
    </div>
  </section>
);

export default Team;
