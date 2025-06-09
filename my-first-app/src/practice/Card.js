//import React from "react";
import logo from './logo.svg';
import styles from './index.css';


function Card() {
    const style = {
        backgroundColor: "#fff",
        border: "1px solid black",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        margin: "10px",
        textAlign: "center",
        display: "inline-block",
    }
    return (
        <div className="card">
            <img src={logo} className="card-logo" alt="logo" />
            <h1 className="card-title">Welcome to My First App</h1>
            <p className="card-description">This is a simple card component in React.</p>
        </div>
    );
}
export default Card;