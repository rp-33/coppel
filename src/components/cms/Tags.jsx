import React,{Component} from 'react';
import {Chip} from 'react-materialize';

class Tags extends Component{
    constructor(props){
        super(props);
        
    }


    render(){
        return(
            <div>
               {
    
                    this.props.tags.map((item,i)=>                     
                        <Chip key={i}>
                            {item}
                        </Chip>            
                    )

                }
            </div>
        )
    }
}

export default Tags;
