import React from 'react';
import axios from 'axios'
const methods = () => {
const login=(event)=>{
    
    axios.post('http://professoryapp.com/rest/api/user/login', {
        email: event.email,
        password: event.password,
        ProviderType: "website",
        fCMToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTA2OTYsImlhdCI6MTYwMjQwODI5NX0.WlwJWiGOHEkADrk97v_QDjRfW4CIHQQQSR5r_c_p7-I"
    })
    .then((res) => {
            console.log(res.data)
            if (res.data.success) {
                sessionStorage.setItem('ProfessoryloggedIn', 'true')
            }
            let LoggedInStatus = res.data.success;
            this.setState({
                loggedIn: LoggedInStatus
            });
        })

        .catch(function (error) {
            alert(error);
        });
}
    return ( 
        <>
        </>
     );
}
 
export default methods;