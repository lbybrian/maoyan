import React,{Component} from "react";
export default class LoginPhone extends Component {
    render() {
        return (
        	
            <div>
               <span style={{/*textalign:'center'*/}}><input type="button" value="手机验证码登录" /></span> <br />
				<input type="text" placeholder="请输入手机号" style={{width:"100%"}} /> <br/>
				<input type="text" placeholder="请输入您的密码" style={{width:"100%"}} /> <br/>
				<input type="button" value="登录" style={{width:'100%',background:'gery',color:"white"}} /><br/>
				
            </div>
        )
    }
}

//import React,{Component} from "react";
////import Login from "./router/Login/Login"
//export default class LoginPhone extends Component {
//	
//	render(){
//		return (
//			<Router>
//						
//				 <nav className="login">
//                      <NavLink  exact to={"/"}><p>美团账号登录</p></NavLink>
//                      <NavLink  to={"/LoginPhone"}><p>手机验证码登录</p></NavLink>
//              </nav>
//              <div> 
//                  <nav className="gong">
//                      <NavLink  activeStyle = {{color:"red"}} exact to={"/"}><span className="iconfont">&#xe6ee;</span><p>电影</p></NavLink>
//                      <NavLink  activeStyle = {{color:"red"}} to={"/Home"}><span className="iconfont">&#xe65a;</span><p>影院</p></NavLink>
//                      <NavLink  activeStyle = {{color:"red"}} to={"/my"}><span className="iconfont">&#xe60e;</span><p>我的</p></NavLink>
//                  </nav>
//			  		<Route path={"/LoginPhone"} component={LoginPhone}></Route>
//			  	</div>
//			
//          <div>
//             <span style={{/*textalign:'center'*/}}><input type="button" value="美团账号登录" /><input type="button" value="手机验证码登录" /></span> <br />
//				用户名: <input type="text" placeholder="请输入手机号" style={{width:"100%"}} /> <br/>
//				密&ensp;&ensp;码: <input type="text" placeholder="请输入您的密码" /> <br/>
//				<input type="button" value="登录" style={{width:'100%',background:'red',color:"white"}} /><br/>
//				<input type="button" value="立即注册" style={{/*textalign:"center"margin-left:"5px",*/color:"orange"}} />
//				<input type="button" value="找回密码" style={{/*margin-right:"5px",*/color:"orange"}} />
//				<p >©猫眼电影客服电话：<span style={{color:"red"}}>400-670-5335</span></p>
//          </div>
//      
//			</Router>
//			
//			
//		)
//	} 	
//}

