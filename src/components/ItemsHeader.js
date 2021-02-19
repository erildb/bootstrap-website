import React from "react";

const Items = () => {
  return (
    <div className="container">
      <div
        style={{
          columnCount: "2",
          width: "100%",
          paddingTop: "50px",
        }}
      >
        <div>
          <h4>Latest</h4>
          <p>Most recently added to our collection.</p>
        </div>
        <button className="ui violet basic button" style={{ float: "right" }}>
          View all
        </button>
      </div>
    </div>
  );
};

export default Items;
