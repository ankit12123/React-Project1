
const signupStyle = {
    signupContainer: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    signupCard: {
        width: "450px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
        borderTop: "6px solid aqua",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        padding: "10px 25px 25px",
    },

    signupHeader: {
        fontSize: "32px",
        fontWeight: 600,
        marginBottom: 0,
    },

    signupPara: {
        fontSize: "16px",
        marginTop: 0,
        marginBottom: "10px",
    },

    signupNameBox: {
        display: "flex",
        gap: "16px",
        marginBottom: "25px",
    },

    signupField: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },

    name: {
        fontSize: "16px",
        fontWeight: 600,
    },

    rowName: {
        width: "100%",
        boxSizing: "border-box",
        height: "47px",
        padding: "0 14px",
        border: "1px solid #61d6d6",
        borderRadius: "14px",
        backgroundColor: "white",
        fontSize: "13px",
        marginTop: "7px",
    },

    signupemail: {
        fontSize: "16px",
        fontWeight: 600,
    },

    signupEmailInput: {
        height: "47px",
        width: "100%",
        padding: "0 14px",
        border: "1px solid #61d6d6",
        borderRadius: "14px",
        boxSizing: "border-box",
        backgroundColor: "white",
        fontSize: "13px",
        marginTop: "7px",
        marginBottom: "20px",
    },

    signupPasswordBox: {
        display: "flex",
        flex: 1,
        gap: "16px",
        marginBottom: "18px",
    },

    labelPassword: {
        fontSize: "16px",
        fontWeight: 600,
    },

    rowPassword: {
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

    signupPasswordPara: {
        width: "210px",
        fontSize: "14px",
        lineHeight: "18px",
        margin: "0 0 15px 0",
    },

    signupCheckboxContainer: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "25px",
    },

    checkbox: {
        width: "14px",
        height: "14px",
        margin: 0,
    },

    terms: {
        margin: 0,
        fontSize: "14px",
    },

    createAccountBtn: {
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

    createAccountBtnHover: {
        backgroundColor: "#42c1c1",
    },

    signupFooterBox: {
        display: "flex",
        alignItems: "center",
        gap: "4px",
    },

    signupFooterText: {
        margin: 0,
        fontSize: "14px",
    },

    signupFooterLink: {
        fontSize: "14px",
        color: "#26c5c5",
        textDecoration: "none",
        fontWeight: 600,
    },
    error:{
         color: "red",
          fontSize: "13px",
           margin: "5px 0 0"
    }
};

export default signupStyle;