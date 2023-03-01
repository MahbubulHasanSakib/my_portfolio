import React from 'react'

const Service = () => {
    return (
        <section id="services">
            <div className="container service_section">
                <h1 data-aos="fade-left">Services</h1>
                <div className="all_services">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-4">

                            <div className="service_item " data-aos="fade-right">
                            <span className="icons"><i className="fa fa-desktop" aria-hidden="true"></i></span>
                            <h5>Web Development</h5>
                            <p>Specialize in creating custom websites tailored to your business needs.I use the latest technologies to design responsive, user-friendly, and visually appealing websites that help your business stand out in the digital world.</p>
                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-4" >
                            <div className="service_item " data-aos="fade-right">
                            <span className="icons"><i className="fa fa-code" aria-hidden="true"></i></span>
                            <h5>Software Development</h5>
                            <p>This service is designed to help businesses of all sizes develop custom software solutions that meet their unique needs. I specialize in building scalable, secure, and user-friendly software applications that streamline business processes, increase efficiency, and improve productivity.</p>
                            
                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-4">
                            <div className="service_item " data-aos="fade-right">
                            <span className="icons"><i className="fa fa-codepen" aria-hidden="true"></i></span>
                            <h5>Web Design</h5>
                            <p>Web design service is designed to help businesses create a visually stunning and user-friendly website that captures the attention of their target audience. I am passionate about creating engaging website designs that not only look beautiful but also drive results.</p>
                            
                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-6">
                            <div className=" service_item app_dev" data-aos="fade-down">
                            <span className="icons"><i className="fa fa-apple" aria-hidden="true"></i></span>
                            <h5>App Development</h5>
                            <p>App development services are designed to help businesses create custom mobile applications that provide an exceptional user experience and help them achieve their business goals. I specialize in developing apps that are intuitive, engaging, and functional.</p>
                            
                            </div>
                        </div>
                        <div className=" col-md-12 col-lg-12 col-xl-6">
                            <div className=" service_item" data-aos="fade-down">
                            <span className="icons"><i className="fa fa-cubes" aria-hidden="true"></i></span>
                            <h5>Micro-services</h5>
                            <p>Microservices development services are designed to help businesses create scalable and modular software solutions that can adapt to changing business requirements. I specialize in building microservices architectures that allow for the independent deployment, scaling, and maintenance of individual software components.</p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
