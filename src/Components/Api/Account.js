import axios from 'axios'

class Account {
    constructor() {
        this.result = [];
    }

    SignUpApi = (data) => {
        const res = async () => {
            const resp = await axios.post('user/signup', {
                email: data.email,
                full_name: data.full_name,
                password: data.password,
                phone: data.phone,
                gender: data.gender,
                country: data.countryID,
                univeristy: data.univID,
                college: data.countryID,
                major: data.majorID,
                isSocial: false,
                providerType: "website"
            })
            // .then((response) => {
            //     if (response) {
            //         this.result = response;
            //     }
            // })
            .catch(function (error) {
                console.log(error);
            });
            this.result=resp;
            return resp;

        }
        return res();
    }

    PhoneCode = () => {
        const res = async () => {
            const resp = await axios.post('user/phoneVerification/send', )
            .catch(function (error) {
                console.log(error);
            });
            console.log({resp})
            return resp;

        }
        
        return res();
    }
    SendCode = (data) => {
        const res = async () => {
            const resp = await axios.post('user/phoneVerification/verify',{
                code:data
            })
            .catch(function (error) {
                console.log(error);
            });
            console.log({resp})
            return resp;

        }
        
        return res();
    }
    AskPermission = (data) => {
        const res = async () => {
            const resp = await axios.post('user/permission/request')
            .catch(function (error) {
                console.log(error);
            });
            console.log({resp})
            return resp;
        }
        
        return res();
    }
    ForgotPassword = (data) => {
        const res = async () => {
            const resp = await axios.post('user/forgotPassword/request',{
                paramValue: data,
                ProviderType:"mail"
            } )
            .catch(function (error) {
                console.log(error);
            });
            console.log({resp})
            return resp;

        }
        
        return res();
    }
}
export default new Account();