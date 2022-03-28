import React, { FC } from "react";
import Layout from "../../layout/Layout";
import MainMap from "./MainMap";

const Home: FC = () => {
  return (
    <Layout title="Order taxi">
      <MainMap />
    </Layout>
  );
};

export default Home;
