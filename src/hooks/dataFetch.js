
export const getMostPicked = () =>  {
    return {
    labels: ["Shreyas", "Gaikwad", "Jadega", "Moeen", "Billings"],
    datasets: { label: "Percentage", data: [91.7, 85.8, 82.5, 74.2, 72.5] },
    }
  };
  
  export const getWins = () =>  {
    return {
        labels: ["Ajay", "Alok", "Anjali", "Shriyam", "Suraj", "Utkarsh"],
        datasets: { label: "Wins", data: [0, 0, 0, 0, 0, 0] },
      }
  };

  export const getPoints = () =>  {
    return {
        labels: ["Ajay", "Alok", "Anjali", "Shriyam", "Suraj", "Utkarsh"],
        datasets: { label: "Points", data: [0, 0, 0, 0, 0, 0, 0] },
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

