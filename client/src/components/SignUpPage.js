import '../styles/SignUpPage.css';

function SignUpPage(){
    return (
        <div className="SignUpPage">
            <div className="SignUpContainer">
                <h1>Sign Up</h1>
                <div className="SignUpForm">
                    <form className="SignUp" action="/signup" method="post">
                        <div className='DataInput'>
                            <label htmlFor="fname">First Name: </label>
                            <input type="text" id="fname" name="fname" placeholder="Jane" required></input>
                        </div>
                        <div className='DataInput'>
                            <label htmlFor="lname">Last Name: </label>
                            <input type="text" id="lname" name="lname" placeholder="Doe" required></input>
                        </div>
                        <div className='DataInput'>
                            <label htmlFor="email">Email: </label>
                            <input type="text" id="email" name="email" placeholder="janedoe@gmail.com" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required></input>
                        </div>
                        <div className='DataInput'>
                            <label htmlFor="password1">Password: </label>
                            <input type="password" id="password1" name="password" required></input>
                        </div>
                        <div className='DataInput'>
                            <label htmlFor="password2">Confirm Password: </label>
                            <input type="password" id="password2" name="password" required></input>
                        </div>
                        <div className='SignUpButton'>
                            <input type="submit" value="sign up"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;
