import axios from "axios";
import getData from "./getData";

export default function reviseCheck(setTodo,listBox) {
    const accessToken = localStorage.getItem("access_token");

    axios({
        method: "put",
        url: `https://pre-onboarding-selection-task.shop/todos/${listBox.id}`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        data: { "todo": listBox.todo, "isCompleted": !listBox.isCompleted }
    }).then((response) => {
        getData(setTodo)
    }).catch((error) => {
        console.log(error.response.data.message);
    });
};