import Layout from "../../components/layouts/Layout";
import About from "../../components/about-us/index";
import Membership from "../../components/membership";
import Activity from "../../components/activity";
import Product from "../../components/product";
import Law from "../../components/law";
import News from "../../components/news";
import Answers from "../../components/answers";
import Policy from "../../components/policy";
import Home from "../../components/home";
import { useRouter } from "next/router";
import Row from "react-bootstrap";
export default class extends React.Component {
  static async getInitialProps(context) {
    const slug = context.query.slug;

    return { slug };
  }
  render() {
    const { slug } = this.props;
    // console.log(slug, "slug");
    return (
      <Layout>
        {slug === "home" ? (
          <Home />
        ) : slug === "about us" ? (
          <About />
        ) : slug === "membership" ? (
          <Membership />
        ) : slug === "activities" ? (
          <Activity />
        ) : slug === "products" ? (
          <Product />
        ) : slug === "law" ? (
          <Law />
        ) : slug === "news" ? (
          <News />
        ) : slug === "answers" ? (
          <Answers />
        ) : slug === "policy" ? (
          <Policy />
        ) : null}
      </Layout>
    );
  }
}
