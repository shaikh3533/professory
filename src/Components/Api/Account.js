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
                providerType: "webiste"
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

    Return() {
        console.log('Reeturn')
        return this.result
    }
}
export default new Account();