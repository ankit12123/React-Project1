

const footerStylee = (theme) => ({

    footerContainer: {
        height: theme.navContainer.height,
        backgroundColor: theme.colors.primary,
      
    },

    footer: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5%",
        boxSizing: "border-box",
    },

    copyrightFooter: {
        fontWeight: theme.fontWeight.extraBold,
        color: theme.colors.textLight,
    },

    footerButtons: {
        display: "flex",
        alignItems: "center",
        gap: theme.gap.medium,
    },

    footerBtn: {
        padding: "9px 18px",
        borderRadius: theme.borderRadius.small,
        border: `1px solid ${theme.colors.borderPrimary}`,
        backgroundColor: "transparent",
        color: theme.colors.textLight,
        cursor: "pointer",
    },

    signUp: {
        backgroundColor: theme.colors.secondary,
        fontWeight : theme.fontWeight.extraBold,
    },

});

export default footerStylee;