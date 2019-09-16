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
import Kome from "./components/movie/movie"
class Nac extends React.Component {
    render(){
        return(
            <div>
                <div className={"aaa"}>
                    <p style={{color:"white"}}>猫眼电影</p>
                </div>
                <div><Kome></Kome></div>
            </div>
        )
    }
}
export  default Nac