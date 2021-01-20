import React from "react";

const footerStyles = {
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
    color: "white",
    textAlign: "center",
    fontSize: "15px",
    backgroundColor: "#cfd2d4",
}

function Footer() {
    return (
        <nav className="mt-5" style={footerStyles}>
            <p className="m-3">
                © 2021 Copyright: Abu Shahadat Md. Sayem
            </p>
        </nav>
    );
}

export default Footer;
