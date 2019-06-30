import React from "react";
 
class AnimalDescription extends React.Component {
  render() {
    return (
      <div className="container-animal">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img
              src={this.props.animal.imagen}
              className="card-img-top"
              alt=""
            /> 
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h5 className="card-title">{this.props.animal.nombre}</h5>
            <p className="card-text">
              <b>Localidad:</b> {this.props.animal.localidad}
            </p>
            <p className="card-text">
              <b>Raza:</b> {this.props.animal.raza}
            </p>
            <p className="card-text">
              <b>Sexo:</b> {this.props.animal.sexo}
            </p>
            <p className="card-text">
              <b>Nacimiento:</b> {this.props.animal.nacimiento}
            </p>
            <p className="card-text">
              <b>Color de pelo:</b> {this.props.animal.colorPelo}
            </p>
            <p className="card-text">
              <b>Color de ojos:</b> {this.props.animal.colorOjos}
            </p>
            <p className="card-text">
            <b>Descripción:</b> {this.props.animal.descripcion}</p>
            
            <p className="card-text">
              <b>Nombre:</b> {this.props.animal.nombrePersona}
            </p>
            <p className="card-text">
              <b>Email:</b> {this.props.animal.emailPersona}
            </p>
            <p className="card-text">
              <b>Teléfono:</b> {this.props.animal.telefonoPersona}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimalDescription;
