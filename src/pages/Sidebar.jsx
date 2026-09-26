import { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import TopNavigation from "../components/Sidebar/TopNavigation";
import Card from "../Elementcomponent/Card";
import Div from "../Elementcomponent/Div";

import Overview from "../components/Sidebar/Overview";
import ProfileSettings from "../components/Sidebar/ProfileSettings";
import Security from "../components/Sidebar/Security";
import Notification from "../components/Sidebar/Notification";
import HelpSupport from "../components/Sidebar/HelpSupport";

import mainSidebarStylee from "../Theme/Sidebar/mainSidebar";

import { useContext } from "react";
import { ThemeContext } from "../Theme/theme";



function Dashboard() {

    const theme = useContext(ThemeContext);

      const mainSidebarStyle = mainSidebarStylee(theme);

    const [activePage, setActivePage] = useState("overview");


    function showContent() {

        if (activePage === "overview") {
            return <Overview />;
        }

        if (activePage === "profile") {
            return <ProfileSettings />;
        }

        if (activePage === "security") {
            return <Security />;
        }

        if (activePage === "notification") {
            return <Notification />;
        }

        if (activePage === "help") {
            return <HelpSupport />;
        }
        

        return <Overview />;
    }


    return (

        <Card id="dashboard"  style={mainSidebarStyle.dashboard}>
            

            
            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
            />


            
            <Div id="dashboardMain" style={mainSidebarStyle.dashboardMain}>

                
                <TopNavigation />


                
                <Card id="dashboardContent" style={mainSidebarStyle.dashboardContent}>

                    {showContent()}

                </Card>

            </Div>

        </Card>
    );
}

export default Dashboard;