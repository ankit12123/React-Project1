

const profileStylee = (theme) => ({

    profileCard: {
        maxWidth: "90%",
        margin: "0 auto",
        padding: "18px 35px 24px",
        backgroundColor: theme.colors.surface,
        border: `2px solid ${theme.colors.border}`,
        borderTop: `6px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.contentCard,
        boxShadow: theme.shadows.contentCard,
    },

    profileHeading: {
        fontSize: theme.fontSize.contentHeading,
        fontWeight: theme.fontWeight.bold,
        margin: "0 0 18px",
    },

    sectionHeading: {
        fontSize:  theme.fontSize.large,
        fontWeight: theme.fontWeight.bold,
        margin: "0 0 14px",
    },

    personalInformation: {
        marginBottom: theme.gap.extraLarge,
    },

    profileRow: {
        display: "flex",
        width: "100%",
        gap: theme.gap.extraLarge,
        marginBottom: "18px",
    },

    profileField: {
        width: "calc(50% - 12.5px)",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
    },

    profileLabel: {
        fontSize: theme.fontSize.medium,
        fontWeight: theme.fontWeight.bold,
        marginBottom: "6px",
        color: theme.colors.text,
    },

    profileInput: {
        width: "100%",
        height: theme.heightInput.height,
        padding: "0 20px",
        border: "none",
        borderRadius: theme.borderRadius.medium,
        backgroundColor:theme.colors.inputColor,
        fontSize: theme.fontSize.normal,
        outline: "none",
        boxSizing: "border-box",
    },

    addressInformation: {
        marginTop: "10px",
    },

    addressField: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "18px",
    },

    addressTextarea: {
        width: "100%",
        height: "80px",
        padding: "14px 20px",
        border: "none",
        borderRadius: theme.borderRadius.medium,
        backgroundColor:theme.colors.inputColor,
        fontSize: theme.fontSize.normal,
        
        resize: "none",
        outline: "none",
        boxSizing: "border-box",
    },

    buttonContainer: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "8px",
        marginTop: theme.gap.extraLarge,
    },

    cancelButton: {
        width: "140px",
        height: "40px",
        border: `1px solid ${theme.colors.borderPrimary}`,
        borderRadius: theme.borderRadius.medium,
        backgroundColor: theme.colors.surface,
        fontSize: theme.fontSize.normal,
        fontWeight: theme.fontWeight.bold,
        cursor: "pointer",
    },

    saveButton: {
        width: "140px",
        height: "40px",
        border: "none",
        borderRadius: theme.borderRadius.medium,
        border: `1px solid ${theme.colors.borderPrimary}`,
        backgroundColor: theme.colors.secondary,
        color: theme.colors.textLight,
        
        fontSize: theme.fontSize.normal,
        fontWeight: theme.fontWeight.bold,
        cursor: "pointer",
    },

});

export default profileStylee;