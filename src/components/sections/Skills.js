import React, {Component} from 'react';
import skillsData from '../../data/skillsData';
import dots from '../../imgs/dots-deco.png'

export default class Skills extends Component{

    // constructor(props) {
    //     super(props);
    //     this.tabNav = React.createRef();
    // }

    state = {
        prevTabClick: "Code",
        // skillSelected: "Code",
        activeSkillData: {
            id: null,
            name: null,
            img: null,
            description: null,
        },
    }

    render() {

        const {activeSkillData} = this.state;

        return (
            <section className="skills-section">
                <div id="skills" className="content">
                    <div >
                        <img
                            className="skills--svg fade-in"
                            src={activeSkillData.img}
                            alt={activeSkillData.name}
                            ref={Image => {this.skillSvg = Image}}
                            key={activeSkillData.name}
                        />
                        
                    </div>
                    <div className="tab-container">
                        <img
                            src={dots}
                            className="tab-overlay"
                            alt="dots-overlay"
                        />
                        <div className="skills--header">
                            <p>My</p>
                            <h2>Skills</h2>
                        </div>
                        <div className="tabs-nav" >
                            <button id="active-tab-nav" onClick={this.tabNavClick.bind(this)} refname="Code" ref={button => {this.Code = button}}>Code</button>
                            <button onClick={this.tabNavClick.bind(this)} refname="Business" ref={button => {this.Business = button}}>Business</button>
                            <button onClick={this.tabNavClick.bind(this)} refname="Media"  ref={button => {this.Media = button}}>Media</button>
                        </div>
                        <div>
                            <p>{activeSkillData.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    tabNavClick(e) {
        const btnClicked = e.target;
        const btnRef = btnClicked.innerText   
        const {prevTabClick} = this.state   

        this[prevTabClick].removeAttribute("id")

        this.updateSkillsData(btnRef)
        this.setState({prevTabClick: btnRef})
        btnClicked.setAttribute("id", "active-tab-nav"); 
    }

    updateSkillsData = (skillName) => { //responds with index value of chose skill by matching skill name
        const activeSkillData = skillsData.find((skill) => skill.name === skillName)
        this.setState({activeSkillData: activeSkillData})
    }

    componentDidMount() {
        this.updateSkillsData(this.state.prevTabClick)
    }

}