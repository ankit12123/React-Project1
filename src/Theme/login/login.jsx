
const loginStyle = {
    loginContainer: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    loginCard: {
        width: "420px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
        borderTop: "6px solid aqua",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        padding: "20px",
    },

    loginHeader: {
        textAlign: "center",
        marginBottom: 0,
        fontSize: "32px",
        fontWeight: 500,
    },

    loginPara: {
        textAlign: "center",
        marginTop: 0,
        marginBottom: "20px",
    },

    loginLabel: {
        fontWeight: 500,
        marginTop: "10px",
    },

    loginInput: {
        height: "47px",
        width: "100%",
        padding: "0 14px",
        boxSizing: "border-box",
        border: "1px solid #61d6d6",
        borderRadius: "14px",
        backgroundColor: "white",
        fontSize: "13px",
        marginTop: "7px",
    },

    loginPasswordCondition: {
        fontSize: "15px",
        marginTop: "5px",
    },

    checkboxContainer: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },

    remember: {
        fontSize: "15px",
    },

    forgotPassword: {
        marginLeft: "auto",
        textDecoration: "none",
        color: "rgb(14, 184, 184)",
    },

    signInBtn: {
        width: "100%",
        height: "51px",
        border: "none",
        borderRadius: "11px",
        backgroundColor: "#55cece",
        color: "white",
        fontSize: "16px",
        fontWeight: 700,
        cursor: "pointer",
        marginBottom: "20px",
    },

    loginFooterBox: {
        display: "flex",
        alignItems: "center",
    },

    loginFooterLink: {
        fontSize: "14px",
        color: "#26c5c5",
        textDecoration: "none",
        fontWeight: 600,
    },
    emailError:{
         color: "red",
          fontSize: "13px",
           margin: "5px 0 0"
    }
};

export default loginStyle;