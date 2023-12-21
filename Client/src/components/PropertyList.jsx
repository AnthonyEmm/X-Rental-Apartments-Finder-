import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../components/PropertyList.css";
function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getList(`http://localhost:4050/properties`);
  }, []);

  const getList = async (url) => {
    try {
      const response = await axios.get(url);
      setProperties(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-5">
        <div className="list-container border border-secondary rounded d-flex flex-column align-items-center gap-4 p-5">
          <div className="search-tags d-flex flex-column gap-2">
            <h1 className="text-center">Property List</h1>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search by title"
            />
            <div className="tags d-flex justify-content-center gap-4">
              <a href="#">location</a>
              <a href="#">price</a>
              <a href="#">newest</a>
              <a href="#">oldest</a>
              <a href="#">m²</a>
              <a href="#">rooms</a>
            </div>
          </div>

          {properties.map((property) => {
            return (
              <div key={property.id}>
                <p>
                  <img src={property.image} />
                  {/* <img src={property.images[2]} /> */}
                </p>

                <h2>Title: {property.title}</h2>
                {/* <h3>Owner: {property.owner}</h3> */}
                <h3>Description: {property.description}</h3>
                <h3>Property Area: {property.area}</h3>
                <h3>Price: {property.price}</h3>
              </div>
            );
          })}

          <div className="list">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card">
                  <img src="../public/ap.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Flat in Pankow</h5>
                    <p class="card-text">102m², 4 rooms,kitchen included</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="../public/ap.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Flat in Pankow</h5>
                    <p class="card-text">102m², 4 rooms,kitchen included</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="../public/ap.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Flat in Pankow</h5>
                    <p class="card-text">102m², 4 rooms,kitchen included</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="../public/ap.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Flat in Pankow</h5>
                    <p class="card-text">102m², 4 rooms,kitchen included</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="../public/ap.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Flat in Pankow</h5>
                    <p class="card-text">102m², 4 rooms,kitchen included</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="../public/ap.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Flat in Pankow</h5>
                    <p class="card-text">102m², 4 rooms,kitchen included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
