

const helpSupportStylee = (theme) => ({

    helpCard: {
        maxWidth: "90%",
        margin: "0 auto",
        padding: "28px 42px 40px",
        backgroundColor: theme.colors.surface,
        border: `2px solid ${theme.colors.border}`,
        borderTop: `6px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.contentCard,
        boxShadow: theme.shadows.contentCard,
    },

    helpHeading: {
        fontSize: theme.fontSize.contentHeading,
        fontWeight: theme.fontWeight.bold,
        margin: "0 0 28px",
    },

    faqHeadingBox: {
        display: "flex",
        alignItems: "center",
        gap: theme.gap.medium,
        marginBottom: "22px",
    },

    faqIcon: {
        fontSize: "22px",
        color: theme.colors.borderPrimary,
        fontWeight: theme.fontWeight.bold,
    },

    sectionHeading: {
        fontSize: "18px",
        fontWeight: theme.fontWeight.bold,
        margin: "0",
    },

    faqContainer: {
        display: "flex",
        flexDirection: "column",
        gap: theme.gap.semiLarge,
        marginBottom: "42px",
    },

    faqCard: {
        width: "100%",
        minHeight: "90px",
        padding: "15px 18px",
        backgroundColor: theme.colors.background,
        border: `1px solid ${theme.colors.borderPrimary}`,
        borderRadius: theme.borderRadius.medium,
        boxSizing: "border-box",
    },

    question: {
        fontSize: theme.fontSize.medium,
        fontWeight: theme.fontWeight.bold,
        margin: "0 0 10px",
    },

    answer: {
        fontSize: theme.fontSize.normal,
        lineHeight: "1.4",
        margin: "0",
        color: theme.colors.textSecondary,
    },

    supportHeadingBox: {
        display: "flex",
        alignItems: "center",
        gap: theme.gap.medium,
        marginBottom: "22px",
    },

    supportIcon: {
        fontSize: "18px",
        color: theme.colors.borderPrimary,
        fontWeight: theme.fontWeight.bold,
    },

    supportDescription: {
        fontSize: theme.fontSize.normal,
        lineHeight: "1.4",
        margin: "0",
        color: theme.colors.textSecondary,
    },

});

export default helpSupportStylee;
