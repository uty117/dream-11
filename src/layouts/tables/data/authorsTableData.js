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

//  components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

import utkarsh from "assets/images/utkarsh.jpg";
import shriyam from "assets/images/shriyam.jpg";
import ajay from "assets/images/ajay.jpg";
import alok from "assets/images/alok.jpg";
import anjali from "assets/images/anjali.jpg";
import suraj from "assets/images/suraj.jpg";
import MDProgress from "components/MDProgress";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Player", accessor: "author", width: "45%", align: "left" },
      { Header: "Wins", accessor: "function", align: "left" },
      { Header: "Last 5 Match", accessor: "status", align: "center" },
      { Header: "Win Percentage", accessor: "employed", align: "center" },
      { Header: "Cumulative Amount", accessor: "action", align: "center" },
      { Header: "Cumulative Points", accessor: "points", align: "center" },
    ],

    rows: [
      {
        author: <Author image={ajay} name="Ajay" />,
        function: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: <Progress color="success" value={0} />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        points: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
      },
      {
        author: <Author image={alok} name="Alok" />,
        function: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: <Progress color="success" value={0} />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        points: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
      },
      {
        author: <Author image={anjali} name="Anjali" />,
        function: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: <Progress color="success" value={0} />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        points: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
      },
      {
        author: <Author image={shriyam} name="Shriyam" />,
        function: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: <Progress color="success" value={0} />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        points: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
      },
      {
        author: <Author image={suraj} name="Suraj" />,
        function: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: <Progress color="success" value={0} />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        points: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
      },
      {
        author: <Author image={utkarsh} name="Utkarsh" />,
        function: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
            <MDBadge badgeContent="" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: <Progress color="success" value={0} />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        points: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
      },
    ],
  };
}
