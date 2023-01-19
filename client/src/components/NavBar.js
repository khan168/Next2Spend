import '../styles/NavBar.css';

function NavBar(){
    return (
        <div className='NavBar'>
            <div className='LogoContainer'>
                <span>Next2Spend</span>
            </div>
            <div className='Buttons'>
                <ul className='ButtonLinks'>
                    <li className='ButtonLinkWrapper'>
                        <a className='ButtonLink'>Log In</a>
                    </li>
                    <li className='ButtonLinkWrapper'>
                        <a className='ButtonLink'>Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
