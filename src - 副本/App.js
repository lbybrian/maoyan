import React from 'react';
import './App.css';
import './assets/style/common.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    NavLink,
} from "react-router-dom"
import Kome from "./components/movie/movie";
import Body from "./router/Movie/body"
import Movie from "./router/Movie/Movie";
import Login from "./router/Login/Login"
import LoginPhone from "./router/Login/LoginPhone"
import My from "./router/My/My"
import Home from "./router/Home/Home";
import Sign from "./router/Login/Sign";
import FindPass from "./router/Login/FindPass";
class Nac extends React.Component {
    render(){
        return(
                <Router>
                    <Switch>
                    <Route path={"/"} exact component = {Movie}></Route>
                    <Route path={"/Home"} exact component = {Home}></Route>
                    <Route path={"/my"} exact component = {My}></Route>
                        <Route path={"/Login"} component = {Login}></Route>
                        <Route path={"/LoginPhone"} component = {LoginPhone}></Route>
//                      <Route path={"/Sign"} component = {Sign}></Route>
                    </Switch>

				<div> 
                    <nav className="gong">
                        <NavLink  activeStyle = {{color:"red"}} exact to={"/"}><span className="iconfont">&#xe6ee;</span><p>电影</p></NavLink>
                        <NavLink  activeStyle = {{color:"red"}} to={"/Home"}><span className="iconfont">&#xe65a;</span><p>影院</p></NavLink>
                        <NavLink  activeStyle = {{color:"red"}} to={"/My"}><span className="iconfont">&#xe60e;</span><p>我的</p></NavLink>
                    </nav>
			  		<Route path={"/My"} component={My}></Route>
			  		<Route  path={"/Sign"} component={Sign}></Route>
			  		<Route path={"/FindPass"} component={FindPass}></Route>
			  	</div>
			  		
                    {/*<div className={"box"}>*/}
                    {/*    <div className={"aaa"}>*/}
                    {/*        <p style={{color:"white"}}>猫眼电影</p>*/}
                    {/*    </div>*/}
                    {/*    <Kome></Kome>*/}
                    {/*</div>*/}
                </Router>

        )
    }
}
export  default Nac


