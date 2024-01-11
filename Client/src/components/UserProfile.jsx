import React from "react";
import { useState, useEffect } from "react";
import axiosClient from "../axiosClient";
import { Link, useParams } from "react-router-dom";
import "../components/UserProfile.css";
import Avatar from "../assets/user-circle-fill.svg";

function UserProfile() {
  const [userProfile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getUserProfile(`/auth/profile/${id}`);
  }, []);

  const getUserProfile = async (url) => {
    try {
      const response = await axiosClient.get(url);
      setUserProfile(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError("Please sign In to proceed!");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <p className="loading text-success d-flex flex-column align-items-center mt-5">
        Loading User Profile... Please wait!
      </p>
    );
  }

  if (error) {
    return (
      <p className="error text-danger d-flex flex-column align-items-center mt-5">
        {error}
      </p>
    );
  }

  return (
    <>
      <div className="bg w-100 p-5 d-flex justify-content-center align-items-center mb-4">
        <div className="container-profile mt-4 rounded">
          <h1 className="header-title mt-5 d-flex justify-content-center align-items-start">
            PROFILE
          </h1>
          {userProfile && (
            <div className="profile mb-4">
              <div className="user-profile text-light d-flex flex-column justify-content-center align-items-center gap-2 ">
                <div className="profile mt-4 mb-5">
                  <img src={userProfile.avatar || Avatar} />
                </div>
                <h3 className="profile-txt ">Name: {userProfile.name}</h3>
                <h3 className="profile-txt">Email: {userProfile.email}</h3>
                <h3 className="profile-txt">
                  Member since:{" "}
                  {new Date(userProfile.createdAt).toLocaleDateString()}
                </h3>
              </div>
              <Link
                to="/Update"
                className="text-light d-flex justify-content-center align-items-start text-decoration-none"
              >
                <button className="btn btn-lg bg-success mt-4 ">
                  UPDATE ACCOUNT
                </button>
              </Link>
              <Link
                to="/list"
                className="link-signup d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none mt-5 fw-bold fs-5"
              >
                Back to Properties
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
