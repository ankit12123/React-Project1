import Div from "../../Elementcomponent/Div";
import Paragraph from "../../Elementcomponent/Paragraph";
import { useNavigate } from "react-router";
import Button from "../../Elementcomponent/Button";
import Card from "../../Elementcomponent/Card";

import sidebarStylee from "../../Theme/Sidebar/Sidebar";

import { useContext } from "react";
import { ThemeContext } from "../../Theme/theme";

function Sidebar({ activePage, setActivePage }) {

    const navigate = useNavigate();

      const theme = useContext(ThemeContext);

      const sidebarStyle = sidebarStylee(theme);

    function handleSignOut() {
        const confirmLogout = window.confirm(
            "Are you sure you want to sign out?"
        );

        if (confirmLogout) {
            navigate("/");
        }
    }

    return (
        <Card
            id="sidebar"
            style={sidebarStyle.sidebar}
        >

            {/* USER BOX */}

            <Div
                id="userBox"
                style={sidebarStyle.userBox}
            >

                <Div
                    id="userIcon"
                    style={sidebarStyle.userIcon}
                >
                    DU
                </Div>

                <Div
                    id="userDetails"
                    style={sidebarStyle.userDetails}
                >

                    <b>Demo User</b>

                    <Paragraph
                        text="demo@webtech.practice"
                        style={sidebarStyle.userEmail}
                    />

                </Div>

            </Div>


            {/* DASHBOARD SECTION */}

            <Div
                className="sidebarSection"
                style={sidebarStyle.sidebarSection}
            >

                <Paragraph
                    className="sidebarHeading"
                    text="DASHBOARD"
                    style={sidebarStyle.sidebarHeading}
                />


                {/* Overview */}

                <Button
                    name="Overview"

                    class={
                        activePage === "overview"
                            ? "sidebarButton active"
                            : "sidebarButton"
                    }

                    style={{
                        ...sidebarStyle.sidebarButton,

                        ...(activePage === "overview"
                            ? sidebarStyle.activeButton
                            : {})
                    }}

                    onClick={() => setActivePage("overview")}
                >

                </Button>


                {/* Profile Settings */}

                <Button
                    name="Profile Settings" 

                    class={
                        activePage === "profile"
                            ? "sidebarButton active"
                            : "sidebarButton"
                    }

                    style={{
                        ...sidebarStyle.sidebarButton,

                        ...(activePage === "profile"
                            ? sidebarStyle.activeButton
                            : {})
                    }}

                    onClick={() => setActivePage("profile")}
                >

                </Button>


                {/* Security */}

                <Button
                    name="Security"

                    class={
                        activePage === "security"
                            ? "sidebarButton active"
                            : "sidebarButton"
                    }

                    style={{
                        ...sidebarStyle.sidebarButton,

                        ...(activePage === "security"
                            ? sidebarStyle.activeButton
                            : {})
                    }}

                    onClick={() => setActivePage("security")}
                >

                </Button>


                {/* Notification */}

                <Button
                    name="Notification"

                    class={
                        activePage === "notification"
                            ? "sidebarButton active"
                            : "sidebarButton"
                    }

                    style={{
                        ...sidebarStyle.sidebarButton,

                        ...(activePage === "notification"
                            ? sidebarStyle.activeButton
                            : {})
                    }}

                    onClick={() => setActivePage("notification")}
                >

                </Button>

            </Div>


            {/* QUICK ACTION */}

            <Div
                className="sidebarSection"
                style={sidebarStyle.sidebarSection}
            >

                <Paragraph
                    className="sidebarHeading"
                    text="QUICK ACTION"
                    style={sidebarStyle.sidebarHeading}
                />


                {/* Help & Support */}

                <Button
                    name="Help & Support"

                    class={
                        activePage === "help"
                            ? "sidebarButton active"
                            : "sidebarButton"
                    }

                    style={{
                        ...sidebarStyle.sidebarButton,

                        ...(activePage === "help"
                            ? sidebarStyle.activeButton
                            : {})
                    }}

                    onClick={() => setActivePage("help")}
                >

                </Button>

            </Div>


            {/* ACCOUNT */}

            <Div
                id="accountSection"
                style={sidebarStyle.accountSection}
            >

                <Paragraph
                    className="sidebarHeading"
                    text="ACCOUNT"
                    style={sidebarStyle.sidebarHeading}
                />


                {/* Sign Out */}

                <Button
                    id="signOutBtn"

                    class="sidebarButton"

                    name="Sign out"

                    style={sidebarStyle.sidebarButton}

                    onClick={handleSignOut}
                />

            </Div>

        </Card>
    );
}

export default Sidebar;