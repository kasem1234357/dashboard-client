import observable from "../utils/notification";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function handleClick(data) {
  observable.notify(data);
}
export function handlelogin() {
  observable.notify("User toggled switch!");
}
export const toastConfig ={
           
                position: toast.POSITION.TOP_RIGHT,
                closeButton: true,
                autoClose: 2000,
                theme: localStorage.getItem('theme'),
                className: "toast",

}
function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast[data.type](data.msg, {
    position: toast.POSITION.TOP_RIGHT,
    closeButton: true,
    autoClose: 2000,
    theme: localStorage.getItem('theme'),
    className: "toast",
  });
}

observable.subscribe(logger);
observable.subscribe(toastify);
