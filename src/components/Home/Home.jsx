import React from "react";
import Grid from "@material-ui/core/Grid";
import { Cards } from "./Cards";
import { HomeChart } from "./HomeChart";
import { HomeAccordion } from "./Accordion";
import { MusicCard } from "./MusicCard";
import image1 from "../../assets/images/01.jpg";
import image2 from "../../assets/images/02.jpg";

const Home = () => {
  return (
    <div style={{ marginTop: 20 }}>
      <Cards />
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={12} sm={12} md={6} lg={9}>
          <HomeChart />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <HomeAccordion />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MusicCard img={image1} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MusicCard img={image2} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
