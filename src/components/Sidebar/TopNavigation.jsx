import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import { Heading3 } from "../../Elementcomponent/Header";

import TopNavigationStyle from "../../Theme/Sidebar/topNavigation";

function TopNavigation() {

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