import React from "react";
import { Images } from "./images";
const Content = () => {
  return (
    <>
      <div className="content">
        <img src={Images.banner} alt="banner" className="bannner"></img>
      </div>
      <div>
        <h4>No 1 e-commerce bussiness</h4>
        <div className="cardParent">
          <div className="cards">
            <img src={Images.logo} className="cardImage" />
            <br />
            <span>
              <p style={{ display: "inline" }}>name :</p> {"MY name"}
            </span>
            <br />
            <span>
              <p style={{ display: "inline" }}>Price:</p>
              {"HIGH"}
            </span>
            <br />
            <span>
              <p style={{ display: "inline" }}>Price:</p>
              {"LOW"}
            </span>
          </div>
          <div className="cards">
            <img src={Images.logo} className="cardImage" />
            <br />
            <span>
              <p style={{ display: "inline" }}>name :</p> {"MY name"}
            </span>
            <br />
            <span>
              <p style={{ display: "inline" }}>Price:</p>
              {"HIGH"}
            </span>
            <br />
            <span>
              <p style={{ display: "inline" }}>Price:</p>
              {"LOW"}
            </span>
          </div>
          <div className="cards">
            <img src={Images.logo} className="cardImage" />
            <br />
            <span>
              <p style={{ display: "inline" }}>name :</p> {"MY name"}
            </span>
            <br />
            <span>
              <p style={{ display: "inline" }}>Price:</p>
              {"HIGH"}
            </span>
            <br />
            <span>
              <p style={{ display: "inline" }}>Price:</p>
              {"LOW"}
            </span>
          </div>
          <div className="cards">
            <img src={Images.logo} className="cardImage" />
            <br />
            <span>
              <p style={{ display: "inline" }}>name :</p> {"MY name"}
            </span>
            <br />
            <span>
              <p style={{ display: "inline" }}>Price:</p>
              {"HIGH"}
            </span>
            <br />
            <span>
              <p style={{ display: "inline" }}>Price:</p>
              {"LOW"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
