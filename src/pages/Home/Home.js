import React from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

const Home = () => {
  return (
    <Layout>
      <section id="home">
        <Section1 />
      </section>
      <section id="about">
        <Section2 />
      </section>
      <section id="menuSection">
        <Section3 />
      </section>
      <section id="shop">
        <Section4 />
      </section>
      <section id="blog">
        <Section5 />
      </section>
      <section id="contact">
        <Section6 />
      </section>
      <Section7 />
    </Layout>
  );
};

export default Home;