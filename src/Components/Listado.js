import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = (props) => {
    return ( 
        <div className="Listado">
          <h4>Carrito</h4>
        {
            props.lista.length===0
            ? <p>Sin Productos</p>
            : 
             <div>
               <div className="Listas">
                  <p>Total:${(props.total).toFixed(2).replace(/\d(?=(\d{3})+.)/g, '$&,')} </p>
               </div>
             <Table striped bordered hover style={{verticalAlign: 'middle'}}>
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Importe</th>
                <th></th>
              </tr>
            </thead>
              <tbody >
            {
              props.lista.map((p,tabs)=>
                <tr key={tabs}>
                    <td>{p.cantidad}</td>
                    <td>{p.codigo}</td>
                    <td>{p.descripcion}</td>
                    <td>${(p.precio).toFixed(2).replace(/\d(?=(\d{3})+.)/g, '$&,')}</td>
                    <td>${(p.cantidad*p.precio).toFixed(2).replace(/\d(?=(\d{3})+.)/g, '$&,')}</td>
                    <td><Button onClick={()=>props.eliminar(p,tabs)}variant="danger">Eliminar</Button></td>
                </tr>
              )
            }
              </tbody>
            </Table>
            </div> 
          }
          </div>
     );
} 
export default Listado;