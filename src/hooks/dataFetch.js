import axios from "axios";


export const getwins = () => {
    let res;
    axios.get(`https://jsonplaceholder.typicode.com/todos/1`).then((response) => {
        console.log(response.data)
        res=response.data;
    });
    return res;
};

// axios.get(baseURL).then((response) => {
//     setPost(response.data);
//   });