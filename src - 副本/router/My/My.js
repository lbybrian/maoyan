import React,{Component} from "react";
//import Login from "./router/Login/Login"
export default class My extends Component {
	
//	componentWillMount(){
//		if(!localStorage.userName){
//			this.props.history.push("/login")
//		}
//	}
	
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

//import React from "react";
//export default class My extends React.Component{
//  constructor(){
//      super();
//      this.state = {
//          isChecked:true,
//      	sum:0,
//          carList:[]
//      }
//  }
//  render(){
////  	const {sum,carList,isChecked}= this.state;
//      return (
//          <div>
//				 if(!localStorage.adminId){
//		        	console.log(2222222)
//		         this.props.history.push("/Login")
//		        }else{
//		        	console.log(1111111111)
//		        }
//           </div>  
//      )
//	}
//}
