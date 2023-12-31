import React, { useState, useEffect } from "react";

import axios from "axios";

function DataUploadUsingAPI() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    async function inputHandler(event) {
        try {
            event.preventDefault();
            const data = await axios.post("https://fakestoreapi.com/auth/login", {
                username: userName,
                password: password
            });
            console.log(data);
        } catch (error) {
            alert(error.response.data);
        }
    }

    return (<form onSubmit={inputHandler} >
        <input type='text' placeholder="username" value={userName} onChange={(event) => setUserName(event.target.value)} />
        <input type='password' placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <input type='submit' />
    </form>);
}

export default DataUploadUsingAPI;   