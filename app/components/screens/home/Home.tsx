import React, { FC, useState } from "react";
import Layout from "../../layout/Layout";
import FormInput from "./FormInput";
import MainMap from "./MainMap";

const Home: FC = () => {
  const [routeData, setRouteData] = useState({ length: "", time: "" });

  return (
    <Layout title="Order taxi">
      <MainMap setRouteData={setRouteData} />

      <div className="absolute z-10 left-5 w-11/12 bottom-10 input-wrap">
        <FormInput routeData={routeData} />
      </div>
    </Layout>
  );
};

export default Home;
