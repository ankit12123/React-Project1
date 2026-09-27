const securityStylee = (theme) =>( {

    
    securityCard: {
        maxWidth: "90%",
        margin: "0 auto",
        padding: "25px 38px 35px",

        backgroundColor: "theme.colors.surface",

        border: `2px solid ${theme.colors.border}`,
        borderTop: `6px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.contentCard,

        boxShadow: theme.shadows.contentCard,
    },


    

    securityHeading: {
        fontSize: theme.fontSize.contentHeading,
        fontWeight:theme.fontWeight.bold,

        margin: "0 0 28px",
    },


  
    sectionHeading: {
        fontSize: theme.fontSize.large,
        fontWeight: theme.fontWeight.bold,

        margin: "0 0 14px",
    },


  
    securityDescription: {
        fontSize: theme.fontSize.medium,

        margin: "0 0 25px",

        color:theme.colors.textSecondary,
    },


    passwordRow: {
        display: "flex",

        width: "100%",

        gap: theme.gap.extraLarge,

        marginBottom: "18px",
    },



    passwordField: {
        width: "calc(50% - 12.5px)",

        display: "flex",
        flexDirection: "column",

        minWidth: "0",
    },


    fullPasswordField: {
        width: "100%",

        display: "flex",
        flexDirection: "column",

        marginBottom: "18px",
    },


    
    passwordLabel: {
        fontSize: theme.fontSize.medium,
        fontWeight: theme.fontWeight.medium,

        marginBottom: "7px",

        color: theme.colors.text,
    },



    passwordInput: {
        width: "100%",
        height: theme.heightInput.height,

        padding: "0 20px",

        border: "none",

        borderRadius:  theme.borderRadius.medium,

        backgroundColor:theme.colors.inputColor,

        fontSize: theme.fontSize.normal,

        outline: "none",

        boxSizing: "border-box",
    },



    buttonContainer: {
        display: "flex",

        justifyContent: "flex-end",

        gap: theme.gap.medium,

        marginTop: "18px",

        marginBottom: "20px",
    },


   
    clearButton: {
        width: "80px",
        height: "40px",

        border: `1px solid ${theme.colors.borderPrimary}`,

        borderRadius: theme.borderRadius.medium,

        backgroundColor: theme.colors.surface,

        fontSize: theme.fontSize.medium,

        fontWeight: theme.fontWeight.bold,

        cursor: "pointer",
    },


   
    updateButton: {

        width: "150px",
        height: "40px",

        border: "none",

        borderRadius: theme.borderRadius.medium,

        border: `1px solid ${theme.colors.borderPrimary}`,

        backgroundColor:  theme.colors.secondary,

        color:  theme.colors.surface,

        fontSize: theme.fontSize.medium,

        fontWeight: theme.fontWeight.bold,

        cursor: "pointer",
    },


    
    divider: {
        width: "100%",

        height: "1px",

        backgroundColor: theme.colors.divider,

        margin: "20px 0",
    },


    
    informationHeading: {
        fontSize: theme.fontSize.semiLarge,

        fontWeight:  theme.fontWeight.bold,

        margin: "0 0 25px",
    },


  
    informationRow: {
        display: "flex",

        width: "100%",

        gap:  theme.gap.semiLarge,
    },



    informationCard: {
        width: "calc(33.333% - 8.67px)",

        minHeight: "110",

        padding: "15px 20px",

        backgroundColor: theme.colors.background,

        border: `1px solid ${theme.colors.borderPrimary}`,

        borderRadius: theme.borderRadius.medium,

        boxSizing: "border-box",
    },


   
    informationIcon: {
        fontSize: theme.fontSize.Large,

        color: theme.colors.borderPrimary,

        marginBottom: "12px",
    },


    informationTitle: {
        fontSize: theme.fontSize.medium,

        fontWeight:  theme.fontWeight.bold,

        margin: "0 0 10px",
    },



    informationText: {
        fontSize:theme.fontSize.small,

        margin: "0",

        color: theme.colors.textSecondary,
    },

});

export default securityStylee;





