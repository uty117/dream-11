
import { addAjay,addAlok,addAnjali,addShriyam,addSuraj,addUtkarsh } from "hooks/actionHook";
let ajay =addAjay();
let alok=addAlok();
let anjali=addAnjali();
let shriyam=addShriyam();
let suraj=addSuraj();
let utkarsh =addUtkarsh();
let totalGames=74;
export const getMostPicked = () =>  {
    return {
    labels: ["Shreyas", "Gaikwad", "Jadega", "Moeen", "Billings"],
    datasets: { label: "Percentage", data: [91.7, 85.8, 82.5, 74.2, 72.5] },
    }
  };
  
  export const getWins = () =>  {
    const temp =getPlayerTable();
    return {
        labels: ["Alok", "Anjali", "Shriyam", "Suraj", "Utkarsh","Ajay" ],
        datasets: { label: "Wins", data: [temp[1].wins, temp[2].wins, temp[3].wins, temp[4].wins, temp[5].wins,temp[0].wins] },
      }
  };

  export const getPoints = () =>  {
    const temp =getPlayerTable();
    return {
        labels: ["Ajay", "Alok", "Anjali", "Shriyam", "Suraj", "Utkarsh"],
        datasets: { label: "Points", data: [temp[0].points, temp[1].points, temp[2].points, temp[3].points, temp[4].points, temp[5].points] },
      }
  };

  export const getOrange = () =>  {
    return {
        labels: ["TBD", "TBD", "TBD", "TBD", "TBD"],
        datasets: { label: "Runs", data: [0, 0, 0, 0, 0, 0] },
      }      
  };

  export const getPurple = () =>  {
    return {
        labels: ["TBD", "TBD", "TBD", "TBD", "TBD"],
        datasets: { label: "Wickets", data: [0, 0, 0, 0, 0, 0] },
      }     
  };

  export const getMostValue = () =>  {
    return {
        labels: ["TBD", "TBD", "TBD", "TBD", "TBD"],
        datasets: { label: "Points", data: [0, 0, 0, 0, 0, 0] },
      }     
  };

  export const getMaxWins = () =>  {
    const wins =getWins();
    const maxWins = Math.max(...wins.datasets.data);
    const index = wins.datasets.data.indexOf(maxWins);
    const winner =wins.labels[index];
    const Maxpoints=getMaxPoints();
    return {
        winner:winner,wins:maxWins,
    }
  };
  
  export const getMaxPoints = () =>  {
    const points =getPoints();
    const maxPoints = Math.max(...points.datasets.data);
    const index = points.datasets.data.indexOf(maxPoints);
    const winner =points.labels[index];
    return {
        winner:winner,points:maxPoints,
    }
  };

  export const getMaxPaise = () =>  {
    let winner;
    const temp =getPlayerTable();
    const maxPaise =Math.max(temp[0].paise,temp[1].paise,temp[2].paise,temp[3].paise,temp[4].paise,temp[5].paise)
    for(let i=0;i<temp.length;i++) {
        if(maxPaise === temp[i].paise) winner=temp[i].name;
    }
    return {
        winner:winner,paise:maxPaise,
    }
  };

  export const getPlayerTable =() => {
    return [
        {
            id:1,
            name:"Ajay",
            wins:ajay.wins,
            last5:ajay.last5,
            winPer:totalGames,
            points:ajay.points,
            paise:ajay.paise
        },
        {
            id:2,
            name:"Alok",
            wins:alok.wins,
            last5:alok.last5,
            winPer:totalGames,
            points:alok.points,
            paise:alok.paise
        },
        {
            id:3,
            name:"Anjali",
            wins:anjali.wins,
            last5:anjali.last5,
            winPer:totalGames,
            points:anjali.points,
            paise:anjali.paise,
        },
        {
            id:4,
            name:"Shriyam",
            wins:shriyam.wins,
            last5:shriyam.last5,
            winPer:totalGames,
            points:shriyam.points,
            paise:shriyam.paise
        },
        {
            id:5,
            name:"Suraj",
            wins:suraj.wins,
            last5:suraj.last5,
            winPer:totalGames,
            points:suraj.points,
            paise:suraj.paise
        },
        {
            id:6,
            name:"Utkarsh",
            wins:utkarsh.wins,
            last5:utkarsh.last5,
            winPer:totalGames,
            points:utkarsh.points,
            paise:utkarsh.paise
        },
    ]
  } 
