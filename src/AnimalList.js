import React from "react";
import AnimalItem from "./AnimalItem";

class AnimalList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-12">
          <div className="titulo-list">
            <h2>Encontrá a tu mejor amigo</h2>
          </div>
        </div>
        <div className="row">

        <form>
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
                >


 
                 {/*  <SelectBox
                  items={[
                    { value:  'Macho', id:1},
                    { value:  'Hembra', id:2},
                  ]} */} 



                  <option selected>Sexo</option>
                  <option value="1">Macho</option>
                  <option value="1">Hembra</option>
                </select>
              </div>

              <div className="col-auto my-1">
                <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">
                  Preference
                </label>
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected>Edad</option>
                  <option value="1">0-11 meses</option>
                  <option value="1">1 año</option>
                  <option value="1">2 años</option>
                  <option value="1">3 años</option>
                  <option value="1">4 años</option>
                  <option value="1">5 años</option>
                  <option value="1">6 años</option>
                  <option value="1">7 años</option>
                  <option value="1">8 años</option>
                  <option value="1">9 años</option>
                  <option value="1">10 años o más</option>
                </select>
              </div>

              <div className="col-auto my-1">
                <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">
                  Preference
                </label>
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected>Tamaño</option>
                  <option value="1">Chico</option>
                  <option value="1">Mediano</option>
                  <option value="1">Grande</option>
                </select>
              </div>

              <div className="col-auto my-1">
                <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">
                  Preference
                </label>
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected>Localidad</option>
                  <option value="1">Montevideo</option>
                  <option value="1">Canelones</option>
                  <option value="1">San José</option>
                  <option value="1">Maldonado</option>
                  <option value="1">Flores</option>
                  <option value="1">Florida</option>
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
                >
                  <option selected>Ordenar por...</option>
                  <option value="1">Publicaciones recientes</option>
                  <option value="1">Publicaciones antiguas</option>
                </select>
              </div>

              <div className="col-auto my-1">
                <button type="submit" className="btn btn-primary">
                  Buscar
                </button>
              </div>
            </div>
          </form>
          

          {this.props.animals.map(item => (
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
