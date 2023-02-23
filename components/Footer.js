import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-42 py-14 bg-gray-100 text-gray-600 mx-5">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">About</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accesibility</p>
          <p>This is not a real site</p>
          <p>A pretty awesome clone</p>
          <p>Referrals accepted</p>
          <p>Miracle Alozie Patrick</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Naco Tech</p>
          <p>Presents</p>
          <p>MERN stack developer</p>
          <p>Frontend</p>
          <p>Backend</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Center</p>
          <p>Trust & Safety</p>
          <p>Tech Stack</p>
          <p>React js, Next js </p>
          <p>tailwind css, Mapbox</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Socials</h5>
          <p>
            <a href="/">LinkedIn</a>
          </p>
          <p>
            <a href="/">Github</a>
          </p>
          <p>
            <a href="/">Twitter</a>
          </p>
          <p>
            <a href="/">Instagram</a>
          </p>
          <p>
            <a href="/">Youtube</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
