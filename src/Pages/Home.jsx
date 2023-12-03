

export const Home = () =>{
    return(
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the World Best IT Company</p>
                            <h1>Welcome To My Page</h1>
                            <p>
                                are you ready to take your business to the next level with
                                cutting-edge IT solution? Look no futher At Thapa Technical,
                                we specialize in providing innovative  IT services and solution
                                tailored to meet you uniqe needs.
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Contact now</button>
                                </a>
                                <a href="/services">
                                     <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img
                                src="/images/homepage.jpg"
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
                        <h2>50+</h2>
                        <p>registered companies</p>

                    </div>

                    <div className="div1">
                        <h2>100,00+</h2>
                        <p>Happy clients</p>

                    </div>

                    <div className="div1">
                        <h2>$120M</h2>
                        <p>Yearly Revenue</p>

                    </div>

                    <div className="div1">
                        <h2>1200</h2>
                        <p>Working Employee</p>

                    </div>


                </div>
            </section>
            
        </>
    )
}



