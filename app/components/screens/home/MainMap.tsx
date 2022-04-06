import React, { FC, useEffect, useRef, useState } from "react";
import { YMaps, Map } from "react-yandex-maps";
import { GooSpinner } from "react-spinners-kit";
import cfg from "../../../../cfg";

interface IMap {
  setRouteData: any;
}

const MainMap: FC<IMap> = ({ setRouteData }) => {
  const [selectFrom, setSelectFrom] = useState({ ready: false, coord: [] });
  const [selectTo, setSelectTo] = useState({ ready: false, coord: [] });
  const [ymap, setYmap] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const routes = useRef();
  const map = useRef(null);

  const loadSuggest = (ymaps: any) => {
    const suggestView = new ymaps.SuggestView("suggestFrom", { results: 2 });
    const suggestView2 = new ymaps.SuggestView("suggestTo", { results: 2 });

    suggestView.events.add("select", (e: any) => {
      ymaps.geocode(e.get("item").value).then((result: any) => {
        map.current.panTo(result.geoObjects.get(0).geometry.getCoordinates());
        setSelectFrom({
          ready: true,
          coord: result.geoObjects.get(0).geometry.getCoordinates(),
        });
      });
    });

    suggestView2.events.add("select", (e: any) => {
      ymaps.geocode(e.get("item").value).then((result: any) => {
        setSelectTo({
          ready: true,
          coord: result.geoObjects.get(0).geometry.getCoordinates(),
        });
      });
    });
  };

  useEffect(() => {
    if (selectFrom.ready && selectTo.ready) {
      setIsLoading(true);
      getRoute();
    }
  }, [selectFrom, selectTo]);

  const getRoute = () => {
    //очищаем от старых маршрутов
    map.current.geoObjects.removeAll();

    const multiRoute = new ymap.multiRouter.MultiRoute(
      {
        // Описание опорных точек мультимаршрута.
        referencePoints: [selectFrom.coord, selectTo.coord],
        // Параметры маршрутизации.
        params: {
          // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
          results: 1,
        },
      },
      {
        // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
        boundsAutoApply: true,
        // Внешний вид линии маршрута.
        routeActiveStrokeWidth: 6,
        routeActiveStrokeColor: "#fa6600",
      }
    );

    // routes.current = multiRoute;
    map.current.geoObjects.add(multiRoute);

    multiRoute.model.events.add("requestsuccess", function () {
      // Получение ссылки на активный маршрут.
      var activeRoute = multiRoute.getActiveRoute();
      // Получение коллекции путей активного маршрута.
      var activeRoutePaths = activeRoute.getPaths();
      // Проход по коллекции путей.
      activeRoutePaths.each(function (path: any) {
        setRouteData({
          length: path.properties.get("distance").text,
          time: path.properties.get("duration").text,
        });
      });

      setIsLoading(false);
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          zIndex: 999,
          left: "50%",
          top: "50%",
          transform: "translate(-50%)",
        }}
      >
        <GooSpinner size={64} color="#ffb400" loading={isLoading} />
      </div>

      <YMaps
        query={{
          apikey: cfg.apiKey,
        }}
      >
        <Map
          onLoad={(ymaps) => {
            loadSuggest(ymaps);
            setYmap(ymaps);
          }}
          instanceRef={map}
          width={"100%"}
          height={"100vh"}
          defaultState={{ center: [55.75, 37.59], zoom: 10 }}
          options={{ suppressMapOpenBlock: true }}
          modules={[
            "SuggestView",
            "multiRouter.MultiRoute",
            "coordSystem.geo",
            "geocode",
          ]}
        />
      </YMaps>
    </div>
  );
};

export default MainMap;
