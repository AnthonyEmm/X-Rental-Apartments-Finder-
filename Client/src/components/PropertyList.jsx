import React from "react";
import { useState, useEffect } from "react";
import "../components/PropertyList.css";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useSearchParams } from "react-router-dom";

function PropertyList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams("");
  const [properties, setProperties] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    if (query) {
      fetchProperties(`/properties?${query}`);
    } else {
      fetchProperties(`/properties`);
    }
  }, [query]);

  const fetchProperties = async (url, clear) => {
    try {
      const response = await axiosClient.get(url);

      if (clear) {
        setProperties([...response.data]);
        setPage(1);
      } else {
        setProperties([...properties, ...response.data]);
      }
      if (response.data.length < 6) {
        setIsLastPage(true);
      } else {
        setIsLastPage(false);
      }
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError("Properties not found. Please try again!");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <p className="loading text-success d-flex flex-column align-items-center mt-5">
        Loading... Please wait!
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
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-4 mb-4">
        <div className="d-flex flex-column align-items-center gap-4 p-4 w-75">
          <div className="search-tags d-flex flex-column align-items-center gap-2 w-auto">
            <div className="search-area d-flex justify-content-center gap-2 w-50">
              <input
                className="search w-75 mt-3 mb-5"
                type="text"
                name="search"
                title="Search by Postal Code"
                id="search"
                placeholder="Search by Postal Code..."
                onChange={(e) => {
                  if (e.target.value) {
                    searchParams.set("areaCode", e.target.value);
                  } else {
                    searchParams.delete("areaCode");
                  }
                }}
              />

              <button
                className="btn btn-lg rounded-2 mt-3 mb-5"
                title="Search Property"
                type="button"
                onClick={() => {
                  searchParams.delete("page");
                  fetchProperties(
                    `/properties?${searchParams.toString()}`,
                    true,
                  );
                }}
              >
                Search
              </button>
            </div>
            <div className="tags bg-transparent d-flex justify-content-center gap-4">
              <select
                className="select"
                onChange={(e) => {
                  if (e.target.value) {
                    searchParams.set("area", e.target.value);
                  } else {
                    searchParams.delete("area");
                  }
                }}
              >
                <option value=""> M²</option>
                <option value={50}>0-50</option>
                <option value={100}>50-100</option>
                <option value={150}>100-150</option>
                <option value={200}>150-200</option>
                <option value={300}>200-300</option>
                <option value={400}>300-400</option>
                <option value={500}>400-500</option>
                <option value={1000}>500-1000</option>
              </select>

              <select
                onChange={(e) => {
                  if (e.target.value) {
                    searchParams.set("bedrooms", e.target.value);
                  } else {
                    searchParams.delete("bedrooms");
                  }
                }}
              >
                <option value="">Bedrooms</option>
                <option value={1}> 1</option>
                <option value={1.5}> 1.5</option>
                <option value={2}> 2</option>
                <option value={2.5}> 2.5</option>
                <option value={3}> 3</option>
                <option value={4}> 4</option>
                <option value={5}> 5</option>
              </select>
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    searchParams.set("propertyType", e.target.value);
                  } else {
                    searchParams.delete("propertyType");
                  }
                }}
              >
                <option value="">Type</option>
                <option value={"Apartment"}> Apartment</option>
                <option value={"Cottage"}> Cottage</option>
                <option value={"Duplex"}> Duplex</option>
                <option value={"House"}> House</option>
                <option value={"Studio"}>Studio</option>
              </select>
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    searchParams.set("year", e.target.value);
                  } else {
                    searchParams.delete("year");
                  }
                }}
              >
                <option value="">Year</option>
                <option value={1980}>1900-1980</option>
                <option value={1985}>1980-1985</option>
                <option value={1990}>1985-1990</option>
                <option value={1995}>1990-1995</option>
                <option value={2000}>1995-2000</option>
                <option value={2005}>2000-2005</option>
                <option value={2010}>2005-2010</option>
                <option value={2020}>2010-2020</option>
                <option value={Infinity}>2020 Above</option>
              </select>
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    searchParams.set("price", e.target.value);
                  } else {
                    searchParams.delete("price");
                  }
                }}
              >
                <option value="">Price</option>
                <option value={500}> 0-500 €</option>
                <option value={700}> 500-700 €</option>
                <option value={900}> 700-900 €</option>
                <option value={1200}>900-1200 €</option>
                <option value={1500}> 1200-1500 €</option>
                <option value={2000}> 1500-2000 €</option>
                <option value={3000}> 2000-3000 €</option>
                <option value={Infinity}> Above 3000 €</option>
              </select>
            </div>
          </div>
          <div className="list mt-4 mb-5 text-decoration-none w-100">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
              {properties.map((property) => (
                <div key={property._id}>
                  <div className="card bg-dark">
                    <img
                      src={property.image}
                      className="card-img-top"
                      alt="Property Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{property.title}</h5>
                      <p className="card-text">
                        {property.area}m², {""}
                        {property.bedrooms} room(s) {""}
                      </p>
                      <p className="card-text">
                        Postal Code: {property.areaCode}
                      </p>
                      <p className="card-text">Type: {property.propertyType}</p>

                      <p className="card-text">
                        Price: €{property.price}/month
                      </p>
                      <Link to={`/property/${property._id}`}>
                        <button
                          type="submit"
                          className="btn btn-lg rounded-1"
                          title="Property Details"
                        >
                          VIEW MORE
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {!isLastPage && (
            <Link>
              <button
                type="submit"
                className="load rounded-1"
                onClick={() => {
                  searchParams.set("page", page);
                  setQuery(searchParams.toString());
                  setPage(page + 1);
                }}
              >
                Show More...
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
