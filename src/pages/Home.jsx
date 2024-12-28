import React, { useEffect, useState } from "react";
import baseURL from "../API/baseURL";
import About from "../components/About";
import OurProjects from "../components/OurProjects";
import Projects from "../components/Projects";
import Slider from "../components/Slider";
const Home = () => {
  const [Items, setItems] = useState([]);
  const [sliderItems, setSliderItems] = useState([]);
  const getItems = async () => {
    const { data } = await baseURL.get("api/v1/saudi/store/item");
    const allItems = data.data.data;
    setItems(allItems);
  };

  const getSliderItems = async () => {
    const { data } = await baseURL.get("api/v1/saudi/store/slider");
    const sliderItems = data.data;
    setSliderItems(sliderItems);
  };

  useEffect(() => {
    getItems();
    getSliderItems();
  }, []);

  return (
    <div className="">
      <Slider sliderItems={sliderItems} />
      <About />
      <OurProjects />
      <Projects projects={Items} />
    </div>
  );
};

export default Home;
