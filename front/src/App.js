import React, { Component } from "react";
import "./App.css"

class App extends Component  {
 constructor(props){
    super(props);
    this.state = {
      Estrato: "",
      top: [],
      bottom: [],
      loading:false
    }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEstratoChange = this.handleEstratoChange.bind(this);
  }

  handleEstratoChange(event) {
    let valor=event.target.value;
    this.setState({ Estrato: valor }, ()=>{
      console.log("Se ha seleccionado el estrato: "+ valor)
    }

    );
  }




  handleSubmit(event) {
    event.preventDefault();
    this.setState({loading:true})
     fetch("https://www.datos.gov.co/resource/tkn6-e4ic.json")
      .then(response => response.json())
      .then(response => {
          let count = Object.keys(response).length;
          let datos=response;
          console.log(datos);
          console.log ("son: "+ count+" personas iniciales")
          let filtrados=[];

          for(let pos in datos){
              datos[pos]["pos"] = pos;
              if(datos[pos].fami_estratovivienda==="Estrato 5")
              {
                filtrados.push(datos[pos]);
              }

          }
          console.log(filtrados)
          console.log ("son: "+ filtrados.length+" personas ahora")
          let ordenados=filtrados.sort((a,b) => (a.punt_global > b.punt_global) ? 1 : ((b.punt_global> a.punt_global) ? -1 : 0));
          console.log(ordenados)
          console.log(ordenados.punt_global)
          //punt_global
          let mejores=ordenados.slice(0,9);
          this.setState({ top: mejores });
          console.log(this.top)

      })
      .catch(error=>console.log("No sirve el fetch", error))
      this.setState.loading=false

  }


render(){
  return (
    <div>
      <h1>React funcionando front+back</h1>
      <div className="row">
        <div className="col-md-10">
          <input id="input" type="text" className="form-control"
           onChange={this.handleEstratoChange}

          />
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-secondary"
          onClick={this.handleSubmit}
          >Buscar</button>
        </div>
      </div>
      <div className="row">
      <div className="col-md-5">
      </div>
      <div className="col-md-2">
       {this.state.loading || (this.state.bottom==null)? <div className="loader"></div>:<div>Encontrado</div>}
      </div>
      </div>
    </div>
  )
}
}



export default App;
