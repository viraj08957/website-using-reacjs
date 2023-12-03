import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login=()=>{
    const [user,setUser] = useState({
        username:"",
        password:"",
    });

    const navigate = useNavigate();

    const handleInput = (e)=>{
        let name = e.target.name;
        let value= e.target.value;

        setUser({
            ...user,
            [name]:value,
        });
    };

    const handleSubmit = ()=>{

    }

    return(
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image reg-img">
                                <img 
                                
                                  src="images/login.jpg"
                                  alt="login images"
                                  width="600"
                                  height="600"

                                />
                            </div>
                            <div className="registration-form">
                               <h1 className="main-heading mb-3">
                                Login Form
                               </h1>
                               <br/>
                               <form onSubmit={handleSubmit}>
                                 <div>
                                    <label htmlFor="username">username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={user.username}
                                        onChange={handleInput}
                                        placeholder="username"
                                    />

                                    
                                 </div>
                                 <div>
                                    <label htmlFor="password">password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleInput}
                                        placeholder="password"
                                    />
                                 </div>
                                 <br/>
                                 <button type="submit" className="btn btn-sumit">
                                    Registration Now
                                 </button>
                               </form>

                            </div>
                        </div>
                    </div>
                </main>
            </section>

        </>
    );
};




