import React, { useEffect } from "react";
import Header from "../components/header/Header";
import CarouselView from "../components/carousel/CarouselView";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries, loadMore } from "../reducers/countrySlice";
import DataView from "../components/dataview/DataView";
import Footer from "../components/footer/Footer";

const HomeView = () => {
  const dispatch = useDispatch();
  const { countries, visible, status, error, region } = useSelector(
    (state) => state.country
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCountries());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  const onLoadMore = () => dispatch(loadMore());

  let filteredCountries = countries;
  if (region !== "all") {
    filteredCountries = filteredCountries.filter((country) => country.region === region);
  }

  const selectedCountries = filteredCountries.slice(0, visible);

  console.log(selectedCountries);

  return (
    <div className="home-container">
      <Header region={region} />
      <div className="home-content">
        <CarouselView countries={selectedCountries} />
        <DataView countries={selectedCountries} onLoadMore={onLoadMore} />
        <Footer />
      </div>
    </div>
  );
};

export default HomeView;
