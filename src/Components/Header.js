import React, {Component} from 'react';
import './Header.css'
import logo from '../mercadolib.png'

class Header extends Component{
    render (){
        const {titulo, numero}=this.props;
        return(
            <div className="Header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Header;