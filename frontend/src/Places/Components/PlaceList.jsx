import React from "react";
import "./PlaceList.css";
import Card from "../../Shared/Components/UIElements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ items }) => {
  if (items.lenght === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Place found</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          address={place.address}
          creatorID={place.creator}
          description={place.description}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
