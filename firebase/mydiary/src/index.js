import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import 'normalize.css';
import './index.css'
import { AuthContextProvider } from './context/AuthContext';

const container = document.getElementById("root");
const root = createRoot(container);
//하위에 있는 어떤 컴포넌트에서든 Context 정보에 접근 할 수 있도록 합니다.
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);
