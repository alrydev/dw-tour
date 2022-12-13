import { createContext, useReducer } from "react";

export const UserContext = createContext;

const InitialState = {
    isLogin: false,
    user: {},
}

const reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "USER_SUCCESS":
        case "LOGIN_SUCCESS":
            localStorage.setItem("data_login", payload.token)
            return {
                isLogin: true,
                user: payload
            }
        case "REGISTER_SUCCESS":
            localStorage.setItem("data_user", payload.token)
            return {
                user: payload
            }
        case "LOGOUT":
            localStorage.removeItem("data_login", payload.token)
            return {
                isLogin: false,
                user: {}
            }
        default:
            throw new Error()
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, InitialState)
    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}