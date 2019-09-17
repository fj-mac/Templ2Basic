import React, { Component } from "react";
import "./buscar.css"

class buscar extends Component  {
 constructor(props){
    super(props);
    this.state = {
      Estrato: "",
      top: [],
      bottom: [],
      loading:false,
      encontrados: false
    }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEstratoChange = this.handleEstratoChange.bind(this);
  }

  handleEstratoChange(event) {
    event.preventDefault();
    let valor=event.target.value;
    this.setState({ Estrato: valor }, ()=>{
      console.log("Se ha seleccionado el estrato: "+ this.state.Estrato)
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
          let seleccionado="Estrato "+this.state.Estrato;
          for(let pos in datos){
              datos[pos]["pos"] = pos;
              if(datos[pos].fami_estratovivienda===seleccionado)
              {
                filtrados.push(datos[pos]);
              }

          };
          console.log(filtrados)
          console.log ("son: "+ filtrados.length+" personas ahora")
          let ordenados=filtrados.sort((a,b) => (a.punt_global > b.punt_global) ? 1 : ((b.punt_global> a.punt_global) ? -1 : 0));
          console.log(ordenados)
          let ordenados2=ordenados
          //punt_global
          let peores=ordenados.slice(0,10);
          this.setState({ bottom: peores });
          console.log(this.state.bottom)


          let mejores=ordenados2.slice(ordenados2.length-10,ordenados2.length);
          mejores=mejores.sort((a,b) => (a.punt_global < b.punt_global) ? 1 : ((b.punt_global< a.punt_global) ? -1 : 0));
          this.setState({ top: mejores });
          console.log(this.state.top)
          this.setState({loading:false})
          this.setState({encontrados:true})
      })
      .catch(error=>console.log("No sirve el fetch", error))


  }

  losMejores(){
    return this.state.top.map(t=>(
        <tr>
            <td>{t.fami_personashogar}</td>
            <td>{t.estu_depto_reside}</td>
            <td>{t.punt_global}</td>
          </tr>
      ));
  }

   losPeores(){
    return this.state.bottom.map(t=>(

          <tr>
            <td>{t.fami_personashogar}</td>
            <td>{t.estu_depto_reside}</td>
            <td>{t.punt_global}</td>
          </tr>

      ));
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
       {this.state.loading || (this.state.bottom==null)? <div className="loader"></div>:<div></div>}
      </div>
      </div>
      <div className="row">
        <div className="col-md-6">
         {this.state.encontrados?
            <div>
            <h1>Los Mejores 10</h1>
            <table class="table">
              <thead>
                <tr>
                  <th ># de personas en el hogar</th>
                  <th >Departamento</th>
                  <th >Puntaje Global</th>
                </tr>
              </thead>
              <tbody>
                {this.losMejores()}
              </tbody>
            </table>
            </div>
          :<div></div>}
        </div>
        <div className="col-md-6">
          {this.state.encontrados?
            <div>
            <h1>Los Peores 10</h1>
            <table class="table">
              <thead>
                <tr>
                  <th ># de personas en el hogar</th>
                  <th >Departamento</th>
                  <th >Puntaje Global</th>
                </tr>
              </thead>
              <tbody>
                {this.losPeores()}
              </tbody>
            </table>
            </div>
          :<div></div>}
        </div>
      </div>
    </div>
  )
}
}

export default buscar;
