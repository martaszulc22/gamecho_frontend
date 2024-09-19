//composant de du petit bouton interrupteur pour Dark / light Mode 
import React from "react";
import styles from "../styles/Toggle.module.css"

const Toggle = ({ isToggled, onToggle }) => {

    return (
        <label className={styles.switch}>
            <input type={"checkbox"} checked={isToggled} onChange={onToggle} />
            <span className={styles.slider} />
        </label>
    )
};

export default Toggle;