import { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import TopNavigation from "../components/Sidebar/TopNavigation";

import Overview from "../components/Sidebar/Overview";
import ProfileSettings from "../components/Sidebar/ProfileSettings";
import Security from "../components/Sidebar/Security";
import Notification from "../components/Sidebar/Notification";
import HelpSupport from "../components/Sidebar/HelpSupport";

import "../Theme/Sidebar/sidebar.css";
import LandingPage from "./LandingPage";


function Dashboard() {

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

        <div id="dashboard">

            {/* Fixed Sidebar */}
            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
            />


            {/* Right Side */}
            <main id="dashboardMain">

                {/* Fixed Top Navigation */}
                <TopNavigation />


                {/* Only this part changes */}
                <section id="dashboardContent">

                    {showContent()}

                </section>

            </main>

        </div>
    );
}

export default Dashboard;