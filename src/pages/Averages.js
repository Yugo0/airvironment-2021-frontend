import { MeasurementsCard } from "../components/index";
import { useEffect, useState } from "react";

import "../assets/styles/pages/Averages.scss";

const Averages = () => {
  const [fetchData, setFetchData] = useState({});
  useEffect(() => {
    fetch("https://airvironment.live/api/measurements?per_page=25").then(
      (response) => response.json().then((r) => setFetchData(r.response))
    );
  }, []);

  const data = {
    day: "Mon",
    date: "13.10.1998",
    minTemp: "10",
    maxTemp: "32",
    minHumidity: "50",
    maxHumidity: "92",
    maxPollution: "0,70",
    minPollution: "0,45",
  };

  return (
    <div className="Averages">
      <div className="averages-container">
        {fetchData.length ? (
          fetchData.map((fetchData) => (
            <MeasurementsCard
              data={data}
              fetchData={fetchData}
              key={fetchData.id}
            />
          ))
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Averages;
