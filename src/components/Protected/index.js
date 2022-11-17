import { Navigate } from "react-router-dom";
import React from 'react';

function Protected({children}) {
    const token = localStorage.getItem("token")

    if(!token) return <Navigate to = "/"/>

    return children
}

export default Protected