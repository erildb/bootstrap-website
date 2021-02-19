import React from "react";
import ItemsHeader from "./ItemsHeader";
import Item from "./Item";
import items from "./itemList";
import Footer from "./Footer";

const Content = () => {
  return (
    <div>
      <ItemsHeader />
      <div
        style={{
          marginTop: "30px",
          columnCount: "2",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {items.map(function (item) {
          return (
            <Item
              key={item.title}
              title={item.title}
              description={item.description}
              url={item.url}
              price={item.price}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Content;
