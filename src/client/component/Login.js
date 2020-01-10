import React from "react";
import '../../../public/login.css';

class Login extends React.Component {
    render(){
        return(
          <div className="container">
            <div className="login_page">
             <form>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
            </div>
            </div>
        )
        
    }
    
} 
export default Login;