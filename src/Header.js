import React from "react";
import "./styles.css";
  
class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-nav">
          <img
            src="assets/logo_adoptme.png"
            onClick={() => this.props.goToAnimalList()}
            alt="adoptme"
            width="180"
            className="d-inline-block align-items-center"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <button
                  className="nav-link"
                  onClick={() => {
                    this.props.goToAnimalList();
                  }}
                >
                  Animales en adopción <span className="sr-only">(current)</span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    this.props.goToNewAnimal();
                  }}
                >
                  Publicar
                </button>
              </li>
            </ul>


            <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><img src="assets/huella-busqueda.png" width="30px"/></button>
        </form>



          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
