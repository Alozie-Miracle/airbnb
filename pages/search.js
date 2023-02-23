import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InforCard from "@/components/InforCard";
// import Map from "@/components/Map";
import { searchDate } from "@/places";
import { useRouter } from "next/router";
import React from "react";

const Search = () => {
  const router = useRouter();

  const { location, numberOfGuest, startDate, endDate } = router.query;
  return (
    <div className="h-screen ">
      <Header
        placeholder={`${location} - ${startDate} - ${endDate} - ${numberOfGuest} ${
          numberOfGuest > 1 ? "guests" : "guest"
        }`}
      />
      <main className="flex max-w-screen-2xl mx-auto sm:flex-col-reverse md:flex-col-reverse lg:flex-row">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs text-gray-500">
            300+ Stays - {startDate} - {endDate} - for {numberOfGuest}
            {numberOfGuest > 1 ? " guests" : " guest"}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filter</p>
          </div>

          <div className="flex flex-col mb-5">
            {searchDate.map(
              ({
                img,
                long,
                lat,
                location,
                desc,
                title,
                price,
                id,
                star,
                total,
              }) => (
                <InforCard
                  key={id}
                  img={img}
                  long={long}
                  lat={lat}
                  location={location}
                  desc={desc}
                  title={title}
                  price={price}
                  star={star}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        {/* <section className=" xl:inline-flex xl:min-w-[600px]">
          <Map searchDate={searchDate} />
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default Search;
