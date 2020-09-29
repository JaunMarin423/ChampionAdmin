import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    nombre: "",
    email: "",
    esAdmin: "",
    genero: "",
    color: "",
    comentarios: ""
  };

  valueToState = ({ name, value, checked, type }) => {
    this.setState(() => {
      return { [name]: type === "checkbox" ? checked : value };
    });
  };

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <form>
          <label htmlFor="nombre">Nombre</label>
          <input
            name="nombre"
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={event => this.valueToState(event.target)}
          />
          <label htmlFor="email">Correo Electrónico</label>
          <input
            name="email"
            type="email"
            placeholder="ejemplo@gmail.com"
            onChange={event => this.valueToState(event.target)}
          />
          <label>
            ¿Es Administrador?
            <input
              type="checkbox"
              name="esAdmin"
              onChange={event => this.valueToState(event.target)}
            />
          </label>
          <legend>Genero</legend>
          <label>
            Masculino
            <input
              type="radio"
              name="genero"
              value={"m"}
              onChange={event => this.valueToState(event.target)}
            />
          </label>
          <label>
            Femenino
            <input
              type="radio"
              name="genero"
              value={"f"}
              onChange={event => this.valueToState(event.target)}
            />
          </label>
          <label htmlFor="color">¿Cual es tu color favorito?</label>
          <select
            name="color"
            onChange={event => this.valueToState(event.target)}
          >
            <option value={""}>- selecciona uno -</option>
            <option value={"rojo"}>rojo</option>
            <option value={"azul"}>azul</option>
            <option value={"verde"}>verde</option>
          </select>
          <label htmlFor="comentarios">Comentarios</label>
          <textarea
            name="comentarios"
            placeholder="Escribe tus sugerencias"
            onChange={event => this.valueToState(event.target)}
          />
        </form>
      </div>
    );
  }
}

export default App;

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <form>
          <label htmlFor={"nombre"}>Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="nombre"
            onChange={e => this.valueToState(e.target)}
          />
          <br />
          <label htmlFor={"email"}>Correo Electrónico</label>
          <input
            type="email"
            name="email"
            placeholder="email@ejemplo.com"
            onChange={e => this.valueToState(e.target)}
          />
          <br />
          <label htmlFor={"mensaje"}>Comentarios</label>
          <textarea
            name="mensaje"
            placeholder="sugerencias aquí"
            onChange={e => this.valueToState(e.target)}
          />
          <br />
          <label htmlFor="activo">¿Activo?</label>
          <input
            type="checkbox"
            name="activo"
            onChange={e => this.valueToState(e.target, "checkbox")}
          />
          <br />
          <label>
            Masculino
            <input
              type="radio"
              name="genero"
              value={"m"}
              onChange={e => this.valueToState(e.target)}
            />
          </label>
          <label>
            Femenino
            <input
              type="radio"
              name="genero"
              value={"f"}
              onChange={e => this.valueToState(e.target)}
            />
          </label>
          <br />
          <label htmlFor="color">Seleccione un color</label>
          <select name="color" onChange={e => this.valueToState(e.target)}>
            <option value="">- -</option>
            <option value="rojo">Rojo</option>
            <option value="azul">Azul</option>
            <option value="verde">Verde</option>
          </select>
        </form>
      </div>
    );
  }
}

export default App;