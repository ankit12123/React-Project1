

const overviewStylee = (theme) => ({

    overviewCard: {
        maxWidth: "95%",
        margin: "0 auto",
        padding: "30px 40px",
        backgroundColor: theme.colors.surface,
        border: `2px solid ${theme.colors.border}`,
        borderTop: `6px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.contentCard,
        boxShadow: theme.shadows.contentCard,
        boxSizing: "border-box",

        
       
    },

    overviewHeading: {
        fontSize: theme.fontSize.contentHeading,
        marginTop: 0
    },

    overviewPara: {
        fontSize: theme.fontSize.medium,
        marginBottom: "30px"
    },

    MainOverviewCards: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: theme.gap.large
    },

    overviewCards: {
        minHeight: "130px",
        padding: "18px",
        backgroundColor: theme.colors.background,
        border: `1px solid ${theme.colors.borderPrimary}`,
        borderRadius: theme.borderRadius.large,
        boxSizing: "border-box"
    },

    overviewCardsHeading: {
        fontSize: theme.fontSize.semiLarge,
        margin: "0 0 10px"
    },

    overviewCardsPara: {
        fontSize: theme.fontSize.normal,
        lineHeight: 1.4,
        minHeight: "35px"
    },

    progress: {
        height: "5px",
        width: "100%",
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.medium,
        marginTop: "15px"
    },

    quickTitle: {
        fontSize: theme.fontSize.semiLarge,
        marginTop: "45px"
    },

    quickActions: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: theme.gap.semiLarge
    },

    quickCard: {
        minHeight: "105px",
        padding: "20px",
        border: `1px solid ${theme.colors.borderPrimary}`,
        borderRadius: theme.borderRadius.large,
        backgroundColor: theme.colors.background,
        textAlign: "center",
        boxSizing: "border-box"
    },

    quickCardHeading: {
        fontSize: theme.fontSize.semiLarge,
        fontWeight: theme.fontWeight.bold,
        margin: "5px 0 8px"
    },

    quickCardPara: {
        fontSize: theme.fontSize.normal,
        margin: 0
    }

});

export default overviewStylee;