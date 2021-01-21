import React from 'react'
const styles1 = {
    margin: "10px",
    cursor: "pointer",

}
const styles = {
    padding: "5px",
    display: "flex",
    margin: "0px",
    backgroundColor: "#E07C24",
    wifth: "100%",
    height: "60px",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial"

}
function Header() {
    return (
        <div style={styles}>
            <h1>Todo App</h1>
            <nav style={{ position: "absolute", right: "0px" }}>
                {/* <ul >
                <a style={styles1}>Home</a>
                <a style={styles1}>About</a>
                <a style={styles1}>Login</a>
            </ul> */}
            </nav>
        </div>
    )
}

export default Header
