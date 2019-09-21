import React,{Component} from "react";
export default class LoginPhone extends Component {
    render() {
        return (
        	
            <div>
              
				<input type="text" placeholder="请输入手机号" style={{width:"100%"}} /> <br/>
				<input type="text" placeholder="请输入您的密码" style={{width:"100%"}} /> <br/>
				<input type="button" value="登录" style={{width:'100%',background:'gery',color:"white"}} /><br/>
				
            </div>
        )
    }
}

