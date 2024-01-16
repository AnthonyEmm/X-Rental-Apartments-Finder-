import { AuthContext } from "../context/AuthProvider";
import { useContext, useState } from "react";
import axiosClient from "../axiosClient";
import { useNavigate, Link } from "react-router-dom";
import "./DeleteProfile.css";

function DeleteUserProfile({ userId }) {
  const { setUser } = useContext(AuthContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const apiUrl = `http://localhost:4050/auth/delete/${userId}`;
      const response = await axiosClient.post(apiUrl);
      console.log(response.data);
      setSuccess(true);
      setUser(null);
      navigate("/login");
      setError("");
    } catch (error) {
      console.error("Error deleting user profile", error);
      setError("Error deleting user profile. Please try again");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div
      className="delete-main d-flex
    flex-column
    justify-content-center
    align-items-center mt-5 p-5 gap-5"
    >
      <h1 className="warning text-danger fw-bold">WARNING!</h1>
      <h4
        className="warning text-danger d-flex
        flex-column
        justify-content-center
        align-items-center mt-4 "
      >
        Are you sure you want to delete your profile?
      </h4>
      <p className="warning text-danger fw-bold">
        All your information will be lost including listed properties
      </p>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="btn btn-lg mt-5 mb-4 rounded-2"
      >
        {isDeleting ? "Deleting..." : "Delete Profile"}
      </button>
      <Link to="/profile" className="back text-decoration-none fw-bolder mb-5">
        Back to Profile Page
      </Link>
      {error && (
        <p style={{ color: "red" }}>
          {error ? "Error deleting user profile. Please try again" : ""}
        </p>
      )}
      {success && (
        <p style={{ color: "green" }}>
          {success ? "Profile deleted Successfully" : ""}
        </p>
      )}
    </div>
  );
}

export default DeleteUserProfile;
