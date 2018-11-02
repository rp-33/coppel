import React,{Component} from 'react';
import {Row,Input,Button} from 'react-materialize';
import axios from 'axios';
import Tags from './Tags.jsx';
import Menu from './Menu.jsx';

class Cms extends Component{
    constructor(){
        super();
        this.state = {
            input : '',
            tag : [],
            post : '',
            title : ''
        }
        this.id = JSON.parse(localStorage.getItem('user')).id;
        console.log(this.id)
    };

    handleChange(event){

        const {name,value} = event.target;
        this.setState({
            [name] : value,
            tag : value.split(',')
        });
        
    }
    handlePost (event){
        const {name,value} = event.target;
        this.setState({
            [name] : value
        });
    }


    handleSubmit (event){
        axios.post('/api/savePost',{tag : this.state.tag,post : this.state.post, user : this.id, title : this.state.title})
        .then(response =>{
            alert('se ha publicado tu post');
            this.setState ({
                input : '',
                tag : [],
                post : '',
                title : ''
            })
        })
        .catch(err => {
            alert('error')
        })
    }

    render(){
        return(
            <div>
                <Menu />
                <Row className="container">
                    <p>Escriba sus tag separado por comas</p>
                    <Input name="input" type="text" s={12} placeholder="salud,vida,bienestar" value={this.state.input} onChange={this.handleChange.bind(this)}/>
                    <Tags tags = {this.state.tag}/>
                    <Input name="input" type="text" s={12} placeholder="titulo del blog" name="title" value={this.state.title} onChange={this.handlePost.bind(this)}/>
                    <Input type='textarea' s={12} placeholder="escriba su contenido de la publicacion" name="post" value={this.state.post} onChange={this.handlePost.bind(this)} />
                    <Button onClick={this.handleSubmit.bind(this)} >Guardar</Button>
                </Row>
            </div>
        )
    }
}

export default Cms;