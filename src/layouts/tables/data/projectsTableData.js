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
// import Icon from "@mui/material/Icon";

//  components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
// import MDProgress from "components/MDProgress";

// Images
// import LogoAsana from "assets/images/small-logos/logo-asana.svg";
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
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Teams", accessor: "project", width: "30%", align: "left" },
      { Header: "Match ", accessor: "budget", align: "left" },
      { Header: "Win", accessor: "win", align: "left" },
      { Header: "Loss ", accessor: "loss", align: "left" },
      { Header: "Points", accessor: "status", align: "left" },
      { Header: "Last 5 Match ", accessor: "last", align: "left" },
      { Header: "NRR", accessor: "completion", align: "left" },
    ],

    rows: [
      {
        project: <Project image={csk} name="CSK" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        win: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        loss: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        last: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
      },
      {
        project: <Project image={kkr} name="KKR" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        win: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        loss: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        last: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
      },
      {
        project: <Project image={mi} name="MI" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        win: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        loss: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        last: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
      },
      {
        project: <Project image={dc} name="DC" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        win: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        loss: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        last: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
      },
      {
        project: <Project image={punjab} name="PKS" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        win: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        loss: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        last: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
      },
      {
        project: <Project image={rcb} name="RCB" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        win: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        loss: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        last: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
      },
      {
        project: <Project image={gt} name="GT" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        win: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        loss: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        last: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
      },
      {
        project: <Project image={luc} name="LSG" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        win: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        loss: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        last: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
      },
      {
        project: <Project image={rr} name="RR" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        win: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        loss: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        last: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
      },
      {
        project: <Project image={srh} name="SRH" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        win: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        loss: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        last: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        completion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.0
          </MDTypography>
        ),
      },
    ],
  };
}
