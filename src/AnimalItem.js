import React from "react";
 
class AnimalItem extends React.Component {
  render() {
    return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
          <img
            src={this.props.animal.imagen}
            className="card-img-top"
            alt="Perro  Labrador"
          /> 
          <div className="card-body">
            <h5 className="card-title">{this.props.animal.nombre}</h5>
            <p className="card-text">
              {this.props.animal.sexo} - {this.props.animal.edad}
            </p>
            <button
              className="btn btn-primary btn-adopt"
              onClick={() => this.props.handleSection(this.props.animal.id)}
            >
              Lo quiero adoptar
            </button>
            <p className="card-text">
              <small className="text-muted">Publicado hace 3 minutos</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimalItem;
