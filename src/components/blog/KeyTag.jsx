import React,{Component} from 'react';
import {Row,Col,Chip} from 'react-materialize';

class Keytag extends Component{
    constructor(props){
        super(props);
        this.state = {
            chips : this.props.tags
        }
        
    }

    


    render(){
        return(
            <div>
                <Row>
                    <Col s={12}>
                    
                        {   this.props.tags ? 
                            this.props.tags.map((item,i)=>
                        
                            <Chip key={i}>
                               {item}
                            </Chip>
                           
                       
                            )
                            : <p>cargando</p>
                        }
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Keytag;