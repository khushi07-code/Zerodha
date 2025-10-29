import {Link} from "react-router-dom";
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom"  >
          <div class="container">
            <Link class="navbar-brand" to="/">
              <img src="media/images/logo.svg" alt="logo" style={{width:"25%"}}/>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto  mb-2 mb-lg-0">
                <li class="nav-item mx-3">
                  <Link class="nav-link" aria-current="page" to="/Signup">
                    Signup
                  </Link>
                </li>
                <li class="nav-item mx-3">
                  <Link class="nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li class="nav-item mx-3">
                  <Link class="nav-link" to="/Product">
                    Product
                  </Link>
                </li>
                <li class="nav-item mx-3">
                  <Link class="nav-link" to="/Pricing">
                    Pricing
                  </Link>
                </li>

                <li class="nav-item mx-3">
                  <Link class="nav-link" to="/Support">
                    Support
                  </Link>
                </li>
                <li class="nav-item mx-3">
                  <Link class="nav-link" to="#">
                    <i class="fa-solid fa-bars"></i>
                  </Link>
                </li>
                
        
              </ul>
            </div>
          </div>
        </nav>
      
    );
}

export default Navbar