const sidebarStyle = {

    sidebar: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "240px",
        height: "100vh",
        backgroundColor: "#ffffff",
        borderRight: "2px solid #bdebed",
        zIndex: 1000,
        overflowY: "auto",
        boxSizing: "border-box"
    },

    userBox: {
        height: "95px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "15px",
        borderBottom: "1px solid #bdebed",
        boxSizing: "border-box"
    },

    userIcon: {
        width: "40px",
        height: "40px",
        borderRadius: "12px",
        backgroundColor: "#102d72",
        color: "white",
        fontWeight: "bolder",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    userDetails: {
        fontSize: "14px"
    },

    userEmail: {
        margin: "5px 0 0",
        fontSize: "12px"
    },

    sidebarSection: {
        padding: "25px 14px 0"
    },

    sidebarHeading: {
        fontSize: "12px",
        margin: "0 0 10px 0",
        fontWeight:"bold"
    },

    sidebarButton: {
        display: "block",
        width: "100%",
        padding: "11px 12px",
        marginBottom: "5px",
        border: "none",
        borderRadius: "10px",
        backgroundColor: "transparent",
        textAlign: "left",
        fontSize: "14px",
        cursor: "pointer",
        boxSizing: "border-box"
    },

    activeButton: {
        backgroundColor: "#f1f3f4",
        border: "1px solid #55d8d8",
        borderLeft: "6px solid #55d8d8"
    },

    accountSection: {
        position: "absolute",
        bottom: "30px",
        width: "100%",
        padding: "0 14px",
        boxSizing: "border-box"
    }

};

export default sidebarStyle;