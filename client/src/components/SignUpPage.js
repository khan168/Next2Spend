import '../styles/SignUpPage.css';

function SignUpPage(){
    return (
        <div class="SignUpPage">
            <div className="SignUpContainer">
                <h1>Sign Up</h1>
                <div className="SignUpForm">
                    <form className="SignUp" action="/signup" method="post">
                        <div className='DataInput'>
                            <label for="fname">First Name: </label>
                            <input type="text" id="fname" name="fname" placeholder="Jane" required></input>
                        </div>
                        <div className='DataInput'>
                            <label for="lname">Last Name: </label>
                            <input type="text" id="lname" name="lname" placeholder="Doe" required></input>
                        </div>
                        <div className='DataInput'>
                            <label for="email">Email: </label>
                            <input type="text" id="email" name="email" placeholder="janedoe@gmail.com" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required></input>
                        </div>
                        <div className='DataInput'>
                            <label for="password">Password: </label>
                            <input type="password" id="password" name="password" required></input>
                        </div>
                        <div className='DataInput'>
                            <label for="password">Confirm Password: </label>
                            <input type="password" id="password" name="password" required></input>
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
