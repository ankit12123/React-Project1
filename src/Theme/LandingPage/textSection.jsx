

const textSectionStylee = (theme) => ({

    mainTextContainer: {
        minHeight: "600px",
        padding: "110px 5% 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: theme.gap.maxLarge,
        boxSizing: "border-box",
    },

    textContainer: {
        width: "50%",
    },

    textHeader: {
        fontSize: theme.fontSize.textSectionHeading,
        lineHeight: 1.15,
        margin: "0 0 25px",
    },

    textPara: {
        fontSize: theme.fontSize.large,
        lineHeight: 1.5,
        maxWidth: "600px",
        marginBottom: "25px",
    },

    textButtons: {
        display: "flex",
        gap: theme.gap.medium,
    },

    textSignUp: {
        backgroundColor: theme.colors.secondary,
        color: theme.colors.textLight,
        border: `2px solid ${theme.colors.borderPrimary}`,
        padding: "10px 20px",
        borderRadius: theme.borderRadius.medium,
        cursor: "pointer",
        fontWeight : theme.fontWeight.extraBold,
    },

    textLogin: {
        backgroundColor: theme.colors.surface,
        border: `2px solid ${theme.colors.borderPrimary}`,
        padding: "10px 25px",
        borderRadius: theme.borderRadius.medium,
        cursor: "pointer",
    },

});

export default textSectionStylee;