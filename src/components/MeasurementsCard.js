import "../assets/styles/components/MeasurementsCard.scss";
import {
  HighValueIcon,
  HumidityIconSmall,
  LowValueIcon,
  PollutionIconSmall,
  TemperatureIconSmall,
} from "../assets/icons";

const MeasurementsCard = () => {
  return (
    <div className="measurementCard">
      <div className="measurementCard__top">
        <div className="dayDateContainer">
          <div className="day">Wed</div>
          <div className="date">07. Jul. 2021</div>
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
                  <div className="max__reading">30ºC</div>
                </div>
                <div className="min">
                  <LowValueIcon />
                  <div className="min__reading">30ºC</div>
                </div>
              </div>
            </div>
          </div>
          <div className="readingRight">
            <p>
              <span>/</span> 26ºC
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
                  <div className="max__reading">56%</div>
                </div>
                <div className="min">
                  <LowValueIcon />
                  <div className="min__reading">40%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="readingRight">
            <p>
              <span>/</span> 48%
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
                  <div className="max__reading">0,70ppb</div>
                </div>
                <div className="min">
                  <LowValueIcon />
                  <div className="min__reading">0,50ppb</div>
                </div>
              </div>
            </div>
          </div>
          <div className="readingRight">
            <p>
              <span>/</span> 0,60<span className="ppb">ppb</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasurementsCard;
