

const TopNavigationStylee = (theme) => ({

    dashboardNav: {
        position: "fixed",
        top: 0,
        right: 0,
        left: "240px",
        height: theme.navContainer.height,
        backgroundColor: theme.colors.primary,
        zIndex: 900,
    },

    dashboardNavContainer: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0 28px",
    },

    dashboardTitle: {
        color: theme.colors.textLight,
        fontSize: theme.fontSize.medium,
        margin: 0,
    }

});

export default TopNavigationStylee;