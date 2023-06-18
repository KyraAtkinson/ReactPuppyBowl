import { Link } from "react-router-dom";

function Nav(){
  return (
    <nav>
      <div nav-bar>
        <div id="nav-ba">
          
          <Link className="link" to="/players">
            All Puppies
          </Link>
          <Link className="link" to="/">
            HomePage
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;