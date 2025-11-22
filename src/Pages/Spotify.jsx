import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nabvbar from "../Components/Nabvbar";
import Sidebar from "../Components/Sidebar";

const ITunesSongs = () => {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchSongs = () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&limit=10&media=music`)
      .then((res) => res.json())
      .then((data) => {
        setTracks(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("iTunes API error:", err);
        setError("Failed to fetch songs.");
        setLoading(false);
      });
  };

  const handlePlay = (track) => {
    navigate(`/play/${track.trackId}`, {
      state: {
        id: track.trackId,
        name: track.trackName,
        url: track.previewUrl,
        image: track.artworkUrl100,
        desc: track.artistName,
      },
    });
  };

  return (
    <>
      <Nabvbar />
      <Sidebar />
    <div className="pt-28 sm:pt-0 px-4 sm:px-8 bg-gray-900 min-h-screen absolute right-0 w-315 top-18  ">

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 pt-10">
         <div className="flex flex-col sm:flex-row gap-3 w-full">


<div className="w-full flex justify-center px-4 mt-6 ml-100">
  <div className="w-full max-w-sm flex flex-col sm:flex-row gap-3">
    <input
      type="text"
      placeholder="Search for a song..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && fetchSongs()}
      className="w-full px-4 py-2 rounded-2xl text-black bg-gray-300 focus:outline-none"
    />

    <button
      onClick={fetchSongs}
      className="w-full sm:w-auto bg-red-600 text-white font-semibold px-6 py-2 rounded-2xl hover:bg-red-700 transition"
    >
      Search
    </button>
  </div>
</div>



</div>

        </div>

        {loading && <p className="text-white">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

      <div className="
  grid 
  grid-cols-3        /* tighter layout for very small screens */
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-3
  w-full
">
  {tracks.map((track) => (
    <div
      key={track.trackId}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer 
                 hover:scale-105 transform transition duration-200"
      onClick={() => handlePlay(track)}
    >
      <img
        src={track.artworkUrl100}
        alt={track.trackName}
        className="w-full aspect-square object-cover"
      />

      <div className="p-2 text-center">
        <h3 className="text-white font-semibold truncate text-xs">
          {track.trackName}
        </h3>

        <p className="text-gray-400 text-[10px] truncate">
          {track.artistName}
        </p>

        {track.previewUrl && (
          <audio
            controls
            src={track.previewUrl}
            className="w-full mt-1"
          />
        )}
      </div>
    </div>
  ))}
</div>
</div>
    </>
  );
};

export default ITunesSongs;
