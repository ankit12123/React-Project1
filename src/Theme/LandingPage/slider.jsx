

const sliderStylee = (theme) => ({

    slider: {
        width: "500px",
        marginTop: "45px",
        minHeight: "255px",
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.contentCard,
        padding: "25px",
        boxSizing: "border-box",
        boxShadow: theme.shadows.card,
        flexShrink: 0,
    },

    slide: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "190px",
        margin: "15% 0px",
        gap: theme.gap.medium,
    },

    preview: {
        width: "290px",
        textAlign: "center",
    },

    sliderTitle: {
        fontSize: theme.fontSize.large,
        margin: "0 0 15px",
    },

    sliderPara: {
        fontSize: theme.fontSize.normal,
        lineHeight: 1.5,
        margin: 0,
    },

    back: {
        width: "40px",
        height: "40px",
        borderRadius: theme.borderRadius.medium,
        border: `2px solid ${theme.colors.borderPrimary}`,
        backgroundColor: theme.colors.secondary,
        color: theme.colors.textLight,
        fontSize: theme.fontSize.large,
        cursor: "pointer",
        flexShrink: 0,
    },

    next: {
        width: "40px",
        height: "40px",
        borderRadius: theme.borderRadius.medium,
        border: `2px solid ${theme.colors.borderPrimary}`,
        backgroundColor: theme.colors.secondary,
        color: theme.colors.textLight,
        fontSize: theme.fontSize.large,
        cursor: "pointer",
        flexShrink: 0,
    },

    dots: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.gap.medium,
    },

    dot: {
        width: "20px",
        height: "13px",
        display: "block",
        borderRadius: theme.borderRadius.dotsRound,
        backgroundColor: theme.colors.background,
        cursor: "pointer",
    },

    activeDot: {
        backgroundColor: theme.colors.secondary,
    }

});

export default sliderStylee;