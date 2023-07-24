import React from 'react'

const CareerForm = () => {
    return (
        <section className="career-form section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-numbers">
                            <h2> Looking For Oppertunity </h2>
                            <div className="career-numbers mt-50">
                                <div className="row gx-5">
                                    <div className="col-5">
                                        <div className="mum-card">
                                            <h3> <span className="counter"> 320 </span> </h3>
                                            <small> Project Completed </small>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="mum-card">
                                            <h3> <span className="counter"> 3 </span>B+ </h3>
                                            <small> Happy Users</small>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="mum-card">
                                            <h3> <span className="counter"> 8 </span>+ </h3>
                                            <small> Years of experience </small>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="mum-card">
                                            <h3> <span className="counter"> 2 </span> </h3>
                                            <small> Countries </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form action="https://iteck-html.themescamp.com/contact.php" className="form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group mb-4">
                                        <input type="text" className="form-control" placeholder="Full Name" />
                                        <span className="icon"> <i className="fas fa-user" /> </span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mb-4">
                                        <input type="text" className="form-control" placeholder="Email Adress" />
                                        <span className="icon"> <i className="fas fa-envelope" /> </span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mb-4">
                                        <input type="text" className="form-control" placeholder="Phone Number" />
                                        <span className="icon"> <i className="fas fa-phone" /> </span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mb-4 upload-card">
                                        <div className="form-control">
                                            <span id="upload_text"> <i className="fas fa-cloud" /> Upload CV</span>
                                            <input type="file" className="upload_input" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mb-4">
                                        <textarea rows={7} className="form-control" placeholder="Cover letter" defaultValue={""} />
                                        <span className="icon"> <i className="fas fa-pen" /> </span>
                                    </div>
                                </div>
                            </div>
                            <button className="btn bg-white sm-butn mt-4 rounded-3">
                                <span className="text-dark"> Make Request <i className="fal fa-long-arrow-right ms-2 color-blue5" /> </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <img src="assets/img/careers/map.png" alt="" className="map_img" />
        </section>
    )
}

export default CareerForm