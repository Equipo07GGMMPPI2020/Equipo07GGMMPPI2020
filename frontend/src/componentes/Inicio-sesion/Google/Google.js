import React, { Component } from "react";
import GoogleLogin from 'react-google-login';

class google extends Component{
    render(){
        const responseGoogle = (response) => {
            console.log(response);
          }
    return(
        <div className = "">
 <GoogleLogin
    clientId="663897953375-fp77gld30e75b4obo2injqrof8l30f42.apps.googleusercontent.com"
    buttonText="Iniciar sesion con google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
        </div>
    );
    }
    
}
export default google;