import React from 'react'
import { Content } from '../Content'

const Banner = () => {
    return (
        <Content hideTitle title="Career">
            <section className="choose-us section-padding pt-0 style-1">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-5">
                            <div className="info">
                                <div className="section-head mb-60">
                                    <h6 className="color-main text-uppercase wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Join Us</h6>
                                    <h3 className="wow fadeInUp fs-3" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Embrace the power of collaboration and let's craft a better future together.<span className="fw-normal mt-4 fs-4">Join us on this transformative path.</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/img/choose_us/choose_lines.svg" alt="" className="choose-us-img" />
                <img src="/assets/img/choose_us/choose_brands.png" alt="" className="choose-us-brands" />
                <img src="/assets/img/choose_us/choose_bubbles.png" alt="" className="choose-us-bubbles" />
            </section>
        </Content>
    )
}

export default Banner