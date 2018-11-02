import React,{Component} from 'react';
import {Row,Col,Card} from 'react-materialize';

class Publication extends Component{

    constructor (props){
        super(props);

    }

    render(){
        return(
            <div>
                {this.props.comments.map((item,i)=>
                         <Card>
                         <Row>
                         <Col s={2} m={1}>
                         <img style={{width:'100%',height:'100%'}} className="circle" src={item.avatar} alt="avatar"/>
                     </Col>
                     <Col s={10} m={11}>
                         <span>{item.name}</span>
                         <br></br>
                         <Row>
                            <Col s={12}>
                                {item.text}
                            </Col>
                         </Row>
                     </Col>
                         </Row>
     
                     </Card>
                )}
               
            </div>
        )
    }
}

export default Publication;