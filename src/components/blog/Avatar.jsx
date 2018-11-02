import React,{Component} from 'react';
import {Row,Col} from 'react-materialize'
import Moment from 'react-moment';

class Avatar extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <Row>
                <Col s={2} m={1}>
                    <img style={{width:'100%',height:'100%'}} className="circle" src={this.props.image} alt="avatar"/>
                </Col>
                <Col s={10} m={11}>
                    <span>{this.props.name}</span>
                    <br></br>
                    {
                        this.props.date ?  
                    <Moment format="DD/MM/YYYY" unix>
                        {this.props.date}
                    </Moment>
                    : null
                    }
                   
                    
                </Col>
            </Row>
        )
    }
}
export default Avatar;