import axios from "axios";
import getData from "./getData";

export default function reviseText(listBox, reviseTextBox ,setTodo,setUserNumber) {

    const accessToken = localStorage.getItem("access_token");

    axios({
        method: "put",
        url: `https://pre-onboarding-selection-task.shop/todos/${listBox.id}`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        data: { "todo": reviseTextBox, "isCompleted": listBox.isCompleted }
    }).then((response) => {
        getData(setTodo)
        setUserNumber(0)
    }).catch((error) => {
        console.log(error.response.data.message);
    });
};