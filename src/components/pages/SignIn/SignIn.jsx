import React, { useState } from "react";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { actions } from "../../../Slices/user.slice";

import { auth } from "../../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const authInvalidErrorMessage = "Firebase: Error (auth/invalid-credential).";


const SignIn = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const login = () => {

    const email = getValues("userMail");
    const password = getValues("password");

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => dispatch(actions.loginUser({ email: user.email, token: user.accessToken, id: user.uid })))
      .catch((error) => {
        if (error.message === authInvalidErrorMessage) {
          setError("Неправильная почта или пароль")

        } else {
          console.log('unexpected error', error)
        }
      });

    setError("");
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(login)} className="SignIn-form">
        <div>email : </div>
        <input
          type="email"
          {...register("userMail", { required: true })}
          placeholder="email"
        />
        <div>password : </div>
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="password"
        />
        {error ? (
          <div style={{ color: "red", fontSize: 25 }}>{error}</div>
        ) : null}

        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            color: "grey",
          }}
        >
          Didn't have account?
          <Link style={{ fontSize: 20 }} to={"/fake-store/register"}>
            Create account
          </Link>
        </div>

        <input type="submit" value="Login" />
      </form>

      <Footer />
    </div>
  );
};

export default SignIn;
