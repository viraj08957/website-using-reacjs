import { useState } from "react"





export const Contact = () =>{
    const [contact,setContact] = useState(
        {
            username: "",
            email: "",
            message: ""
        }

    );

    const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]:value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(contact);
    }
    return(
        <>
            <section className="section-contact">
                 <div className="contact-content container">
                    <h1 className="main-heading">         Contact Us</h1>
                 </div>
                 <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/contact.jpg" alt="we are ready to help"/>
                    </div>
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={contact.username}
                                    onChange={handleInput}
                                    required
                                 />
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input 
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                 />
                            </div>
                            <div>
                                <label htmlFor="message">message</label>
                                <textarea
                                name="message"
                                id="message"
                                autoComplete="off"
                                value={contact.message}
                                onChange={handleInput}
                                required
                                cols="30"
                                rows="6"
                                
                                >

                                </textarea>
                            </div>
                            <div>
                                <button
                                type="submit"
                                >Submit</button>
                            </div>
                        </form>
                    </section>
                   
                 </div>
            </section>
        </>
    )
}

