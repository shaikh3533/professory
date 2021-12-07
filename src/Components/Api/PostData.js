import axios from 'axios'
import { message } from 'antd'

class PostData {
    constructor() {
        this.result = [];
    }
    BookAdd = (data, mthd) => {
        const res = async () => {
            const resp = await axios.post('user/BookStore/add', data)
                .catch(function (error) {
                    console.log(error);
                });
            this.result = resp;
            console.log(resp)
            return resp;

        }
        return res();
    }

    ServiceAdd = (data, mthd) => {
        const res = async () => {
            const resp = await axios.post('user/ServiceProvider/add', data)
                .catch(function (error) {
                    console.log(error);
                });
            this.result = resp;
            console.log(resp)
            return resp;

        }
        return res();
    }

}
export default new PostData();