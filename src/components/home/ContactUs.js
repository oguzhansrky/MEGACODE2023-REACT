import React from 'react'

const ContactUs = () => {
    return (
        <section className="contact section-padding bg-gradient style-1">
            <div className="container">
                <div className="section-head mb-60 text-center">
                    <h6 className="text-white text-uppercase wow fadeInUp">contact us</h6>
                    <h2 className="wow fadeInUp text-white">
                        Request Free <span className="fw-normal">Consultancy</span>
                    </h2>
                </div>
                <div className="content">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="contact_info text-white">
                                <p className="wow fadeInUp">Hotline 24/7</p>
                                <h4 className="wow fadeInUp">(+23) 5535 68 68</h4>
                                <ul>
                                    <li className="wow fadeInUp">
                                        <strong>Address : </strong> 58 Howard Street,  San Francisco, CA 941
                                    </li>
                                    <li className="wow fadeInUp">
                                        <strong>Email : </strong> contact@Iteck.co
                                    </li>
                                    <li className="wow fadeInUp">
                                        <strong>Fax : </strong> fax@Iteck.co
                                    </li>
                                    <li className="wow fadeInUp">
                                        <strong>Work Hour : </strong> Mon - Sat: 9:00 - 18:00
                                    </li>
                                </ul>
                                <a href="#" className="wow fadeInUp">get direction</a>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <form className="contact_form" action="https://iteck-html.themescamp.com/contact.php" method="post">
                                <div className="row gx-3">
                                    <div className="col-lg-6">
                                        <div className="form-group mb-3 wow fadeInUp">
                                            <input type="text" name="name" className="form-control" placeholder="name *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mb-3 wow fadeInUp">
                                            <input type="text" name="email" className="form-control" placeholder="Email Address *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group mb-3 wow fadeInUp">
                                            <select name="option" className="form-select" aria-label="Default select example">
                                                <option selected>Your inquiry about</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group mb-3 wow fadeInUp">
                                            <textarea className="form-control" rows={4} placeholder="Write your inquiry here" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check mb-4 wow fadeInUp">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                            <label className="form-check-label text-light small" htmlFor="flexCheckDefault">
                                                By submitting, i’m agreed to the <a href="#" className="text-decoration-underline">Terms &amp; Conditons</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="submit" defaultValue="Request Now" className="btn btn-dark wow fadeInUp text-light fs-14px" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/img/contact_globe.svg" alt="" className="contact_globe" />
        </section>
    )
}

export default ContactUs;
