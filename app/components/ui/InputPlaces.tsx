import React, { FC, useEffect, useRef, useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { FiSearch } from "react-icons/fi";
import cn from "classnames";

interface IInputPlaces {
  cbSuccess: () => void;
  type: "from" | "to";
}

const InputPlaces: FC<IInputPlaces> = ({ cbSuccess, type }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const setFocus = () => {
    inputRef?.current?.focus();
  };

  useEffect(() => {
    if (isFrom) setFocus();
  }, [type]);

  const [address, setAddress] = useState("");

  const handleSelect = () => {};

  const isFrom = type === "from";

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
      onError={(err) => console.log("Error: ", err)}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div
          className={cn("shadow-lg", {
            "mb-5": isFrom,
          })}
          onClick={setFocus}
        >
          <div
            className="py-4 px-5 bg-white rounded-lg flex items-center"
            style={
              suggestions.length
                ? { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }
                : {}
            }
          >
            <FiSearch
              color={isFrom ? "#ffbc00" : "#615f5d"}
              className="mr-3"
              size={26}
            />
            <input
              {...getInputProps({
                ref: inputRef,
                placeholder: isFrom ? "Where from?" : "Where to?",
                className: "outline-0 w-full text-gray-800",
              })}
            />
            {!isFrom && (
              <div className="absolute right-5 text-sm text-gray-400">
                {" "}
                min.
              </div>
            )}
          </div>

          <div
            className={cn(
              "absolute w-full h-0 overflow-y-auto rounded-b-lg z-10",
              { "h-48": suggestions.length || loading }
            )}
          >
            {loading && <div className="bg-white p-2">Loading...</div>}

            {
              suggestions.map((suggestion, idx) => (<div {...getSuggestionItemProps(suggestion, {className: cn('cursor-pointer p-3', {'bg-gray-100': suggestion.active, 'bg-white': !suggestion.active})})}><span>{suggestion.description}</span></div>))
            }
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default InputPlaces;
