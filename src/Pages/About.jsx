

export const About = () =>{
    return(
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            
                            <h1>Why Choose Us</h1>
                            <p>
                            With years of experience in IT, we have honed our skills and knowledge to deliver top-notch software product. Our team consists of industry experts who are passionate 
                            </p>
                            <p>
                            We thrive on innovation. By staying ahead of industry trends and leveraging cutting-edge technology, we bring you [state-of-the-art products/services] that meet the evolving needs of our clients.
                            </p>
                            <div className="btn btn-group">
                                <a href="/about">
                                    <button className="btn">About us</button>
                                </a>
                                <a href="/contact">
                                     <button className="btn secondary-btn">Contact us</button>
                                </a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img
                                src="/images/contactpage.jpg"
                                alt="codding together"
                                width="600"
                                height="600"
                            />
                        </div>
                    </div>

                </section>
            </main>

            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>Quality Assurance</h2>
                        

                    </div>

                    <div className="div1">
                        <h2>Expertise</h2>
                        

                    </div>

                    <div className="div1">
                        <h2>Innovation</h2>
                        

                    </div>

                    <div className="div1">
                        <h2>Quality Assurance</h2>
                        

                    </div>


                </div>
            </section>
            
        </>
    )
}


