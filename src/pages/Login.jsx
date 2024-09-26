/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ state, setstate }) => {
  console.log(state);

  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [WrongData, setWrongData] = useState("");

  const navigate = useNavigate("/");

  const getUsersData = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/user",
    }).then((data) => setData(data.data));
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const handelForm = (e) => {
    e.preventDefault();
    let userEmial;
    let userPassword;
    let userId;

    for (let index = 0; index < data.length; index++) {
      userEmial = data[index].email;
      userPassword = data[index].password;
      userId = data[index].id;

      if (userEmial == email && userPassword == password) {
        localStorage.id = userId;
        setstate();
        navigate("/Products");
        console.log(email + " " + password + " " + userId);
      } else {
        setWrongData(" Wrong Data, Try Agine");
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-screen pt-20">
      <div>
        {" "}
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details.
          </Typography>
          <form
            onSubmit={handelForm}
            className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-0.5 flex flex-col gap-6 text-center">
              <Input
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span className="text-red-700 ">{WrongData}</span>
            </div>

            <Button className="mt-6" fullWidth type="submit">
              Sign In
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              do not have an account?{" "}
              <Link to="/sign-up" className="font-medium text-gray-900">
                Sign Up
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
