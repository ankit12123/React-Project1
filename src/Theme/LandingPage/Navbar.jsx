

const navbarStylee = (theme) => ({

    navbarContainer: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: theme.navContainer.height,
        backgroundColor: theme.colors.primary,
        zIndex: 1000,
        
    },

    navbar: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5%",
        boxSizing: "border-box",
    },

    navHeader: {
        color: theme.colors.textLight,
        fontWeight: theme.fontWeight.light,
        padding: "5px",
        margin: 0,
    },

    navButtons: {
        display: "flex",
        alignItems: "center",
        gap: theme.gap.medium,
    },

    navBtn: {
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
    }

});

export default navbarStylee;