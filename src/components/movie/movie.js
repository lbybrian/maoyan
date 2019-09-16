import React from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom"
import My from "../../router/My/My";
import Home from "../../router/Home/Home"
import Movie from "../../router/Movie/Movie"
export default class Kome extends React.Component{
    render(){
        return(
            <div className="gong">
                <Router>
                    <NavLink activeStyle = {{color:"red"}} exact to={"/"}>电影</NavLink>|
                    <NavLink activeStyle = {{color:"red"}} to={"/Home"}>电院</NavLink>|
                    <NavLink activeStyle = {{color:"red"}} to={"/my"}>我的</NavLink>
                    <Route path={"/"} exact component = {Movie}></Route>
                    <Route path={"/Home"} componet={Home}></Route>
                    <Route path={"/My"} component ={My}></Route>
                </Router>
            </div>
        )
    }
}
