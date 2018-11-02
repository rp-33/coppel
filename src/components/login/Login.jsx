import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Row,Input,Button,Card} from 'react-materialize';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Menu from './Menu.jsx';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password :''
        }
    }

    handledLogin (event){
        event.preventDefault();
        axios.post('/api/login',this.state)
        .then(response=>{
            localStorage.setItem('user',JSON.stringify(response.data));
            this.props.history.push("/cms");
        })
        .catch(error=>{
            console.log(error)
            
        })
    }

    handleChange (event){
        const {name,value} = event.target;
        this.setState({
            [name] : value
        })
    }



    render(){
        return(
            <div>
            <Menu />
            <Row className="container">
                <form>
                    
                    <Card> 
                        <h4 style={{textAlign:'center'}}>Entra y crea tu blog</h4>
                       
                        <form  onSubmit={this.handledLogin.bind(this)}>
                            <Input name = "email" type="email" label="Email" s={12} required value={this.state.email} onChange={this.handleChange.bind(this)}/>
                            <Input name = "password" type="password" label="password" s={12}  required value={this.state.password} onChange={this.handleChange.bind(this)}/>
                            <Button waves='light' s={12} style={{width:'100%',marginBottom:'20px'}} type="submit">Iniciar sesión</Button>
                        </form>

                       
                    </Card>
                        
                        
                   
                </form>
            </Row>
           </div>
        )
    }
}
export default Login;