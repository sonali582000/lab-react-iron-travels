import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import React from "react";
import classes from "../styles/TravelList.module.css";

const TravelList = () => {
  const [plan, setPlan] = useState(travelPlansData);

  const deleteItem = (item) => {
    const filtereditems = plan.filter((items) => {
      return items.id !== item;
    });
    setPlan(filtereditems);
    console.log(filtereditems);
  };

  return (
    <>
      {plan.map((items) => {
        return (
          <React.Fragment key={items.id}>
            <div className={classes.container}>
              <div>
                <img src={items.image} />
              </div>
              <div>
                <h4>
                  {items.destination}
                  <span> ({items.days} Days)</span>
                </h4>
                <p>{items.description}</p>
                <p>
                  <strong>Price: </strong>
                  {items.totalCost}€
                </p>

                {items.totalCost >= 1500 ? (
                  <span style={{ backgroundColor: "blue", color: "#fff" }}>
                    Premium
                  </span>
                ) : (
                  <span style={{ backgroundColor: "green" }}>Great Deal</span>
                )}
                <span>
                  {items.allInclusive ? (
                    <span
                      style={{
                        backgroundColor: "blue",
                        color: "#fff",
                        marginLeft: "5px",
                      }}
                    >
                      allInclusive
                    </span>
                  ) : (
                    <span></span>
                  )}
                </span>
                <div>
                  <button onClick={() => deleteItem(items.id)}>Delete</button>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default TravelList;
