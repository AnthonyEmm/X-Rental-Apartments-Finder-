import React from "react";
import "../components/PropertyList.css";
function PropertyList() {
  return (
    <div className="bg text-white">
      <div className="container-main d-flex justify-content-center align-items-center d-flex mt-5">
        <div className="list-container border border-secondary rounded d-flex flex-column align-items-center gap-4 p-5">
          <div className="search-tags d-flex flex-column gap-2">
            <h1 className="text-center text-success">Property List</h1>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search by title..."
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
          {/* <div className="list">
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
          </div> */}
          {/* <button type="button" className="btn btn-outline-success">
            Save
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
