import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// class Project extends Component {
//     constructor(props) {
//         super(props);
//         this.project = props.projects;
//     }
//
//     render() {
//         return (
//             <p>
//               &#8226; {JSON.stringify(this.project)}
//             </p>
//         )
//     }
// }

class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
  }

  render() {
    const GithubLink = (link) => {
      if(link == ""){
        return <div/>
      } else {
        return <a href={link}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      }
    }

    return(
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="projects">
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          {
            this.projects.map((proj, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">
                      {proj.name}
                  </h3>
                  <div className="subheading mb-3">{proj.language}</div>
                  {
                    proj.aboutWork.map((project, index) => (
                      <div>
                        <p>&#8226; {project.description} {GithubLink(project.github)} </p>
                      </div>
                    ))
                  }
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{proj.date}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Projects;
