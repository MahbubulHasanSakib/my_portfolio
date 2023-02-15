import React from 'react'
import p2 from '../images/p2.JPG';
import p4 from '../images/p4.JPG';
import p6 from '../images/p6.JPG';
import p7 from '../images/pic7.jpg';
import p8 from '../images/p8.JPG';
import vc from '../images/vc.JPG'
import idsrg from '../images/idsrg.JPG'
import mh_shop from '../images/mh_shop.JPG'
import insta from '../images/insta.JPG'
const Portfolio = () => {
    const projects = [
        {
            name: "Reasearch Society",
            img: idsrg,
            languageOrFramwork: "REACT JS,NODE JS,EXPRESS JS,MONGODB",
            frontendCode:"https://github.com/MahbubulHasanSakib/iiuc_dsrg_client_netlify",
            backendCode:"https://github.com/MahbubulHasanSakib/iiuc_dsrg_deploy",
            link: "https://idsrg.org/"
        },
        {
            name: "Virtual Classroom",
            img: vc,
            languageOrFramwork: "NODE JS,EXPRESS JS,EJS",
            frontendCode:"",
            backendCode:"https://github.com/MahbubulHasanSakib/virtual_classroom_deploy",
            link: "https://virtual-classroom-app.onrender.com/"
        },
        {
            name: "Mh Shop",
            img: mh_shop,
            languageOrFramwork: "NODE JS,EXPRESS JS,EJS",
            frontendCode:"",
            backendCode:"https://github.com/MahbubulHasanSakib/virtual_shop_deploy",
            link: "https://orange-red-python-wrap.cyclic.app/"
        },
        {
            name: "Instapedia",
            img: insta,
            languageOrFramwork: "NODE JS,EXPRESS JS,EJS",
            frontendCode:"",
            backendCode:"https://github.com/MahbubulHasanSakib/instapedia_deploy",
            link: "https://instapedia-backend.onrender.com/"
        },
        {
            name: "Library Management System",
            img: p2,
            languageOrFramwork: "C#.NET",
            frontendCode:"",
            backendCode:"https://github.com/MahbubulHasanSakib/Library-Management-System",
            link: ""
        },
       /* {
            name: "Restaurant Management System",
            img: p3,
            languageOrFramwork: "C++,QT",
            frontendCode:"",
            backendCode:"https://github.com/MahbubulHasanSakib/Restaurant-Management-System",
            link: ""
        },*/
        {
            name: "IT Solution Provider",
            img: p4,
            languageOrFramwork: "HTML,CSS,JS,PHP",
            frontendCode:"",
            backendCode:"https://github.com/MahbubulHasanSakib/IT-solution-provider-project",
            link: ""
        },
       /* {
            name: "Chatbot Interface",
            img: p5,
            languageOrFramwork: "HTML,CSS,JS",
            frontendCode:"",
            backendCode:"https://github.com/MahbubulHasanSakib/Chatbot-Interface",
            link: ""
        },*/
        {
            name: "Tour Web App using ReactJs Context API excluding props drilling",
            img: p6,
            languageOrFramwork: "React JS",
            frontendCode:"",
            backendCode:"https://github.com/MahbubulHasanSakib/Tour-web-app-using-React-js-state-management-with-ContextAPI-excluding-props-drilling",
            link: ""
        },
        {
            name: "Shopping Cart using ReactJs Context API and State hooks",
            img: p7,
            languageOrFramwork: "React JS",
            frontendCode:"",
            backendCode:"https://github.com/MahbubulHasanSakib/Shopping-Cart-Update-using-React-Context-API",
            link: ""
        },
        {
            name: "Food Menu Web app using React Js useState hooks",
            img: p8,
            languageOrFramwork: "React JS",
            frontendCode:"",
            backendCode:"https://github.com/MahbubulHasanSakib/Food-Menu-Web-App-using-React-useState-hook",
            link: ""
        }
    ];
    return (
        <section id="portfolio">
            <div className="container portfolio_section">
                <h1 data-aos="fade-left">Portfolio</h1>
                <div className="all_works row">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} className="col-lg-6 col-xl-6 portfolio_div">
                                    <div data-aos="fade-right" className="singlework">
                                        <img src={project.img} alt="project_img"/>
                                        <div className="overlay">
                                            <div className="work_link">
                                                <p className="project_name">Project: {project.name}</p>

                                                {
                                                    project.frontendCode!=="" && project.backendCode!=="" &&
                                                    (
                                                        <div style={{margin:'5px 0px'}}>
                                                        <a target="_blank" rel="noreferrer" href={project.frontendCode}>CLIENT CODE</a><br/>
                                                        <a target="_blank" rel="noreferrer" href={project.backendCode}>SERVER CODE</a>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    project.frontendCode=="" && project.backendCode!=="" &&
                                                    (
                                                        <>
                                                               <a target="_blank" rel="noreferrer" href={project.backendCode}>CODE</a>
                                                        </>
                                                    )
                                                }
                                                {
                                                    project.link!=="" &&
                                                    <a target="_blank" rel="noreferrer" href={project.link}>LIVE</a>
                                                }
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>



            </div>

        </section>
    )
}

export default Portfolio
