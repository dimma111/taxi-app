import React, { FC } from "react";
import { YMaps, Map } from "react-yandex-maps";

const MainMap: FC = () => {
  return (
    <div>
      <YMaps>
        <Map
          width={"100%"}
          height={"100vh"}
          defaultState={{ center: [55.75, 37.59], zoom: 10 }}
          options={{ suppressMapOpenBlock: true }}
        />
      </YMaps>
    </div>
  );
};

export default MainMap;
