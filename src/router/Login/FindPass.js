import React,{Component} from "react";
export default class FindPass extends Component {
    render() {
        return (
            <div>FindPass
				<input type="text" placeholder="请输入手机号" style={{width:"100%"}} /> <br/>
				<input type="button" value="获取验证码" style={{width:"100%",background:"gery"}} /> <br/>
				<input type="button" value="下一步" style={{width:'100%',background:'#c6a045',color:"#453c28"}} /><br/>
				
            </div>
        )
    }
}
