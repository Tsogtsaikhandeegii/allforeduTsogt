import WPAPI from 'wpapi';
import React from 'react';
import Layout from "../components/layouts/Layout";
import Config from "../config";
import Home from "../components/home"

// const wp = new WPAPI({ endpoint: Config.apiUrl });

export default class extends React.Component {
  // static async getInitialProps() {
  //   let apiMethod = wp.categories();

  //   const mainTabCategory = await apiMethod
  //     .parent(21)
  //     .embed();

  //   return { mainTabCategory };
  // }

  // return() {
  render() {
    return (
      <Layout>
        <Home />
      </Layout >
      
    );
  }
  // }
}

