import React, { FC } from "react";
import Layout from "../../layout/Layout";
import FormInput from "./FormInput";
import MainMap from "./MainMap";

const Home: FC = () => {
  return (
    <Layout title="Order taxi">
      <MainMap />

      <div className="absolute z-10 left-5 w-11/12 bottom-10 input-wrap">
        <FormInput />
      </div>
    </Layout>
  );
};

export default Home;
