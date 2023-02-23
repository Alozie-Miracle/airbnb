// import React from "react";

// const Map = () => {
//   return <div>Map</div>;
// };

// export default Map;

// import React from "react";
// import ReactMapGl, { Marker, Popup } from "react-map-gl";
// import getCenter from "geolib/es/getCenter";

// const Map = ({ searchDate }) => {
//   const [selectedLocation, setSelectedLocation] = useState({});

//   const coordinates = searchDate.map((result) => ({
//     longitude: result.long,
//     latitude: result.lat,
//   }));

//   const center = getCenter(coordinates);

//   const [viewport, setViewport] = useState({
//     width: "100%",
//     height: "100%",
//     latitude: center.latitude,
//     longitude: center.longitude,
//     zoom: 11,
//   });

//   return (
//     <ReactMapGl
//       mapStyle="paste the style URL here from mapbox"
//       mapboxAccessToken={process.env.mapbox_key} //"Add the access token here but save in .env file the add here"
//       {...viewport}
//       onViewportChange={(nextViewport) => setViewport(nextViewport)}
//     >
//       {searchDate.map((result) => (
//         <div key={result.id}>
//           <Marker
//             longitude={result.long}
//             latitude={result.lat}
//             offsetLeft={-20}
//             offsetTop={-10}
//           >
//             <p
//               className="cursor-pointer animate-bounce"
//               onClick={() => setSelectedLocation(result)}
//               aria-label="push-pin"
//               role="image"
//             >
//               add marker emoji you can also use images for this isntage of p tag
//             </p>
//           </Marker>
//           {/* popup on marker click */}
//           {selectedLocation.long === result.long ? (
//             <Popup
//               closeOnclik={true}
//               onClose={() => setSelectedLocation({})}
//               latitude={result.lat}
//               longitued={result.long}
//             >
//               <div>
//                 <img
//                   className="w-24 h-24 rounded-md"
//                   src={result.img}
//                   alt={result.title}
//                 />
//                 {result.title}
//               </div>
//             </Popup>
//           ) : (
//             false
//           )}
//         </div>
//       ))}
//     </ReactMapGl>
//   );
// };

// export default Map;
