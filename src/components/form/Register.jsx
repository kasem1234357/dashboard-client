import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import { schema } from "../../utils/validateSchema";
import axiosConfig from "../../configs/axiosConfig";
import { addUser } from "../../redux/slices/userSlice";
import { toastMessage } from "../../utils/toastMassege";
import { toast } from "react-toastify";
import { toastConfig } from "../../configs/notificationConfig";
function Register() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    inviteCode: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      console.log({
        userName: values.username,
        email: values.email,
        password: values.password,
        inviteCode: values.inviteCode,
      });
      const response = await toast.promise(axiosConfig
        .post(`api/auth/register`, {
          userName: values.username,
          email: values.email,
          password: values.password,
          inviteCode: values.inviteCode,
        })
        .then((responce) => {
          dispatch(addUser(responce.data.data.user));
          console.log(responce.data);
          Navigate("/");
          return responce
        }),toastMessage(),toastConfig)
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-box2 bg-gray flex f-column padding">
      <form
        className="bg-gray flex f-column flow text-white"
        onSubmit={handleSubmit}
      >
        {schema(values).signUp.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          );
        })}

        <div className="flow">
          <div className="flex ">
            <input
              className="none"
              type="checkbox"
              name="remmember"
              id="remmember"
            />
            <label className="custom-check" htmlFor="remmember"></label>
            <span className="checkbox-text">Remmember me</span>
          </div>
          <div className="flex ">
            <input className="none" type="checkbox" name="terms" id="terms" />
            <label className="custom-check" htmlFor="terms"></label>
            <span className="checkbox-text">
              I have raccepted the{" "}
              <span className="text-main">terms and conditions</span>
            </span>
          </div>
        </div>
        <input className="submit " type="submit" value={"Login Now"} />
      </form>
    </div>
  );
}

export default Register;
