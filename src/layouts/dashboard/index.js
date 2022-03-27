import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import Projects from "layouts/dashboard/components/Projects";


import { getWins,getMostPicked,getOrange,getPurple,getMostValue,getPoints,getMaxWins,getMaxPoints } from "hooks/dataFetch";

function Dashboard() {
    const MostWins =getMaxWins();
    const MostPoints = getMaxPoints();

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
                count={MostWins.wins}
                percentage={{
                  color: "info",
                  amount: `${MostWins.winner}`,
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
                count={MostPoints.points}
                percentage={{
                  color: "info",
                  amount: `${MostPoints.winner}`,
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
                count={86}
                percentage={{
                  color: "info",
                  amount: "Anjali",
                  // label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Wins Leaderboard"
                  description="IPL 2022"
                  date="Updated 1 day ago"
                  chart={getWins()}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="error"
                  title="Points Leaderboard"
                  description="IPL 2022"
                  date="Updated 1 day ago"
                  chart={getPoints()}
                />
              </MDBox>
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="secondary"
                  title="Best Pick Today"
                  description="CSK VS KKR"
                  date="Updated 1 day ago"
                  chart={getMostPicked()}
                />
              </MDBox>
            </Grid> */}
          </Grid>
        </MDBox>
        <MDBox mt={4.5}>
          {/* <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="primary"
                  title="Best Pick Today"
                  description="CSK VS KKR"
                  date="Updated 1 day ago"
                  chart={getMostPicked()}
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
                  chart={getOrange()}
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
                  chart={getPurple()}
                />
              </MDBox>
            </Grid>
          </Grid> */}
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <Projects />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
