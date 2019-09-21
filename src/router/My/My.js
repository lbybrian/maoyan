import React,{Component} from "react";
//import Login from "./router/Login/Login"
export default class My extends Component {
	

	
    componentDidMount(){
    	if(!localStorage.adminId){
         this.props.history.push("/Login")
        }
    }
    render() {
        return (
            <div>
				My
            </div>
        )
    }
}

