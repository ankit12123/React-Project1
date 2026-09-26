

const servicesStylee = (theme) => ({

    servicesContainer: {
        marginTop: "120px",
        marginBottom: "50px",
    },

    servicesHeader: {
        textAlign: "center",
    },

    servicesCardContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "0 auto",
        width: "90%",
    },

    servicesCard: {
        border: `2px solid ${theme.colors.borderPrimary}`,
        borderRadius: theme.borderRadius.large,
        padding: "30px",
        margin: "8px",
        width: "25%",

        "&:hover" : {
           backgroundColor : "#e74c3c",
        }
    }

});

export default servicesStylee;