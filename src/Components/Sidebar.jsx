import React from "react";
import { usePlaylistStore } from "../Store/Playliststore";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export default function Sidebar({ isOpen, onClose }) {
  const playlist = usePlaylistStore((state) => state.playlist);
  const removeFromPlaylist = usePlaylistStore((state) => state.removeFromPlaylist);
  const navigate = useNavigate();

  function handlePlay(song) {
    navigate(`/play/${song.id}`, { state: song });
    if (onClose) onClose(); // close mobile sidebar after selecting song
  }

  return (
    <>
   
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-15 left-0 h-full bg-black z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0
          w-full sm:w-70 overflow-y-auto p-5 text-white no-scrollbar `}
      >
    {/* Close Button in Mobile  */}
        <button
          className="sm:hidden absolute top-4 right-4 text-white text-2xl"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div className="border p-3 mb-4">
          <span className="text-xs text-red-600">This section is Under Development</span>
          <p className="text-lg font-semibold mb-3">Create your Playlist</p>
          <button className="bg-gray-700 px-4 py-2 rounded-xl mb-5">
            + Create Playlist
          </button>
        </div>

        <div className="text-start max-h-80 overflow-y-auto mt-4 no-scrollbar">
          <h1 className="text-md font-semibold mb-2">Favourite Playlist</h1>
          {playlist.length === 0 ? (
            <p className="text-sm text-gray-400">No songs added</p>
          ) : (
            playlist.map((song) => (
              <div
                key={song.id}
                className="py-1 px-3 text-sm bg-gray-800 rounded-lg mb-2 flex justify-between items-center cursor-pointer"
              >
                <span onClick={() => handlePlay(song)}>{song.name}</span>
                <button
                  onClick={() => removeFromPlaylist(song.id)}
                  className="text-red-400 hover:text-red-600 text-xs"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <hr className="mt-5 border-gray-600" />

        <div className="mt-4 text-xs text-gray-300">
          <ul className="mb-2">
            <li>About</li>
            <li>Contact</li>
            <li>Linkedin</li>
          </ul>

          <h2>Note:</h2>
          <p>
            This app lets you play your favorite songs with a fun, visual twist. <br />
            See the cool circular sound waves dance around the album cover while the music plays. <br />
            Play, pause, or skip easily with simple controls. <br />
            Adjust the speed if you want the song faster or slower. <br />
            Download your songs anytime. <br />
            Looks good on any screen thanks to a clean, modern design. <br />
            It’s basically a music player that’s fun to watch and easy to use.
          </p>
        </div>
      </div>
    </>
  );
}
