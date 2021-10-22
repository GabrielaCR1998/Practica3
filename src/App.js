import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header';
import Listado from './Components/Listado';
import Productos from './Components/Productos';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carrito:[],
      total:0,
      productosLista:[
        {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899, url:'https://m.media-amazon.com/images/I/61zKGsIdoPL._AC_SY355_.jpg'},
        {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999, url:'https://cdn-files.kimovil.com/phone_front/0002/92/thumb_191056_phone_front_big.jpeg'},
        {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850, url:'https://http2.mlstatic.com/D_NQ_NP_926246-MLA44282592285_122020-O.jpg'},
        {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949, url:'https://m.media-amazon.com/images/I/61ShPQu-u0L._AC_SX522_.jpg'},
        {codigo:5,descripcion:"Mochila Xiaomi", precio:699, url:'https://m.media-amazon.com/images/I/51wu2dpWapL._AC_SX569_.jpg'},
        {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999, url:'https://www.primusgaming.com/media/PKS-301_620.jpg'},
      ],
    };
  }  
  
  agregar=(producto)=>{

      let hay= this.state.carrito.find(e=>e.codigo===producto.codigo);
      let La_lista= this.state.carrito;
      let El_producto;
      if(hay!==undefined){       
        El_producto={
          cantidad:hay.cantidad+1,
          codigo:producto.codigo,
          descripcion:producto.descripcion,
          precio:producto.precio
        }        
        La_lista= this.state.carrito.filter(e=>e.codigo!==producto.codigo)
        console.log(La_lista)
      }
      else{
        El_producto={
          cantidad:1,
          codigo:producto.codigo,
          descripcion:producto.descripcion,
          precio:producto.precio
        }
      }     
      this.setState({
        carrito:[...La_lista,El_producto],
        total:this.state.total+producto.precio
      })   
      Swal.fire({
        title: 'Agregado',
        text: 'El producto se ha agregado a su carrito correctamente',
        imageUrl: 'https://i.pinimg.com/originals/93/7c/28/937c28e56fe63a5565f330e1ec2a675a.png',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Custom image',
      })    
  }
 
  eliminar=(e,tab)=>{     
    let ti;
      if(e.cantidad===1){
        ti = this.state.carrito.filter((e,t)=>t!==tab)
      }
      else{
        const El_producto={
          cantidad:e.cantidad-1,
          codigo:e.codigo,
          descripcion:e.descripcion,
          precio:e.precio
        }
        ti = this.state.carrito.filter((e,t)=>t!==tab)
        ti=[...ti,El_producto]
      }
     this.setState({
      carrito:ti,
      total:this.state.total-e.precio
    })
    Swal.fire({
      title: 'Eliminado',
      text: 'El producto se ha eliminado de su carrito correctamente',
      imageUrl: 'https://1.bp.blogspot.com/-gTK4O1JrhuE/YH7Sr9hhjAI/AAAAAAABLrQ/lPmu0BKxgH0zb3EJoJ_7w69jiHZ3SM9DQCLcBGAsYHQ/s960/Slide2%2B%25281%2529.JPG',
      imageWidth: 200,
      imageHeight: 150,
      imageAlt: 'Custom image',
    })
  }
  
  render() {
    var arreglo= this.state.carrito.sort((g,a) => g.codigo-a.codigo);
    return (
      <div className="App">
        <Header/>
        <div className="Tap">          
          <Productos
            ProductosLista={this.state.productosLista}
            agregar={this.agregar}
          />
          <Listado
            lista={arreglo}
            eliminar={this.eliminar}
            total={this.state.total}
          />          
        </div>
      </div>
    )
  }
}

export default App;