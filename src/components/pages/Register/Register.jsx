import React, { useState } from 'react'

import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";


import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../utils/firebase';
import { useDispatch } from 'react-redux';
import { actions } from '../../../Slices/user.slice';


const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
    } = useForm();

    function reg() {
        const regData = {
            email: getValues("userMail"),
            password: getValues("password"),
            copyPassword: getValues("copyPassword"),
        }

        if (regData.password !== regData.copyPassword) {
            setError("Пароли не совпадают")
        }
        else {
            createUser(regData.password, regData.email)
        }
    }

    function createUser(password, email) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => (console.log(user), dispatch(actions.loginUser({ email: user.email, token: user.accessToken, id: user.uid })), reset(), navigate("/fake-store/products", { replace: true })))
            .catch(error => console.log(error))
    }



    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit(reg)} className="SignIn-form">
                <div>Email : </div>
                <input
                    type="email"
                    {...register("userMail", { required: "Email is required" })}
                    placeholder="Email"
                />
                {errors?.userMail?.message && <div style={{ color: 'red', fontSize: 25 }}>Email is required</div>}
                <div>Password : </div>
                <input
                    type="password"
                    {...register("password", { required: "Password is required" })}
                    placeholder="Password"
                />
                {errors?.password?.message && <div style={{ color: 'red', fontSize: 25 }}>Password is required</div>}
                <div>Repeat Password : </div>
                <input
                    type="password"
                    {...register("copyPassword", { required: "Password is required" })}
                    placeholder="Password"
                />
                {errors?.password?.message && <div style={{ color: 'red', fontSize: 25 }}>Password is required</div>}
                {error ? (
                    <div style={{ color: "red", fontSize: 25 }}>{error}</div>
                ) : null}

                <div
                    style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                        color: "grey",
                        fontSize: 35
                    }}
                >
                    Already have account?
                    <Link style={{ fontSize: 30 }} to={"/fake-store/sign-in"}>
                        Sign - in
                    </Link>
                </div>

                <input style={{ cursor: 'pointer' }} type="submit" value="Create account" />
            </form>

            <Footer />
        </div>
    )
}

export default Register