import React from "react";
import { useState, useEffect } from "react";
import axiosClient from "../axiosClient";
import { useParams } from "react-router-dom";
function UserProfile() {
  const [userProfile, setUserProfile] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUserProfile(`/auth/profile/${id}`);
  }, []);

  const getUserProfile = async (url) => {
    try {
      const response = await axiosClient.get(url);
      setUserProfile(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="header-title text-light mt-5 d-flex justify-content-center align-items-center ">
        PROFILE
      </h1>
      {userProfile && (
        <div className="profile d-flex justify-content-center align-items-center">
          <div className="user-profile text-light ">
            <p className="profile mt-2">
              <img src={userProfile.avatar} />
            </p>
            <h3>Name: {userProfile.name}</h3>
            <h3>Email: {userProfile.email}</h3>
            <button className="btn btn-lg bg-success mt-3">Contact</button>
          </div>
        </div>
      )}
    </>
  );
}

export default UserProfile;
