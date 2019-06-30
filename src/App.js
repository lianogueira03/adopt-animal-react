import React from "react";
import "./styles.css";
import Header from "./Header";
import AnimalList from "./AnimalList";
import Footer from "./Footer";
import NewAnimal from "./NewAnimal";
import AnimalDescription from "./AnimalDescription";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 1,
      selectedAnimal: 0,
      AnimalsList: [
        {
          id: 1,
          imagen: "assets/tango.JPG",
          nombre: "Tango",
          sexo: "Macho",
          edad: "7 años",
          nacimiento: "25/03/2012",
          localidad: "Canelones",
          raza: "Labrador",
          colorPelo: "Amarillo",
          colorOjos: "Marrones",
          descripcion:
            "Es un perro adulto de aproximadamente 7 años, muy tranquilo y mimoso. Busca una familia que lo quiera y le de todo el cariño que necesita",
          nombrePersona: "Mónica",
          emailPersona: "mcalderara@gmail.com",
          telefonoPersona: "094363784"
        },
        {
          id: 2,
          imagen: "assets/manchita.JPG",
          nombre: "Manchita",
          sexo: "Hembra",
          edad: "2 años",
          nacimiento: "17/11/2016",
          localidad: "Montevideo",
          raza: "Callejero",
          colorPelo: "Gris con machas negras",
          colorOjos: "Marrones",
          descripcion: "Perra jóven, juguetona y amigable con otros perros",
          nombrePersona: "Susana",
          emailPersona: "susan@gmail.com",
          telefonoPersona: "094365784"
        },
        {
          id: 3,
          imagen: "assets/thor.jpg",
          nombre: "Thor",
          sexo: "Macho",
          edad: "11 años",
          nacimiento: "25/06/2008",
          localidad: "Canelones",
          raza: "Golden",
          colorPelo: "Amarillo",
          colorOjos: "Marrones",
          descripcion:
            "Perro adulto de 11 años, cariñoso que necesita una familia que lo cuide.",
          nombrePersona: "Mónica",
          emailPersona: "mcalderara@gmail.com",
          telefonoPersona: "094363784"
        },
        {
          id: 4,
          imagen: "assets/raul.jpg",
          nombre: "Raúl",
          sexo: "Macho",
          edad: "9 meses",
          nacimiento: "25/09/2018",
          localidad: "Maldonado",
          raza: "Callejero",
          colorPelo: "Naranja con manchas blancas",
          colorOjos: "Amarillos",
          descripcion: "Gato jóven y juguetón",
          nombrePersona: "Carlos",
          emailPersona: "carlos15@gmail.com",
          telefonoPersona: "098659435"
        },
        {
          id: 5,
          imagen: "assets/garfield.jpg",
          nombre: "Garfield",
          sexo: "Macho",
          edad: "2 años",
          nacimiento: "25/02/2016",
          localidad: "Montevideo",
          raza: "Persa",
          colorPelo: "Naranja",
          colorOjos: "Amarillos",
          descripcion: "Gato macho de 2 años",
          nombrePersona: "Lorena",
          emailPersona: "lore63@gmail.com",
          telefonoPersona: "094697582"
        },
        {
          id: 6,
          imagen: "assets/suertudo.JPG",
          nombre: "Suertudo",
          sexo: "Macho",
          edad: "9 años",
          nacimiento: "25/05/2010",
          localidad: "Lavalleja",
          raza: "Callejero",
          colorPelo: "Marrón",
          colorOjos: "Marrones",
          descripcion: "Perro adulto, ciego y sordo. Es muy cariñoso",
          nombrePersona: "Andrés",
          emailPersona: "andres@gmail.com",
          telefonoPersona: "094325625"
        },
        {
          id: 7,
          imagen: "assets/Sarah.jpg",
          nombre: "Sarah",
          sexo: "Hembra",
          edad: "3 años",
          nacimiento: "25/05/2016",
          localidad: "Canelones",
          raza: "Callejera",
          colorPelo: "Gris y negro",
          colorOjos: "Verdes",
          descripcion: "Gata jóven de 3 años, castrada",
          nombrePersona: "Marcelo",
          emailPersona: "marcelo@gmail.com",
          telefonoPersona: "094363364"
        },
        {
          id: 8,
          imagen: "assets/perroBlanco_Juan.jpg",
          nombre: "Juan",
          sexo: "Macho",
          edad: "5 años",
          nacimiento: "13/02/2015",
          localidad: "Artigas",
          raza: "Callejero",
          colorPelo: "Blanco",
          colorOjos: "Verdes",
          descripcion: "Perro jóven, tamaño mediano, muy juguetón",
          nombrePersona: "Lucas",
          emailPersona: "lucas@gmail.com",
          telefonoPersona: "094364784"
        },
        {
          id: 9,
          imagen: "assets/negra.JPG",
          nombre: "Negra",
          sexo: "Hembra",
          edad: "6 años",
          nacimiento: "29/04/2013",
          localidad: "Canelones",
          raza: "Callejera",
          colorPelo: "Negro",
          colorOjos: "Negros",
          descripcion:
            "Perra jóven con mucha energía, se lleva bien con otros perros",
          nombrePersona: "María",
          emailPersona: "maria@gmail.com",
          telefonoPersona: "094253784"
        },
        {
          id: 10,
          imagen: "assets/gatitos.JPG",
          nombre: "Gatitos",
          sexo: "Hembra",
          edad: "5 meses",
          nacimiento: "25/01/2019",
          localidad: "Canelones",
          raza: "Callejero",
          colorPelo: "Negro, naranja y amarillo",
          colorOjos: "Celestes",
          descripcion: "Gatas cachorras, prontas para dar en adopción",
          nombrePersona: "Ruben",
          emailPersona: "ruben@gmail.com",
          telefonoPersona: "094363775"
        },
        {
          id: 11,
          imagen: "assets/orejas.jpg",
          nombre: "Orejas",
          sexo: "Macho",
          edad: "5 meses",
          nacimiento: "20/01/2019",
          localidad: "San José",
          raza: "Callejero",
          colorPelo: "Negro con manchas blancas",
          colorOjos: "Negros",
          descripcion:
            "Perro cachorro, recuperado del maltrato. Necesita una familia que lo haga feliz",
          nombrePersona: "Joselin",
          emailPersona: "jose@gmail.com",
          telefonoPersona: "094367784"
        },
        {
          id: 12,
          imagen: "assets/pepe.jpg",
          nombre: "Pepe",
          sexo: "Macho",
          edad: "3 meses",
          nacimiento: "25/03/2019",
          localidad: "Maldonado",
          raza: "Callejero",
          colorPelo: "Marrón y amarillo",
          colorOjos: "Marrones",
          descripcion: "Perro cachorro, muy mimoso",
          nombrePersona: "Juan",
          emailPersona: "juan@gmail.com",
          telefonoPersona: "094345784"
        }
      ]
    };
  }

  handleSection = id => {
    this.setState({
      section: 2,
      selectedAnimal: this.state.AnimalsList.find(function(animal) {
        return animal.id === id;
      })
    });
  };

  // goToAnimalList cambia a la seccion de la  lista de animales
  goToAnimalList = () => {
    this.setState({
      section: 1
    });
  };

  // goToNewAnimal cambia a la seccion que crea el nuevo animal
  goToNewAnimal = () => {
    this.setState({
      section: 3
    });
  };

  // Esta funcion recibe el animal que le envie desde el formulario
  addNewAnimal = animal => {
    this.setState({
      AnimalsList: this.state.AnimalsList.concat(animal)
    });
  };

  currentSection() {
    if (this.state.section === 1) {
      return (
        <AnimalList
          animals={this.state.AnimalsList}
          handleSection={this.handleSection}
        />
      );
    }

    if (this.state.section === 2) {
      return <AnimalDescription animal={this.state.selectedAnimal} />;
    }

    if (this.state.section === 3) {
      return (
        <NewAnimal
          addNewAnimal={this.addNewAnimal}
          goToAnimalList={this.goToAnimalList}
        />
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header
          goToAnimalList={this.goToAnimalList}
          goToNewAnimal={this.goToNewAnimal}
        />

        {this.currentSection()}

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
