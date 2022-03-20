/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
// import { red } from "@mui/material/colors";
//  components
import MDBox from "components/MDBox";
// import orange from "@mui/material/colors/orange";
//  example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
// import homeDecor1 from "assets/images/home-decor-1.jpg";
// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsPurpleCapData from "layouts/dashboard/data/reportsPurpleCapData";
import reportsOrangeCapData from "layouts/dashboard/data/reportsOrangeCapData";
import reportPoints from "layouts/dashboard/data/reportsPoints";
import reportsmostValue from "layouts/dashboard/data/reportsmostValue";
import reportsMostPicked from "layouts/dashboard/data/reportsmostPicked";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  // const { tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="leaderboardicon"
                title="Most Wins"
                count={0}
                percentage={{
                  color: "info",
                  amount: "TBD",
                  // label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="scoreicon"
                title="Most Points"
                count={0}
                percentage={{
                  color: "info",
                  amount: "TBD",
                  // label: "Unbeaten streak",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="moneyicon"
                title="Paisa"
                count={0}
                percentage={{
                  color: "info",
                  amount: "TBD",
                  // label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        {/* <MDBox mt={5} mb={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label="project #2"
                title="modern"
                description="As Uber works through a huge amount of internal management turmoil."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
              />
            </Grid>
            <Grid item xs={12} md={9} xl={3}>
              VS
            </Grid>
            <Grid item xs={12} md={9} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label="project #2"
                title="modern"
                description="As Uber works through a huge amount of internal management turmoil."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
              />
            </Grid>
          </Grid>
        </MDBox> */}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Wins Leaderboard"
                  description="IPL 2022"
                  date="Updated 1 day ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="success"
                  title="Most Valuable Player"
                  description="IPL 2022"
                  date="Updated 1 day ago"
                  chart={reportsmostValue}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="secondary"
                  title="Best Pick Today"
                  description="CSK VS KKR"
                  date="Updated 1 day ago"
                  chart={reportsMostPicked}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="primary"
                  title="Points Leaderboard"
                  description="IPL 2022"
                  date="Updated 1 day ago"
                  chart={reportPoints}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="warning"
                  title="Orange Cap"
                  description="IPL 2022"
                  date="Updated 1 day ago"
                  chart={reportsOrangeCapData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="secondary"
                  title="Purple Cap"
                  description="IPL 2022"
                  date="Updated 1 day ago"
                  chart={reportsPurpleCapData}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {/* <OrdersOverview /> */}
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
