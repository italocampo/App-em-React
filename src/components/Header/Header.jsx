import './Header.css';

// Component
function Header(props) {
    return(
        <>
            <header>
                {/* <h1>{props.logo}</h1> */}
                <div className="logo">ImobiTech</div>
            </header>
        </>
    );
}

export default Header;
