import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    NavLink,
} from "react-router-dom"
import LoginPhone from './LoginPhone';
//import Login from './Login';
export default class Login extends React.Component{
	render(){
		return (
			<Router>
						
                <div> 
					 <nav className="login">
	                        <NavLink  exact to={"/"}><p>美团账号登录</p></NavLink>
	                        <NavLink  to={"/LoginPhone"}><p>手机验证码登录</p></NavLink>
	                </nav>
			  		<Route path={"/LoginPhone"} component={LoginPhone}></Route>
			  	</div>
			  	
				<div style={{margin:"10px",textalign:'center'}}>
					<input type="text" placeholder="账户名/手机号/Email" /> <br/>
					<input type="text" placeholder="请输入您的密码" /> <br/>
					<input type="button" value="登录" style={{width:'100%',background:'red',color:"white"}} /><br/>
					<input type="button" value="立即注册" style={{/*textalign:"center"margin-left:"5px",*/color:"orange"}} />
					<input type="button" value="找回密码" style={{/*margin-right:"5px",*/color:"orange"}} />
					<p >©猫眼电影客服电话：<span style={{color:"red"}}>400-670-5335</span></p>
				</div>
				
			</Router>
			
		)
	} 	
}
