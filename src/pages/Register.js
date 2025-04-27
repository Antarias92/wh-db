import React from "react";

const Register = () => {
    function switchContent(){
        const content = document.getElementById("content");
        const registerButton = document.getElementById("register");
        const loginButton = document.getElementById("login");

        registerButton.addEventListener("click", () => {
            content.classList.add("active");
        });
        loginButton.addEventListener("click", () => {
            content.classList.remove("active");
        });
    }

    return(
        <div className="content justify-content-center align-items-center d-flex shadow-lg" id="content">
            {/*-----Register Section-----*/}
            <div className="col-md-6 d-flex justify-content-center">
                <form>
                    <div className="header-text mb-4">
                        <h2>Register</h2>
                    </div>
                    <div className="input_group mb-3">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" placeholder="Enter Username" required/>
                    </div>
                    <div className="input_group mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" placeholder="Enter Email" required/>
                    </div>
                    <div className="input_group mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="text" className="form-control" placeholder="Enter Password" required/>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                    <div>
                    <p>Already have an account</p>
                    <a href="">Login</a>
                </div>
                </form>
            </div>

             {/*-----Login Section-----*/}
             <div className="col-md-6 right_box">
                <form>
                    <div className="header-text mb-4">
                        <h2>Login</h2>
                    </div>
                    <div className="input_group mb-3">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" placeholder="Enter Username" required/>
                    </div>
                    <div className="input_group mb-3">
                        <label htmlFor="username">Password</label>
                        <input type="text" className="form-control" placeholder="Enter Password" required/>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                 
                </form>
            </div>

            {/*-----Switch Sections-----*/}
            <div className="switch_content">
                <div className="switch">
                    <div className="switch_section switch_left">
                        <h1>Welcome Back</h1>
                        <button className="hidden btn btn-outline-warning" id="login" onClick={switchContent}>Login</button>
                    </div>
                    <div className="switch_section switch_right">
                        <h1>Welcome to Warhammer Forum</h1>
                        <button className="hidden btn btn-outline-warning" id="register" onClick={switchContent}>Register</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Register;