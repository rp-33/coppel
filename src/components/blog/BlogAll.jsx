import React,{Component} from 'react';
import {Row,Col,Card} from 'react-materialize';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Keytag from './KeyTag.jsx';
import Menu from './/Menu.jsx';

class BlogAll extends Component{
    constructor(){
        super();
        this.state = {
            blogs : []
        }
    }

    componentDidMount(){
        
        axios.get('/api/allBlog')
        .then(response =>{
            this.setState({
                blogs : response.data.blog
            })

        })
        .catch(err=>{
            console.log(error)
        })

    }

    render(){
        return(
            <div>
                <Menu />
                <Row>
                    {
                        this.state.blogs.map((item,i)=>
                             <Col key={i} s={12} m={4} l={3} >
                                <Card  textClassName='white-text' title={item.title} actions={[<Link to={`/blog/${item._id}`}>Ver blog</Link>]}>
                                    <Keytag
                                    tags = {item.tag}
                                    />
                                </Card>
                            </Col>
                        )
                    }
                   
                </Row>
            </div>
        )
    }
}

export default BlogAll;