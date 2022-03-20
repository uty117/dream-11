/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
// import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import csk from "assets/images/csk.jpg";
import kkr from "assets/images/kkr.jpg";
import rr from "assets/images/rr.jpg";
import mi from "assets/images/mi.jpg";
import rcb from "assets/images/rcb.jpg";
import punjab from "assets/images/punjab.jpg";
import srh from "assets/images/srh.jpg";
import gt from "assets/images/gt.jpg";
import luc from "assets/images/luc.jpg";
import dc from "assets/images/dc.jpg";

export default function data() {
  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Venue", accessor: "venue", width: "10%", align: "left" },
      { Header: "Home Team", accessor: "home", width: "25%", align: "left" },
      { Header: "Away Team", accessor: "away", width: "25%", align: "left" },
      { Header: "Date", accessor: "date", align: "left" },
      { Header: "Result", accessor: "result", align: "center" },
      { Header: "Dream 11 Result", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        venue: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            WANKHEDE
          </MDTypography>
        ),
        home: <Company image={csk} name="CSK" />,
        away: <Company image={kkr} name="KKR" />,
        date: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            26 March
          </MDTypography>
        ),
        result: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        venue: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Brabourne
          </MDTypography>
        ),
        home: <Company image={dc} name="DC" />,
        away: <Company image={mi} name="MI" />,
        date: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            27 March
          </MDTypography>
        ),
        result: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        venue: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            DY PATIL
          </MDTypography>
        ),
        home: <Company image={punjab} name="PBKS" />,
        away: <Company image={rcb} name="RCB" />,
        date: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            27 March
          </MDTypography>
        ),
        result: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        venue: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            WANKHEDE
          </MDTypography>
        ),
        home: <Company image={gt} name="GT" />,
        away: <Company image={luc} name="LSG" />,
        date: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            28 March
          </MDTypography>
        ),
        result: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        venue: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            PUNE
          </MDTypography>
        ),
        home: <Company image={srh} name="SRH" />,
        away: <Company image={rr} name="RR" />,
        date: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            29 March
          </MDTypography>
        ),
        result: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        venue: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            DY PATIL
          </MDTypography>
        ),
        home: <Company image={rcb} name="RCB" />,
        away: <Company image={kkr} name="KKR" />,
        date: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            30 March
          </MDTypography>
        ),
        result: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        venue: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Brabourne
          </MDTypography>
        ),
        home: <Company image={luc} name="LSG" />,
        away: <Company image={csk} name="CSK" />,
        date: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            31 March
          </MDTypography>
        ),
        result: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        venue: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            WANKHEDE
          </MDTypography>
        ),
        home: <Company image={kkr} name="KKR" />,
        away: <Company image={punjab} name="PBKS" />,
        date: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            1 April
          </MDTypography>
        ),
        result: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        venue: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            DY PATIL
          </MDTypography>
        ),
        home: <Company image={mi} name="MI" />,
        away: <Company image={rr} name="RR" />,
        date: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2 April
          </MDTypography>
        ),
        result: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        venue: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            PUNE
          </MDTypography>
        ),
        home: <Company image={gt} name="GT" />,
        away: <Company image={dc} name="DC" />,
        date: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2 April
          </MDTypography>
        ),
        result: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TBD" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
    ],
  };
}