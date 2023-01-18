import { BrowserNotSupported } from "@mui/icons-material";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import TextField from "../Mycomponent/TextField/TextField";
import Button from "../Mycomponent/Button/Button";
import { regexValidation } from "../Constant";
import { RegistrationPage } from "../Constant";
const Signup = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    loading: false,
    
});
const [pageLoad, pageLoadingState] = useState(true);
const [errorValidation, setErrorValidation] = useState({
    email: { error: false, message: '', showError: false },
    password: { error: false, showError: false },
});

const { username, password, loading } = state;
const { emailFormat } = regexValidation;// const

console.log(state)
console.log(errorValidation)



  //---------------

    /**
     * Function to call LOGIN API
     */
    function SubmitData() {
      let emailFlag = false;
      let passFlag = false;
      if (username.trim() == '' || errorValidation.email.error) {
          emailFlag = true;
      }
      if (password.trim() == '' || errorValidation.password.error) {
          passFlag = true;
      }
      setErrorValidation({
          ...errorValidation,
          email: { error: emailFlag, message: '', showError: emailFlag },
          password: { error: passFlag, showError: passFlag },
      });
      if (emailFlag || passFlag) {
          return;
      }

      const payload = {
          email: username.trim(),
          password: password.trim(),
      };
      setState({ ...state, loading: true });
          
  }

  return (
    <div>
                <TextField
                    name={'Email'}
                    // error={errorValidation.email.showError}
                    showHelp={errorValidation.email.message}
                    required={true}
                    placeholder={'ex: abc@gmail.com'}
                    value={username}
                    onblur={() => {
                        if (username.trim() != '') {
                            if (!username.match(emailFormat)) {
                                setErrorValidation({
                                    ...errorValidation,
                                    email: {
                                        ...errorValidation.email,
                                        error: true,
                                        message: RegistrationPage.emailError,//const
                                        // message: "not valid emmail",//const

                                        showError: true,
                                    },
                                });
                            } else {
                                setErrorValidation({
                                    ...errorValidation,
                                    email: {
                                        ...errorValidation.email,
                                        error: false,
                                        message: '',
                                        showError: false,
                                    },
                                });
                            }
                        } else {
                            setErrorValidation({
                                ...errorValidation,
                                email: {
                                    ...errorValidation.email,
                                    error: true,
                                    message: '',
                                    showError: true,
                                },
                            });
                        }
                    }}
                    onChange={(e) => {
                        if (e.target.value.length == 0) {
                            setErrorValidation({
                                ...errorValidation,
                                email: {
                                    error: true,
                                    message: '',
                                    showError: false,
                                },
                            });
                        } else if (!e.target.value.match(emailFormat)) {
                            setErrorValidation({
                                ...errorValidation,
                                email: {
                                    ...errorValidation.email,
                                    error: true,
                                    message: '',
                                    showError: false,
                                },
                            });
                        } else {
                            setErrorValidation({
                                ...errorValidation,
                                email: {
                                    ...errorValidation.email,
                                    error: false,
                                    message: '',
                                    showError: false,
                                },
                            });
                        }
                        setState({
                            ...state,
                            username: e.target.value.toLowerCase().trim(),
                        });
                    }}
                    onEnter={() => SubmitData()}
                />
                <div>
                    <div direction="vertical" spacing="mediumTight">
                        <TextField
                            name={'Password'}
                            // error={errorValidation.password.showError}//const
                            error={"password error"}
                            required={true}
                            placeholder={'Enter Password'}
                            value={password}
                            strength={false}
                            type="password"
                            onEnter={() => SubmitData()}
                            onblur={() => {
                                if (password.length == 0) {
                                    setErrorValidation({
                                        ...errorValidation,
                                        password: {
                                            error: true,
                                            showError: true,
                                        },
                                    });
                                } else {
                                    setErrorValidation({
                                        ...errorValidation,
                                        password: {
                                            error: false,
                                            showError: false,
                                        },
                                    });
                                }
                            }}
                            onChange={(e) => {
                                if (e.target.value.length == 0) {
                                    setErrorValidation({
                                        ...errorValidation,
                                        password: {
                                            error: true,
                                            showError: false,
                                        },
                                    });
                                } else {
                                    setErrorValidation({
                                        ...errorValidation,
                                        password: {
                                            error: false,
                                            showError: false,
                                        },
                                    });
                                }
                                setState({ ...state, password: e.target.value.trim() });
                            }}
                        />

                        <div halign="end">
                            <Button
                                type="TextButton"
                                // onClick={() => Browserhistory('/auth/forgot')}
                                >
                                Forgot Password?
                            </Button>
                        </div>
                    </div>
                </div>
                <hr />
                <Button
                    thickness="large"
                    length="fullBtn"
                    loading={loading}
                    disable={
                        errorValidation.email.error ||
                        errorValidation.password.error
                    }
                    onClick={() => {
                        SubmitData();
                    }}>
                    Login
                </Button>
            </div>
  );
};

export default Signup;