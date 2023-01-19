import '../styles/NavBar.css';

function NavBar(){
    return (
        <div className='NavBar'>
            <div className='LogoContainer'>
                <a href="/">Next2Spend</a>
            </div>
            <div className='Buttons'>
                <ul className='ButtonLinks'>
                    <li className='ButtonLinkWrapper'>
                        <a href="/login" className='ButtonLink'>Log In</a>
                    </li>
                    <li className='ButtonLinkWrapper'>
                        <a href="/signup" className='ButtonLink'>Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
