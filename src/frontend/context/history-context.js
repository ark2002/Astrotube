import { useState, useEffect, useContext, createContext } from "react";
import { getHistory } from "../services";
import { useAuth } from "./auth-context";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {

    const [history, setHistory] = useState([]);
    const { auth } = useAuth();

    useEffect(() => {
        if (auth.isAuth) {
            (async () => {
                const response = await getHistory(auth.token);
                if (response !== undefined) {
                    setHistory(response);
                } else {
                    setHistory([]);
                }
            })()
        }
    }, [auth]);

    return (
        <HistoryContext.Provider value={{ history, setHistory }}>
            {children}
        </HistoryContext.Provider>
    );
}

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };