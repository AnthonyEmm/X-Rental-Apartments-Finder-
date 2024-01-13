import { useState } from "react";
import axiosClient from "../axiosClient";
import { useNavigate } from "react-router-dom";

function DeleteUserProfile({ userId }) {
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
      <h4
        className="warning text-danger d-flex
        flex-column
        justify-content-center
        align-items-center mt-5 p-5 gap-5"
      >
        Are you sure you want to delete your profile?
      </h4>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="btn btn-lg bg-success mt-5 mb-5 text-light"
      >
        {isDeleting ? "Deleting..." : "Delete Profile"}
      </button>
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
