import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  const { auth } = props;
  const signOut = event => {
    event.preventDefault();
    auth.signOut();
  };

  return (
    <nav className="NavBar">
      <div className="plate">
        <p className="script">
          <span>Eats Finder</span>
        </p>
      </div>
      <div>
        {/* <a className="Nav-brand-logo" href="/" /> */}

        {auth.user === null ? (
          <React.Fragment>
            <Link to="/user/new">Sign Up</Link>
            &nbsp;
            <Link to="/session/new">Sign In</Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Link to="/dishes">Dishes</Link> */}
            {/* <Link to="/providers">Providers</Link> */}
            {/* <Link to="/providers/new">New Provider</Link> */}
            {/* <span> Hi, {auth.user.user_name}! </span>
          <img
            className="avatar"
            border="5"
            src={auth.user.image_url}
            alt={auth.user.user_name}
          /> */}
            <a onClick={signOut}>Sign Out</a>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
