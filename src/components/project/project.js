import React from 'react';

class Project {
  constructor(title, numProjects, year, technologies) {
    this.title = title;
    this.numProjects = numProjects;
    this.year = year;
    this.technologies = technologies;
    this.imageNames = null;
    this.descriptions = null;
    this.githubLinks = null;
  }

  updateDescriptions(descriptions) {
    this.descriptions = descriptions;
  }

  updateGithubLinks(links) {
    this.githubLinks = links;
  }
}

const chadali = new Project("Chadali", 1, 2018, ['reactjs']);
chadali.updateDescriptions([<span><div className="projectHeader">Personal website made using ReactJS</div> <div className="projectDescription"> States, props, hierarchies. This entire page stems from a simple 'Project' class definition and an array of Project objects.</div></span>]);
chadali.updateGithubLinks(["https://github.com/chadali/chadali.github.io"]);

const iosDevelopment = new Project("IOS Development", 4, 2018, ['swift']);
iosDevelopment.updateDescriptions([<span><div className="projectHeader">Test Driven Development</div><div className="projectDescription">View controller unit testing is quite difficult and this is a great tutorial on the topic.</div></span>, <span><div className="projectHeader">Storyboard Tutorial</div><div className="projectDescription">Tutorial for segues, storyboards, etc.</div></span>, <span><div className="projectHeader">IOS Note Taking Application</div><div className="projectDescription">Basic app from scratch to bring me up to speed.</div></span>,<span><div className="projectHeader">IOS Calculator Application</div><div className="projectDescription">Basic app from scratch to bring me up to speed.</div></span>]);
iosDevelopment.updateGithubLinks(["https://github.com/chadali/IOS-TableViewController-TDD", "https://github.com/chadali/IOS-Storyboard-Tutorial", "https://github.com/chadali/IOS-Notes", "https://github.com/chadali/IOSCalculator"]);

const steamApplications = new Project("Steam Android Applications", 2, 2017, ["java"]);
steamApplications.updateDescriptions([<span><div className="projectHeader">Time-based One-time (TOTP) 2FA</div><div className="projectDescription">Returns 5 character 2FA code for a user using inputted secret hash</div></span>, <span><div className="projectHeader">OPSkins API Filter</div><div className="projectDescription">Provides helpful tools to filter a website's API response.</div></span>]);
steamApplications.updateGithubLinks(["https://github.com/chadali/DeveloperSteamAuthenticator", "https://github.com/chadali/OpskinsPrices"]);

const microLending = new Project("Microlending Hackathon Submission", 1, 2018, ['python','flask']);
microLending.updateDescriptions([<span><div className="projectHeader">C1 Hackathon Submission</div><div className="projectDescription">Microlending framework that scrapped real data from /r/borrow and applied Machine Learning analysis to determine risk factor.</div></span>]);
microLending.updateGithubLinks(["https://github.com/chadali/microlending"]);

const airbnbSF = new Project("AirBnb SF", 1, 2017, ["python","websocket","flask"]);
airbnbSF.updateDescriptions([<span><div className="projectHeader">C1 Coding Challenge</div><div className="projectDescription">Analyze and return public AirBnB rental data in a user friendly format.</div></span>]);
airbnbSF.updateGithubLinks(["https://github.com/chadali/CapitalOneSummit"]);

const phoenixNow = new Project("PhoenixNow", 1, 2016, ["python","flask","sql"]);
phoenixNow.updateDescriptions([<span><div className="projectHeader">Remote Sign-in Application</div><div className="projectDescription">Students check-in anywhere on campus with GPS verification, saving 10+ minutes daily.</div></span>]);
phoenixNow.updateGithubLinks(["https://github.com/chadali/PhoenixNow"]);

const collegeNav = new Project("CollegeNav", 1, 2015, ["java"]);
collegeNav.updateDescriptions([<span><div className="projectHeader">Navigational Resource</div><div className="projectDescription">Quickly find important college campus buildings using Google Maps.</div></span>]);
collegeNav.updateGithubLinks(["https://github.com/chadali/CollegeNav"]);

const gucci = [chadali,iosDevelopment,steamApplications,microLending,airbnbSF,phoenixNow,collegeNav];

export default gucci;
