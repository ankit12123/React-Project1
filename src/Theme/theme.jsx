

 import React, { createContext } from "react";

const theme = {

    colors: {

        // Main Colors
        primary: "#102d72",

        
         secondary: "#4bc9c9",

        // Background Colors
        background: "#f1f3f4",

        surface: "#ffffff",

        cardBackground: "#fdfeff",

        // Border Colors
        border: "#aee8e8",

        borderPrimary: "#4fd2d2" ,

        // Text Colors
        text: "#111111",

        textSecondary: "#222222",

        textLight: "#ffffff",

        inputColor : "#f5f5f5",

       

        // Status Colors
        success: "#4bc9c9",

        danger: "#e74c3c",

        warning: "#f39c12",

        divider : "#bdebed"

    },


    // Common Border Radius
    borderRadius: {

        small: "8px",

        medium: "10px",

        large: "15px",

        extraLarge : "20px",

        contentCard: "25px",

         dotsRound: "40%",

        round: "50%",
    },


    // Common Shadows
    shadows: {

        contentCard: "0 2px 7px rgba(0, 0, 0, 0.1)",

        card :"0 -6px 6px -3px rgba(75, 201, 201, 1)",

        servicesCard : " 10px 11px 7px #e8d3ae",

        button: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },


    // Common Font Sizes
    fontSize: {
        smaller : "9px",

        small: "11px",

        normal: "13px",

        medium: "15px",

        semiLarge : "17px",

        large: "19px",

        contentHeading: "23px",

        mainHeading : "32px",

        textSectionHeading : "50px",

    },

    fontWeight: {

        light : "400",
        

        medium : "500",

        bold : "600",

        extraBold : "700",

     
        
    },


    // Common Spacing
    gap: {

        small: "5px",

        medium: "10px",

        semiLarge: "14px",

        large: "20px",

        extraLarge: "25px",

        maxLarge : "50px",
    },

    heightInput:{

        height : "47px",
    
    },

    heightBtn:{

        large : "51px",
    
    },
    navContainer:{
        height : "70px"
    }

    

};



export const ThemeContext = createContext(theme);

const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;