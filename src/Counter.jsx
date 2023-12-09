import { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0 
        }
    }
    increment = () =>{
        this.setState({count : this.state.count + 1})
    }
    decrement = () =>{
        if(this.state.count > 0){
            this.setState({count : this.state.count - 1})
        }
    }
    reset = () =>{
            this.setState({count : this.state.count = 0})

    }
    render(){
        return(
            <>
                <center style={{marginTop : "50px"}}>
                    <h1>Counter App</h1>
                    <button style={{margin : "5px" , border:"0" , backgroundColor:"green" , color:"white" , fontSize:"20px" , padding:"10px" , marginRight:"20px"  , paddingLeft : "30px" , paddingRight : "30px"}} onClick={this.increment}>+</button>

                    <span style={{backgroundColor:"pink",fontSize:"16px",fontWeight:"bold",padding:"11px", paddingLeft : "25px" , paddingRight : "25px"}}>{this.state.count}</span>

                    <button style={{margin : "5px" , marginLeft:"20px" , border:"0" , backgroundColor:"green" , color:"white" , fontSize:"20px" , padding:"10px" , paddingLeft : "30px" , paddingRight : "30px"}} onClick={this.decrement}>-</button>
                    
                    <br></br>

                    <button style={{marginTop:"15px", border:"0" , backgroundColor:"green" , color:"white" , fontSize:"20px" , padding:"5px" , paddingLeft : "30px" , paddingRight : "30px"}} onClick={this.reset}>Reset</button>
                </center>
            </>
        )
    }
}
export default Counter;