import React, { FC } from "react";
import InputPlaces from "../../ui/InputPlaces";
import ecoIcon from "../../../assets/images/options/economy-icon.png";
import comfortIcon from "../../../assets/images/options/comfort-icon.png";
import comfortPlusIcon from "../../../assets/images/options/comfort-plus-icon.png";
import businessIcon from "../../../assets/images/options/business-icon.png";
import premierIcon from "../../../assets/images/options/premier-icon.png";

interface IFormInput {
  routeData: object;
}

const FormInput: FC = ({ routeData }) => {
  const ecoPrice = 20;
  const comfortPrice = 30;
  const comfortPlusPrice = 40;
  const bussinesPrice = 25;
  const premierPrice = 55;

  const cbSuccess = () => {
    console.log("success");
  };

  return (
    <>
      <InputPlaces
        cbSuccess={cbSuccess}
        type="from"
        idInput="suggestFrom"
        routeData={routeData}
      />
      <InputPlaces
        cbSuccess={cbSuccess}
        type="to"
        idInput="suggestTo"
        routeData={routeData}
      />
      <div
        className={
          routeData.length
            ? "low-transition flex overflow-x-scroll hide-scroll-bar"
            : "hidden"
        }
      >
        <div className="flex flex-nowrap  option__item py-2">
          <button
            className="inline-block rounded-xl px-4 py-2 outline-none mr-4 bg-white shadow-md"
            style={{ minWidth: 105 }}
          >
            <div className="text-left">
              <img src={ecoIcon.src} alt="eco" width={32} />
              <div className="text-xs text-gray-400">Эконом</div>
              <div className="text-sm font-semibold">
                {(
                  Number(
                    routeData.length
                      .replace(/км/gi, "")
                      .replace(/\s/gi, "")
                      .replace(/,/gi, ".")
                  ) * ecoPrice
                ).toFixed(2)}
                {" ₽"}
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-nowrap  option__item py-2">
          <button
            className="inline-block rounded-xl px-4 py-2 outline-none mr-4 bg-white shadow-md"
            style={{ minWidth: 105 }}
          >
            <div className="text-left">
              <img src={comfortIcon.src} alt="eco" width={32} />
              <div className="text-xs text-gray-400">Комфорт</div>
              <div className="text-sm font-semibold">
                {(
                  Number(
                    routeData.length
                      .replace(/км/gi, "")
                      .replace(/\s/gi, "")
                      .replace(/,/gi, ".")
                  ) * comfortPrice
                ).toFixed(2)}
                {" ₽"}
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-nowrap  option__item py-2">
          <button
            className="inline-block rounded-xl px-4 py-2 outline-none mr-4 bg-white shadow-md"
            style={{ minWidth: 105 }}
          >
            <div className="text-left">
              <img src={comfortPlusIcon.src} alt="eco" width={32} />
              <div className="text-xs text-gray-400">Комфорт+</div>
              <div className="text-sm font-semibold">
                {(
                  Number(
                    routeData.length
                      .replace(/км/gi, "")
                      .replace(/\s/gi, "")
                      .replace(/,/gi, ".")
                  ) * comfortPlusPrice
                ).toFixed(2)}
                {" ₽"}
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-nowrap  option__item py-2">
          <button
            className="inline-block rounded-xl px-4 py-2 outline-none mr-4 bg-white shadow-md"
            style={{ minWidth: 105 }}
          >
            <div className="text-left">
              <img src={businessIcon.src} alt="eco" width={32} />
              <div className="text-xs text-gray-400">Бизнес</div>
              <div className="text-sm font-semibold">
                {(
                  Number(
                    routeData.length
                      .replace(/км/gi, "")
                      .replace(/\s/gi, "")
                      .replace(/,/gi, ".")
                  ) * bussinesPrice
                ).toFixed(2)}
                {" ₽"}
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-nowrap  option__item py-2">
          <button
            className="inline-block rounded-xl px-4 py-2 outline-none mr-4 bg-white shadow-md"
            style={{ minWidth: 105 }}
          >
            <div className="text-left">
              <img src={premierIcon.src} alt="eco" width={32} />
              <div className="text-xs text-gray-400">Премьер</div>
              <div className="text-sm font-semibold">
                {(
                  Number(
                    routeData.length
                      .replace(/км/gi, "")
                      .replace(/\s/gi, "")
                      .replace(/,/gi, ".")
                  ) * premierPrice
                ).toFixed(2)}
                {" ₽"}
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default FormInput;
