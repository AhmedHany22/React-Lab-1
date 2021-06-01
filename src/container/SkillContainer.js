import React from 'react';
import Skillbar from "../components/Skillbar/Skillbar";

export default class SkillContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      skillList: [
        {skillName: "HTML",precentage: "80%"},
        {skillName: "CSS",precentage: "80%"},
        {skillName: "React",precentage: "45%"},
        {skillName: "Javascript",precentage: "60%"},
        {skillName: " Node.js",precentage: "30%"},
      ]
    }
  }
  render() {
    return (
      <div className = "row bg-dark py-5 mx-0" >
        <div className = "container" >
          <div className = "col-sm-12 " >
            <div className = "row " >
              <div className = "col-sm-12" >
                <div className = " text-center" >
                  <p className = "text-capitalize text-white font-weight-bold h1 pb-4">Skills</p>
                    <p className = "text-white font-weight-lighter">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maiores voluptatem optio nostrum sapiente modi eum tempore non
                      sit asperiores rerum omnis, laborum dolorem possimus dolorum nemo,
                      laudantium ex earum sint? Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Ullam sed nobis similique, quasi beatae pariatur
                      ab ad modi perspiciatis officia molestiae, impedit asperiores.
                      Blanditiis illum accusamus provident exercitationem expedita ut.
                    </p>
                  </div>
                </div>
              </div>
            <div className = "row mt-5" >
              <div className = "col-lg-5" >
                <p className = "text-uppercase text-white font-weight-bold text-center h2">My focus
                <hr className = "bg-secondary"/></p>
                <ul className = "list-unstyled text-capitalize pl-5 ml-5 text-secondary font-weight-bold" >
                  <li class="pb-3 text-white">UI/UX Design</li>
                  <li class="pb-3 text-white">Responsive Design</li>
                  <li class="pb-3 text-white">Web Design</li>
                  <li class="pb-3 text-white">Game Development</li>
                </ul>
              </div>
              <div className="col-lg-7">{this.state.skillList.map(skill=>{return<Skillbar dataSkill={skill} />})}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
