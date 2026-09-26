

const notificationStylee = (theme) => ({

    notificationCard: {
        maxWidth: "90%",
        margin: "0 auto",
        padding: "30px 32px 35px",
        backgroundColor: theme.colors.surface,
        border: `2px solid ${theme.colors.border}`,
        borderTop: `6px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.contentCard,
        boxShadow: theme.shadows.contentCard,
    },

    notificationHeading: {
        fontSize: "25px",
        fontWeight: theme.fontWeight.bold,
        margin: "0 0 28px",
    },

    preferencesHeadingBox: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "12px",
    },

    bellIcon: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.borderPrimary,
    },

    sectionHeading: {
        fontSize: "18px",
        fontWeight: theme.fontWeight.bold,
        margin: "0",
    },

    notificationDescription: {
        fontSize: theme.fontSize.normal,
        margin: "0 0 20px",
        color: theme.colors.textSecondary,
    },

    notificationRow: {
        display: "flex",
        width: "100%",
        gap: theme.gap.large,
        marginBottom: "32px",
    },

    notificationBox: {
        width: "50%",
        minHeight: "120px",
        padding: "18px 20px",
        backgroundColor: theme.colors.background,
        border: `1px solid ${theme.colors.borderPrimary}`,
        borderRadius: theme.borderRadius.medium,
    },

    notificationIcon: {
        fontSize: "25px",
        color: theme.colors.borderPrimary,
        marginBottom: "8px",
    },

    notificationTitle: {
        fontSize: theme.fontSize.medium,
        fontWeight: theme.fontWeight.bold,
        margin: "0 0 8px",
    },

    notificationText: {
        fontSize: theme.fontSize.normal,
        margin: "0 0 8px",
        color: theme.colors.textSecondary,
    },

    checkboxRow: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
    },

    checkbox: {
        width: "13px",
        height: "13px",
        accentColor: theme.colors.borderPrimary,
        margin: "0",
    },

    checkboxText: {
        fontSize: theme.fontSize.small,
        margin: "0",
    },

    recentHeadingBox: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "12px",
    },

    recentIcon: {
        fontSize: theme.fontSize.large,
        color: theme.colors.borderPrimary,
    },

    activityCard: {
        width: "95%",
        minHeight: "125px",
        padding: "20px",
        backgroundColor: theme.colors.background,
        border: `1px solid ${theme.colors.borderPrimary}`,
        borderRadius: theme.borderRadius.medium,
    },

    activityCheck: {
        fontSize: theme.fontSize.medium,
        marginBottom: "8px",
        color: theme.colors.borderPrimary,
    },

    activityTitle: {
        fontSize: theme.fontSize.normal,
        fontWeight: theme.fontWeight.medium,
        margin: "0 0 6px",
    },

    activityDescription: {
        fontSize: theme.fontSize.small,
        margin: "0 0 6px",
    },

    activityDate: {
        fontSize: theme.fontSize.small,
        margin: "0",
    },

});

export default notificationStylee;