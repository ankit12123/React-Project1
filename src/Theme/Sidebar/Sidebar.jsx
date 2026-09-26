

const sidebarStylee = (theme) => ({

    sidebar: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "240px",
        height: "100vh",
        backgroundColor: theme.colors.surface,
        borderRight: `2px solid ${theme.colors.divider}`,
        zIndex: 1000,
        overflowY: "auto",
        boxSizing: "border-box"
    },

    userBox: {
        height: "95px",
        display: "flex",
        alignItems: "center",
        gap: theme.gap.medium,
        padding: "15px",
        borderBottom: `1px solid ${theme.colors.divider}`,
        boxSizing: "border-box"
    },

    userIcon: {
        width: "40px",
        height: "40px",
        borderRadius:theme.borderRadius.medium,
        backgroundColor: theme.colors.primary,
        color: theme.colors.textLight,
        fontWeight: theme.fontWeight.extraBold,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    userDetails: {
        fontSize: theme.fontSize.medium
    },

    userEmail: {
        margin: "5px 0 0",
        fontSize: theme.fontSize.small
    },

    sidebarSection: {
        padding: "25px 14px 0"
    },

    sidebarHeading: {
        fontSize: theme.fontSize.medium,
        margin: "0 0 10px 0",
        fontWeight: theme.fontWeight.bold
    },

    sidebarButton: {
        display: "block",
        width: "100%",
        padding: "11px 12px",
        marginBottom: "5px",
        border: "none",
        borderRadius: theme.borderRadius.medium,
        backgroundColor: "transparent",
        textAlign: "left",
        fontSize: theme.fontSize.medium,
        cursor: "pointer",
        boxSizing: "border-box"
    },

    activeButton: {
        backgroundColor: theme.colors.background,
        border: `1px solid ${theme.colors.borderPrimary}`,
        borderLeft: `6px solid ${theme.colors.borderPrimary}`
    },

    accountSection: {
        position: "absolute",
        bottom: "30px",
        width: "100%",
        padding: "0 14px",
        boxSizing: "border-box"
    }

});

export default sidebarStylee;