import React from "react";
import { useState, useEffect } from "react";
import axiosClient from "../axiosClient";
import { Link, useParams } from "react-router-dom";
import "../components/UserProfile.css";
import Avatar from "../assets/user-circle-fill.svg";

function UserProfile({ showOwner }) {
  const [userProfile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id && showOwner) {
      getUserProfile(`/auth/profile/${id}`);
    } else {
      getUserProfile(`/auth/profile`);
    }
  }, [id]);

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
      <p className="loading text-success d-flex flex-column align-items-center mt-5 mb-5 p-5">
        Loading User Profile... Please wait!
      </p>
    );
  }

  if (error) {
    return (
      <p className="error text-danger d-flex flex-column align-items-center mt-5 mb-5">
        {error}
      </p>
    );
  }

  return (
    <>
      <div className="bg w-100 d-flex justify-content-center align-items-center mb-4">
        <div className="container-profile mt-4 rounded">
          <h1 className="header-title mt-5 d-flex justify-content-center align-items-start">
            PROFILE
          </h1>
          {userProfile && (
            <div className="profile">
              <div className="user-profile text-light d-flex flex-column justify-content-center align-items-center gap-2 ">
                <div className="profile mt-4 mb-5">
                  <img src={userProfile.avatar || Avatar} />
                </div>
                <div className="profile-txt ">
                  <span>Name:</span> {userProfile.name}
                </div>
                <div className="profile-txt">
                  <span>Email:</span> {userProfile.email}
                </div>
                <div className="profile-txt">
                  <span>Member since:</span>{" "}
                  {new Date(userProfile.createdAt).toLocaleDateString()}
                </div>
              </div>

              {!showOwner && (
                <>
                  <Link
                    to="/Update"
                    className="text-light d-flex justify-content-center align-items-start text-decoration-none"
                  >
                    <button className="btn btn-lg rounded-2 mt-4">
                      UPDATE ACCOUNT
                    </button>
                  </Link>
                  <Link
                    to="/delete-profile"
                    className="link-signup d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none mt-5 fw-bold fs-5"
                  >
                    DELETE ACCOUNT
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
