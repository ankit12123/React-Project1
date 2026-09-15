const overviewStyle = {

    overviewCard: {
        maxWidth: "90%",
        margin: "0 auto",
        padding: "30px 40px",
        backgroundColor: "#ffffff",
        border: "2px solid #aee8e8",
        borderRadius: "25px",
        boxShadow: "0 2px 7px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box"
    },

    overviewHeading: {
        fontSize: "18px",
        marginTop: 0
    },

    overviewPara: {
        fontSize: "13px",
        marginBottom: "30px"
    },

     MainOverviewCards: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px"
    },

    overviewCards: {
        minHeight: "120px",
        padding: "18px",
        backgroundColor: "#f3f5f6",
        border: "1px solid #55d8d8",
        borderRadius: "12px",
        boxSizing: "border-box"
    },

    overviewCardsHeading: {
        fontSize: "14px",
        margin: "0 0 10px"
    },

    overviewCardsPara: {
        fontSize: "11px",
        lineHeight: 1.4,
        minHeight: "35px"
    },

    progress: {
        height: "5px",
        width: "100%",
        backgroundColor: "#102d72",
        borderRadius: "10px",
        marginTop: "15px"
    },

    quickTitle: {
        fontSize: "14px",
        marginTop: "45px"
    },

    quickActions: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "15px"
    },

    quickCard: {
        minHeight: "95px",
        padding: "20px",
        border: "1px solid #55d8d8",
        borderRadius: "12px",
        backgroundColor: "#f3f5f6",
        textAlign: "center",
        boxSizing: "border-box"
    },

    quickCardHeading: {
        fontSize: "14px",
        margin: "5px 0 8px"
    },

    quickCardPara: {
        fontSize: "11px",
        margin: 0
    }

};

export default overviewStyle;