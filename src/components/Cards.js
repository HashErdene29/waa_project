import React from "react";
import Card from "./Card";
import Layout from "./Layout";

const Cards = () => {
  return (
    <Layout>
      <div className="ml-2">
        <h1 className="text-2xl font-bold mb-2">Newest Listings</h1>
        <p className="text-gray-500">See the most up-to-date listings</p>
      </div>
      <div className="flex flex-wrap justify-start">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default Cards;
