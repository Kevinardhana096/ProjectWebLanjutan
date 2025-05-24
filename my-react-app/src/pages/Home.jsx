import React from "react";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import EventList from "../components/EventList";
import RecipeRecommendation from "../components/RecipeRecommendation";
import JobList from "../components/JobList";
import Footer from "../components/Footer";

const Home = () => (
  <>
    <Navbar />
    <HeroCarousel />
    <EventList />
    <RecipeRecommendation />
    <JobList />
    <Footer />
  </>
);

export default Home;