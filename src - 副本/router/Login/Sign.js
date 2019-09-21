import React,{Component} from "react";
export default class Sign extends Component {
    render() {
        return (
            <div>
				<input type="text" placeholder="请输入手机号" style={{width:"100%"}} /> <br/>
				<input type="button" value="获取验证码" style={{width:"100%",background:"gery"}} /> <br/>
				<input type="button" value="注册" style={{width:'100%',background:'gery',color:"white"}} /><br/>
				
            </div>
        )
    }
}
