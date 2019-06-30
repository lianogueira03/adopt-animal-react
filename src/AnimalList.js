import React from "react";
import AnimalItem from "./AnimalItem";

class AnimalList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterBySex: "",
      filterByLocalidad: "",
      filterByAnimalEspecie: "",
    };
  }

  filterBySex = event => {
    this.setState({
      filterBySex: event.target.value
    });
  };

  filterByLocalidad = event => {
    this.setState({
      filterByLocalidad: event.target.value
    });
  };

  filterByAnimalEspecie = event => {
    this.setState({
      filterByAnimalEspecie: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="col-12">
          <div className="titulo-list">
            <h2>Encontrá a tu mejor amigo</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="form-row align-items-center">
              <div className="col-auto my-1">
                <label
                  className="mr-sm-2 sr-only coso"
                  for="inlineFormCustomSelect"
                >
                  Preference
                </label>
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  onChange={this.filterBySex}
                >
                  <option selected disabled>
                    Sexo
                  </option>
                  <option value="">Todos</option>
                  <option value="Macho">Macho</option>
                  <option value="Hembra">Hembra</option>
                </select>
              </div>

              <div className="col-auto my-1">
                <label
                  className="mr-sm-2 sr-only coso"
                  for="inlineFormCustomSelect"
                >
                  Preference
                </label>
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  onChange={this.filterByAnimalEspecie}
                >
                  <option selected disabled>
                    Especie
                  </option>
                  <option value="">Todos</option>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                </select>
              </div>

              <div className="col-auto my-1">
                <label
                  className="mr-sm-2 sr-only coso"
                  for="inlineFormCustomSelect"
                >
                  Preference
                </label>
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  onChange={this.filterByLocalidad}
                >
                  <option selected disabled>
                    Localidad
                  </option>
                  <option value="">Todos</option>
                  <option value="Canelones">Canelones</option>
                  <option value="Maldonado">Maldonado</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {this.props.animals
            .filter(todo => todo.sexo.includes(this.state.filterBySex))
            .filter(todo => todo.localidad.includes(this.state.filterByLocalidad))
            .filter(todo => todo.especie.includes(this.state.filterByAnimalEspecie))
            
            .map(item => (
              <AnimalItem
                animal={item}
                key={item.nombre}
                handleSection={this.props.handleSection}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default AnimalList;
