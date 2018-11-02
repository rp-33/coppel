import React,{Component} from 'react';
import {Navbar} from 'react-materialize';
import { Link} from 'react-router-dom';

class Menu extends Component{
    render(){
        return(
            <Navbar brand='coppel' right className=" amber accent-4">
                <Link to="/login">crear blog</Link>
            </Navbar>
        )
    }
}

export default Menu;