import "../assets/styles/components/MeasurementsCard.scss";
import {
  HighValueIcon,
  HumidityIconSmall,
  LowValueIcon,
  PollutionIconSmall,
  TemperatureIconSmall,
} from "../assets/icons";

const MeasurementsCard = ({ data, fetchData }) => {
  return (
    <div className="measurementCard">
      <div className="measurementCard__top">
        <div className="dayDateContainer">
          <div className="day">{data.day}</div>
          <div className="date">{data.date}</div>
        </div>
      </div>
      <hr />
      <div className="measurementCardBottomContainer">
        <div className="measurementCard__bottom">
          <div className="readingLeft ">
            <div className="readingLeftContainer">
              <div className="readingIcon">
                <TemperatureIconSmall />
              </div>
              <div className="maxAndMin">
                <div className="max">
                  <HighValueIcon />
                  <div className="max__reading">{data.maxTemp}ºC</div>
                </div>
                <div className="min">
                  <LowValueIcon />
                  <div className="min__reading">{data.minTemp}ºC</div>
                </div>
              </div>
            </div>
          </div>
          <div className="readingRight">
            <p>
              <span>/</span> {Math.round(fetchData.temperature)}ºC
            </p>
          </div>
        </div>
        <div className="measurementCard__bottom">
          <div className="readingLeft ">
            <div className="readingLeftContainer">
              <div className="readingIcon">
                <HumidityIconSmall />
              </div>
              <div className="maxAndMin">
                <div className="max">
                  <HighValueIcon />
                  <div className="max__reading">{data.maxHumidity}%</div>
                </div>
                <div className="min">
                  <LowValueIcon />
                  <div className="min__reading">{data.minHumidity}%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="readingRight">
            <p>
              <span>/</span> {Math.round(fetchData.humidity)}%
            </p>
          </div>
        </div>
        <div className="measurementCard__bottom">
          <div className="readingLeft ">
            <div className="readingLeftContainer">
              <div className="readingIcon">
                <PollutionIconSmall />
              </div>
              <div className="maxAndMin">
                <div className="max">
                  <HighValueIcon />
                  <div className="max__reading">{data.maxPollution}ppb</div>
                </div>
                <div className="min">
                  <LowValueIcon />
                  <div className="min__reading">{data.minPollution}ppb</div>
                </div>
              </div>
            </div>
          </div>
          <div className="readingRight">
            <p>
              <span>/</span>{" "}
              {String((fetchData.pollution / 100).toFixed(2)).replace(".", ",")}
              <span className="ppb">ppb</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasurementsCard;
