import '../styles/LoginPage.css';

function LoginPage(){
    return (
        <div className='LoginPage'>
            <div className="LoginContainer">
                <h1>Login</h1>
                <div className="LoginForm">
                    <form className="LogIn" action="/login" method="post">
                        <div className='DataInput'>
                            <label for="email">Email: </label>
                            <input type="text" id="email" name="email" placeholder="janedoe@gmail.com" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required></input>
                        </div>
                        <div className='DataInput'>
                            <label for="password">Password: </label>
                            <input type="password" id="password" name="password" required></input>
                        </div>
                        <div className='LoginButton'>
                            <input type="submit" value="Log in"></input>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
