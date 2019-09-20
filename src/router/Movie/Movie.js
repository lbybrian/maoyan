import React,{Component} from "react";
import '../../assets/style/movie.css'
import Home from "../Home/Home";
import My from "../My/My";
import {
    Route
} from "react-router-dom"
export default class Movie extends Component{
    render(){
        return(
            <div className="ccc">
                <Route path={"/"} exact component={Home}></Route>
                <Route path={"/My"} component ={My}></Route>
            </div>
        )
    }
}