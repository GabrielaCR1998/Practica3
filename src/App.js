import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Listado from './Components/Listado';
import Productos from './Components/Productos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carrito:[],
      total:0,
      productosLista:[
        {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899, url:'https://ruknplus-sa.com/image/cache/catalog/%D9%90%D9%90%D9%90%D9%90A%20samsung%20a01/100130534_100_01-224x224.jpg'},
        {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999, url:'https://ruknplus-sa.com/image/cache/catalog/%D9%90%D9%90%D9%90%D9%90A%20samsung%20a01/100130534_100_01-224x224.jpg'},
        {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850, url:'https://ruknplus-sa.com/image/cache/catalog/%D9%90%D9%90%D9%90%D9%90A%20samsung%20a01/100130534_100_01-224x224.jpg'},
        {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949, url:'https://ruknplus-sa.com/image/cache/catalog/%D9%90%D9%90%D9%90%D9%90A%20samsung%20a01/100130534_100_01-224x224.jpg'},
        {codigo:5,descripcion:"Mochila Xiaomi", precio:699, url:'https://ruknplus-sa.com/image/cache/catalog/%D9%90%D9%90%D9%90%D9%90A%20samsung%20a01/100130534_100_01-224x224.jpg'},
        {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999, url:'https://ruknplus-sa.com/image/cache/catalog/%D9%90%D9%90%D9%90%D9%90A%20samsung%20a01/100130534_100_01-224x224.jpg'},
      ],
    };
  }
  
  
  agregar=(producto)=>{

      let existe= this.state.carrito.find(e=>e.codigo===producto.codigo);
      let temp_lista= this.state.carrito;
      let producto_temp;

      if(existe!==undefined){
        
        producto_temp={
          cantidad:existe.cantidad+1,
          codigo:producto.codigo,
          descripcion:producto.descripcion,
          precio:producto.precio
        }
        
        temp_lista= this.state.carrito.filter(e=>e.codigo!==producto.codigo)
        console.log(temp_lista)
      }
      else{

        producto_temp={
          cantidad:1,
          codigo:producto.codigo,
          descripcion:producto.descripcion,
          precio:producto.precio
        }
      }
     
      this.setState({
        carrito:[...temp_lista,producto_temp],
        total:this.state.total+producto.precio
      })
   
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500
      })
      
  }
 
  eliminar=(p,index)=>{
     
    let temporal;

      if(p.cantidad===1){
        temporal = this.state.carrito.filter((p,i)=>i!==index)
      }
      else{
        const producto_temp={
          cantidad:p.cantidad-1,
          codigo:p.codigo,
          descripcion:p.descripcion,
          precio:p.precio
        }

        temporal = this.state.carrito.filter((p,i)=>i!==index)
        temporal=[...temporal,producto_temp]

      }

     this.setState({
      carrito:temporal,
      total:this.state.total-p.precio
    })

    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Producto eliminado',
      showConfirmButton: false,
      timer: 1500
    })
  }
  
  render() {
    var arregloSort= this.state.carrito.sort((a,b) => a.codigo-b.codigo);
    return (
      <div className="App">
        <Header/>
        <div className="Containers">
          
          <Productos
            ProductosLista={this.state.productosLista}
            agregar={this.agregar}

          />

          <Listado
            lista={arregloSort}
            eliminar={this.eliminar}
            total={this.state.total}
            eliminarCarrito={this.eliminarCarrito}
          />
          
        </div>
      </div>
    )
  }
}

export default App;