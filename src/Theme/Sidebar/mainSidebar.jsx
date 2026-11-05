

const mainSidebarStylee = (theme) => ({

   dashboard: {
    height: "100vh",
    display: "flex",
    overflow: "hidden",
},

    contentCard: {
        maxWidth: "830px",
        margin: "0 auto",
        padding: "40px",
        minHeight: "300px",
        backgroundColor: theme.colors.surface,
        border: `2px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.contentCard,
        boxShadow: theme.shadows.contentCard,
    },

    dashboardMain: {
        marginLeft: "240px",
        width: "calc(100% - 240px)",
        height: "100vh",
        minHeight: 0,
        overflowY: "auto",
        overflowX: "hidden",
        boxSizing: "border-box",
    },

dashboardContent: {
    padding: "110px 20px 50px",
    minHeight: "100%",
    height: "auto",
    boxSizing: "border-box",
},




    // TABLET
    "@media (max-width: 1000px)": {
        infoCards: {
            gridTemplateColumns: "repeat(2, 1fr)",
        },
    },

    // MOBILE
    "@media (max-width: 700px)": {
        sidebar: {
            width: "190px",
        },

        dashboardMain: {
            marginLeft: "190px",
            width: "calc(100% - 190px)",
        },

        dashboardNav: {
            left: "190px",
        },

        dashboardContent: {
            padding: "100px 12px 30px",
        },

        overviewCard: {
            padding: "25px 18px",
        },

        infoCards: {
            gridTemplateColumns: "1fr",
        },

        quickActions: {
            gridTemplateColumns: "1fr",
        },

        dashboardTitle: {
            fontSize: theme.fontSize.normal,
        },
    },

});

export default mainSidebarStylee;