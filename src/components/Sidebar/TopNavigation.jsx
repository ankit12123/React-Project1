import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import { Heading3 } from "../../Elementcomponent/Header";

import TopNavigationStylee from "../../Theme/Sidebar/topNavigation";

import { useContext } from "react";
import { ThemeContext } from "../../Theme/theme";


function TopNavigation() {

     const theme = useContext(ThemeContext);

      const TopNavigationStyle = TopNavigationStylee(theme);

    return (
        <Card id="dashboardNav" style={TopNavigationStyle.dashboardNav}>

            <Div id="dashboardNavContainer"  style={TopNavigationStyle.dashboardNavContainer}>

                <Heading3
                    id="dashboardTitle"
                     style={TopNavigationStyle.dashboardTitle}
                    text="WebTech Practice Dashboard"
                />

            </Div>

        </Card>
    );
}

export default TopNavigation;