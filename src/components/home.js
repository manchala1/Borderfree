import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/home.css";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div class="container">
      <div class="row">
        {users.map((users) => (
          <div class="card col-lg-3">
            <a href="/subhome">
              <img
                class="card-img-top image-main"
                src={users.image}
                alt="Card cap"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">{users.title}</h5>
              <p class="card-text">{users.price}</p>
              <p class="card-text">{users.description}</p>
              <p class="card-text">{users.category}</p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
