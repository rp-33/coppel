import React,{Component} from 'react';
import {Row,Input} from 'react-materialize';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import Avatar from './Avatar.jsx';
import Status from './Status.jsx';


class Form extends Component{
    constructor(){
        super();
        this.state = {
            user : {
                name : '',
                image : '',
            },
            value : ''

        }
    };

    handlechange (event){
        this.setState({
            "value" : event.target.value
        })
   
    }

    handleSubmit (event){
        
        if(this.state.value !== '' && event.keyCode===13){
            this.props.AddComment(this.state);
            this.setState({
                value : ''
            })
        }
            
    }

    googleResponse ({profileObj}) {
    
        this.setState({
            user:{
            name : profileObj.name,
            image : profileObj.imageUrl
            }
        })
       
    };



    render(){
        return(

                <Row>
                    {this.state.user.name ? <Avatar name = {this.state.user.name} image = {this.state.user.image} fecha = ''/> : <Status />}
                
                    <Input
                    s={12}
                    type='textarea' 
                    style={{width:'100% !important'}}
                    placeholder="Escribe tu opinion"
                    value={this.state.value}
                    name="value"
                    onChange = {this.handlechange.bind(this)}
                    onKeyUp = {this.handleSubmit.bind(this)}
                    disabled = {!this.state.user.name}
                    />
                    {!this.state.user.name ? 
                        <GoogleLogin
                        clientId={'366681083026-p5aadsp9fktimhi1flh3pv4tt1lk0ocl.apps.googleusercontent.com'}
                        buttonText="Entrar con gmail"
                        onSuccess={this.googleResponse.bind(this)}
                        onFailure={this.onFailure}
                    />
                        : null}
                    

                </Row>

        )
    }
}

export default Form;