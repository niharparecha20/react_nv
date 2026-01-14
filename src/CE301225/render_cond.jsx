import React,{Component} from "react";

class RenderCond extends Component {
    constructor(props){
        super(props);
        this.state = {
            textcolor:"green",
            backcolor:"Blue",
        };
    }
        toggle = (e) => {
            this.setState({ isOn: !this.state.isOn });
        }
        render() {
            return (
                <>
                <br>
                <button onClick={() => this.setState({ textcolor: "green" })}>Green</button>
                <button onClick={() => this.setState({ textcolor: "red" })}>Red</button>
                <button onClick={() => this.setState({ textcolor: "blue" })}>Blue</button>
                <button onClick={() => this.setState({ textcolor: "yellow" })}>Yellow</button>
                </br>  
            
                <p>Status : {this.state.isOn? "Active" : "InActive"}</p>  
                </>
            );
    }
}

export default RenderCond;