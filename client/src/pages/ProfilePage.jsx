import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const ProfilePage = () => {
  const [selectedImg, setSelectedImg] = useState(false);
  const [name, setName] = useState("Martin Jhonson");
  const [bio, setBio] = useState("Hello everyone, I am using QuickChat!");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/')
  };

  return (
    <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-10 flex-1">
          <h3 className="text-lg">Profile details</h3>

          <label htmlFor="avatar" className="gap-3 flex items-center">
            <input
              onChange={(e) => setSelectedImg(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg,"
              hidden
            />
            <img
              src={
                selectedImg
                  ? URL.createObjectURL(selectedImg)
                  : assets.avatar_icon
              }
              alt="Avatar"
              className={`w-12 h-12 ${selectedImg && "rounded-full"}`}
            />
            Upload Profile Image
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2"
            required
          />

          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Write profile bio"
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2S"
            rows={4}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer"
          >
            Save
          </button>
        </form>
        <img
          className="max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10"
          src={assets.logo_icon}
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
