import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/context";
import App from "./App";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
    <SpeechProvider appId="c852041a-3c5d-4ce2-932c-0cc53c8e2992" language="en-US">
        <Provider>
            <App /> 
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);