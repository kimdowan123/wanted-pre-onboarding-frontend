import axios from "axios";
import getData from './getData';

export default function deleteData(setTodo,listId){
    axios({
        method: "delete",
        url: `https://pre-onboarding-selection-task.shop/todos/${listId}`,
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
    }).then((response) => {
       getData(setTodo)
    }).catch((error) => {
        console.log(error.response.data.message);
    });
};