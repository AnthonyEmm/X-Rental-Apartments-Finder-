import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../components/PropertyDetails.css";

function PropertyDetails() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getList(`http://localhost:5050/properties`);
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
        <div className="list-container border border-secondary rounded d-flex gap-5 p-5">
          <div className="search-tags d-flex flex-column gap-2">
            <div>
              <div class="row">
                <div class="col-md-5 d-flex flex-column gap-2">
                  <img src="../ap.png" class="img-fluid" alt="Imagem 1" />
                  <img src="../ap.png" class="img-fluid" alt="Imagem 2" />
                  <img src="../ap.png" class="img-fluid" alt="Imagem 3" />
                  <img src="../ap.png" class="img-fluid" alt="Imagem 4" />
                </div>

                <div class="col-md-7 d-flex flex-column gap-2">
                  <img
                    src="../ap.png"
                    class="img-fluid custom-big-image"
                    alt="Imagem 5 (maior)"
                  />
                  <div className="col-md-8 d-flex flex-column gap-2">
                    <img src="../ap.png" class="img-fluid" alt="Imagem 6" />
                    <img src="../ap.png" class="img-fluid" alt="Imagem 7" />
                  </div>
                </div>
              </div>
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

          <div className="list d-flex flex-column gap-3">
            <div className="title-icon d-flex justify-content-between">
              <h2>Flat in Pankow</h2>
              <p className="mt-2">Icon</p>
            </div>
            <div className="text-price">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti nihil odit praesentium deserunt sed fuga ut molestiae
                impedit eum suscipit debitis quasi iusto a velit magnam aut
                dolor, dolores optio.
              </p>
              <p className="d-flex justify-content-end">1.2000 EUR/mo. warm</p>
            </div>
            <hr />
            <div className="map-section d-flex flex-column gap-4 justify-content-center">
              <img className="mapa" src="../map.png" alt="" />
              <button className="btn btn-outline-success">
                Contact the owner
              </button>
              <div className="tags d-flex justify-content-end">
                <a href="#">Get back</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
