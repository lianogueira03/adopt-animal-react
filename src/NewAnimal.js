import React from "react";
  
class NewAnimal extends React.Component {
  constructor(props) {
    super(props);

    this.animalName = React.createRef();
    this.animalSex = React.createRef();
    this.animalAge = React.createRef();
    this.animalImage = React.createRef();
    this.localidad = React.createRef();
    this.animalEspecie = React.createRef();
  }

  handleSubmit = event => {

    event.preventDefault();


    const animalValues = {

      imagen: this.animalImage.current.value,
      nombre: this.animalName.current.value,
      sexo: this.animalSex.current.value,
      edad: this.animalAge.current.value,
      localidad: this.localidad.current.value,
      especie: this.animalEspecie.current.value,

    };


    this.props.addNewAnimal(animalValues);


    this.animalImage.current.value = "";
    this.animalName.current.value = "";
    this.animalSex.current.value = "";
    this.animalAge.current.value = "";
    this.localidad.current.value = "";
    this.animalEspecie.current.value = "";

    this.props.goToAnimalList();
  };

  render() {
    return (
      <div className="formulario">
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <h3>Ingesar datos del animal:</h3>


            <div className="form-group">
              <label htmlFor="AnimalName">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="AnimalName"
                placeholder="Nombre del animal"
                ref={this.animalName}
              />
            </div>

            <div className="form-group">
              <label for="ImageAnimal">Seleccione una imagen: </label>
              <input
                type="file"
                id="ImageAnimal"
                name="ImageAnimal"
                accept="image/png, image/jpeg"
                ref={this.animalImage}
              />
            </div>

            <label for="BirthdateAnimal">Fecha de Nacimiento</label>
            <input
            type="date"
              className="form-control form-control-lg"
              id="AnimalBirth"
              placeholder="Fecha de nacimiento"
              ref={this.animalBirth}
            />


            <div className="form-group">
              <label htmlFor="Sexo">Sexo</label>
              <input
                type="text"
                className="form-control"
                id="Sexo"
                placeholder="Sexo del animal"
                ref={this.animalSex}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Especie">Especie</label>
              <input
                type="text"
                className="form-control"
                id="Especie"
                placeholder="Perro o Gato"
                ref={this.animalEspecie}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Edad">Edad</label>
              <input
                type="text"
                className="form-control"
                id="Edad"
                placeholder="Edad del animal"
                ref={this.animalAge}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Edad">Localidad</label>
              <input
                type="text"
                className="form-control"
                id="Localidad"
                placeholder="Departamento"
                ref={this.localidad}
              />
            </div>


            <div className="form-group">
              <label htmlFor="Edad">Raza</label>
              <select class="form-control" id="RaceAnimal">
              <option>Callejero</option>
              <option>Labrador</option>
              <option>Golden</option>
              <option>Cimarrón</option>
              <option>Grandanés</option>
              ref={this.RaceAnimal}
            </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="AnimalName">Color de pelo</label>
              <input
                type="text"
                className="form-control"
                id="HairColorAnimal"
                placeholder="Color de pelo del animal"
                ref={this.animalHairColor}
              />
            </div>

            <div className="form-group">
              <label htmlFor="AnimalName">Color de ojos</label>
              <input
                type="text"
                className="form-control"
                id="EyeColorAnimal"
                placeholder="Color de ojos del animal"
                ref={this.animalEyeColor}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="AnimalName">Description</label>
              <textarea 
              class="form-control" 
              id="DescriptionAnimal">
              </textarea>
            </div>

            <h3>Ingesar datos personales:</h3>
            <div className="form-group">
              <label htmlFor="PersonName">Nombre persona:</label>
              <input
                type="text"
                className="form-control"
                id="PersonName"
                placeholder="Nombre de la persona"
                ref={this.personName}
              />
            </div>


            <div className="form-row">
            <div class="form-group col-md-6">
              <label htmlFor="PersonName">Email:</label>
              <input
                type="email"
                className="form-control"
                id="PersonEmail"
                placeholder="Email"
                ref={this.personEmail}
              />
            </div>


            <div class="form-group col-md-6">
              <label htmlFor="PersonTelephone">Teléfono:</label>
              <input
                type="number"
                className="form-control"
                id="PersonTelephone"
                placeholder="Teléfono"
                ref={this.personTelephone}
              />
            </div>
            </div>      




            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewAnimal;
