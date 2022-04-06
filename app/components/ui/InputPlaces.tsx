import React, { FC, useEffect, useRef, useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { FiSearch } from "react-icons/fi";
import cn from "classnames";

interface IInputPlaces {
  cbSuccess: () => void;
  type: "from" | "to";
  idInput: string;
  routeData: object;
}

const InputPlaces: FC<IInputPlaces> = ({
  cbSuccess,
  type,
  idInput,
  routeData,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const setFocus = () => {
    inputRef?.current?.focus();
  };

  useEffect(() => {
    if (isFrom) setFocus();
  }, [type]);

  const isFrom = type === "from";

  return (
    <div
      className={cn("shadow-lg", {
        "mb-5": isFrom,
        "mb-3": !isFrom,
      })}
      onClick={setFocus}
    >
      <div
        className="py-4 px-5 bg-white rounded-lg flex items-center"
        // style={
        //   suggestions.length
        //     ? { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }
        //     : {}
        // }
      >
        <FiSearch
          color={isFrom ? "#ffbc00" : "#615f5d"}
          className="mr-3"
          size={26}
        />
        <input
          id={idInput}
          ref={inputRef}
          placeholder={isFrom ? "Откуда?" : "Куда?"}
          className="outline-0 w-full text-gray-800"
          style={!isFrom ? { paddingRight: 70 } : {}}
        />
        {!isFrom && (
          <div className="absolute right-5 text-sm text-gray-400 text-right">
            {" "}
            <div>{routeData.time ? routeData.time : "мин"}</div>{" "}
            <div>{routeData.length ? routeData.length : "км"}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputPlaces;
