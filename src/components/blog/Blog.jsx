import React,{Component} from 'react';
import axios from 'axios';
import Menu from './Menu.jsx';
import {Row,Col} from 'react-materialize';
import Keytag from './KeyTag.jsx';
import Avatar from './Avatar.jsx';
import Form from './Form.jsx';
import Publication from './Publication.jsx'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            article : '',
            title : '',
            name : '',
            date : '',
            tag : [],
            comments : []

        }
        const { match } = this.props;
        this.params = match.params.id;
        

    }
    
    componentDidMount(){
        axios.get(`/api/findBlog/${this.params}`)
        .then(response =>{
            const {user,title,article,tag,create_at,comments} = response.data.blog;
           
            this.setState({
                title ,
                article,
                tag ,
                create_at,
                name : user.name,
                comments 
                
            });
            
            
        })
        .catch(error=>{
            console.log(error)
        })
    }


    handleComment (props){

        
        axios.put(`/api/comment/${this.params}`,{user :props.user,comment:props.value})
        .then(response =>{
            this.setState({
                comments : this.state.comments.concat({
                    name : props.user.name,
                    avatar : props.user.image,
                    text :props.value
                })
            })
        })
        .catch(error=>{

            console.log(error)
        })
        
    }

    render(){ 

        return(
           
            <div> 
                <Menu />
                <Row className="container" style={{marginTop:'20px'}}>
               
               <Col s={12} className='grid-example'>
                  
                   <Keytag
                   tags = {this.state.tag}
                   />
                   <Avatar
                   image = "http://www.cubaenmiami.com/wp-content/uploads/2018/02/Will-Smith.jpg"
                   name = {this.state.name}
                   date = {this.state.create_at}
                   />
                   <h1 style={{textAlign:'center'}}>{this.state.title}</h1>
                   <p>{this.state.article}</p>
                   
                   <Form 
                   AddComment = {this.handleComment.bind(this)}

                   />
                   <Publication 
                   comments = {this.state.comments}
                   />
               </Col>

           </Row>
            </div>
        )
    }
   
}


export default App;