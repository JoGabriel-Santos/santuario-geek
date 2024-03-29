import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import * as API from "../api";

const Authentication = ({ isLogin = false }) => {

    const [isLoggingIn, setIsLoggingIn] = useState(isLogin);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [loginInfo, setLoginInfo] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
    });

    const handleAuthentication = async () => {
        if (!loginInfo.name && !isLoggingIn) {
            setErrorMessage({
                ...errorMessage,
                usernameError: "Preencha o campo de usuário para continuar...",
            });
            return;
        }

        if (!loginInfo.email) {
            setErrorMessage({
                ...errorMessage,
                emailError: "Preencha o campo de email para continuar...",
            });
            return;
        }

        if (!loginInfo.password) {
            setErrorMessage({
                ...errorMessage,
                passwordError: "Preencha o campo de senha para continuar...",
            });
            return;
        }

        if (errorMessage.emailError === "Email inválido...") {
            return;
        }

        try {
            const loginData_underlined = Object.keys(loginInfo).reduce((acc, key) => {
                acc['user_' + key] = loginInfo[key];
                return acc;
            }, {});

            if (isLoggingIn) {
                const { data } = await API.signin(loginData_underlined);
                localStorage.setItem("UserInfo", JSON.stringify(data));

            } else {
                const { data } = await API.signup(loginData_underlined);
                localStorage.setItem("UserInfo", JSON.stringify(data));
            }

        } catch (error) {
            handleAuthenticationError(error.response ? error.response.status : 500);
        }
    };

    const handleAuthenticationError = (statusCode) => {
        let emailError = "";
        let passwordError = "";

        switch (statusCode) {
            case 400:
                emailError = "Usuário já registrado...";
                break;

            case 404:
                emailError = "Usuário não encontrado...";
                break;

            case 401:
                passwordError = "Senha incorreta...";
                break;

            default:
                console.log("Erro durante a autenticação...");
                break;
        }

        setErrorMessage({
            emailError,
            passwordError,
        });
    };

    const handleToggleIsLoggingIn = () => {
        setLoginInfo({
            name: "",
            email: "",
            password: "",
        });
        setErrorMessage({
            nameError: "",
            emailError: "",
            passwordError: "",
        });
        setIsLoggingIn((prevIsLoggingIn) => !prevIsLoggingIn);
        setPasswordVisible(false);
    };

    const handleUserNameFocus = () => {
        setErrorMessage({
            ...errorMessage,
            nameError: "",
        });
    };

    const handleEmailFocus = () => {
        setErrorMessage({
            ...errorMessage,
            emailError: "",
        });
    };

    const handlePasswordFocus = () => {
        setErrorMessage({
            ...errorMessage,
            passwordError: "",
        });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailBlur = (event) => {
        const emailValue = event.target.value;
        if (!validateEmail(emailValue)) {
            setErrorMessage({
                ...errorMessage,
                emailError: "Email inválido...",
            });
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 2000,
            delay: 400,
        });
    }, []);

    return (
        <React.Fragment>
            <Breadcrumb title={isLoggingIn ? "Login" : "Registro"} span={<span> <a href="/">Home</a> - Login</span>}/>

            <section className="section-login padding-tb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cr-login" data-aos="fade-up">
                                <div className="form-logo">
                                    <img src={require("../util/images/logo/logo.png")} alt="logo"/>
                                </div>
                                <form className="cr-content-form">
                                    {
                                        !isLoggingIn && (
                                            <div className="form-group">
                                                <label>Nome</label>
                                                <input type="text" className="cr-form-control"/>
                                            </div>
                                        )
                                    }
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="cr-form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Senha</label>
                                        <input type="password" className="cr-form-control"/>
                                    </div>
                                    <div className="remember">
                                        <span className="form-group custom">
                                            <input type="checkbox" id="html"/>
                                            <label htmlFor="html">Lembrar-se de mim</label>
                                        </span>
                                        <a className="link" href="/forgot">Esqueceu sua senha?</a>
                                    </div>
                                    <br/>
                                    <div className="login-buttons">
                                        <button type="button" className="cr-button">Login</button>
                                        {
                                            isLoggingIn ? (
                                                <a href="#" className="link" onClick={handleToggleIsLoggingIn}>
                                                    Criar nova conta?
                                                </a>
                                            ) : (
                                                <a href="#" className="link" onClick={handleToggleIsLoggingIn}>
                                                    Fazer login?
                                                </a>
                                            )
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Authentication;