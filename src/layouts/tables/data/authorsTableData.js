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
import { getPlayerTable } from "hooks/dataFetch";

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
  // console.log(getPlayerTable()["0"].last5);

  let temp =getPlayerTable();
  const getImage = (id) =>  {
    if(id == 1) return ajay;
    if(id == 2) return alok;
    if(id == 3) return anjali;
    if(id == 4) return shriyam;
    if(id == 5) return suraj;
    if(id == 6) return utkarsh;
  };
  
  const getWinColor =(wins) =>{
    const per = (wins/temp[0].winPer) *100;
    if(per > 75) return "success";
    if(per > 34) return "warning";
    else return  "error";
  }
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
        author: <Author image={getImage(temp[0].id)} name={temp[0].name}/>,
        function: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[0].wins}
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            {temp[0].last5.map((el) => (
              <MDBadge badgeContent={el.result} color={el.color} variant="gradient" size="sm" />
            ))}
          </MDBox>
        ),
        employed: <Progress color={getWinColor(temp[0].wins)} value={Math.round((temp[0].wins/temp[0].winPer)*100)} />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[0].paise}
          </MDTypography>
        ),
        points: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[0].points}
          </MDTypography>
        ),
      },
      {
        author: <Author image={getImage(temp[1].id)} name={temp[1].name}/>,
        function: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[1].wins}
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            {temp[1].last5.map((el) => (
              <MDBadge badgeContent={el.result} color={el.color} variant="gradient" size="sm" />
            ))}
          </MDBox>
        ),
        employed: <Progress color={getWinColor(temp[1].wins)} value={Math.round((temp[1].wins/temp[1].winPer)*100)} />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[1].paise}
          </MDTypography>
        ),
        points: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[1].points}
          </MDTypography>
        ),
      },
      {
        author: <Author image={getImage(temp[2].id)} name={temp[2].name}/>,
        function: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[2].wins}
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            {temp[2].last5.map((el) => (
              <MDBadge badgeContent={el.result} color={el.color} variant="gradient" size="sm" />
            ))}
          </MDBox>
        ),
        employed: <Progress color={getWinColor(temp[2].wins)} value={Math.round((temp[2].wins/temp[2].winPer)*100)} />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[2].paise}
          </MDTypography>
        ),
        points: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[2].points}
          </MDTypography>
        ),
      },
      {
        author: <Author image={getImage(temp[3].id)}  name={temp[3].name}/>,
        function: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[3].wins}
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            {temp[3].last5.map((el) => (
              <MDBadge badgeContent={el.result} color={el.color} variant="gradient" size="sm" />
            ))}
          </MDBox>
        ),
        employed: <Progress color={getWinColor(temp[3].wins)} value={Math.round((temp[3].wins/temp[3].winPer)*100)} />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[3].paise}
          </MDTypography>
        ),
        points: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[3].points}
          </MDTypography>
        ),
      },
      {
        author: <Author image={getImage(temp[4].id)}  name={temp[4].name}/>,
        function: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[0].wins}
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            {temp[4].last5.map((el) => (
              <MDBadge badgeContent={el.result} color={el.color} variant="gradient" size="sm" />
            ))}
          </MDBox>
        ),
        employed: <Progress color={getWinColor(temp[4].wins)} value={Math.round((temp[4].wins/temp[4].winPer)*100)} />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[4].paise}
          </MDTypography>
        ),
        points: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[4].points}
          </MDTypography>
        ),
      },
      {
        author: <Author image={getImage(temp[5].id)}  name={temp[5].name}/>,
        function: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[5].wins}
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            {temp[5].last5.map((el) => (
              <MDBadge badgeContent={el.result} color={el.color} variant="gradient" size="sm" />
            ))}
          </MDBox>
        ),
        employed: <Progress color={getWinColor(temp[5].wins)} value={Math.round((temp[5].wins/temp[5].winPer)*100)} />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[5].paise}
          </MDTypography>
        ),
        points: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {temp[5].points}
          </MDTypography>
        ),
      },
    ],
  };
}
