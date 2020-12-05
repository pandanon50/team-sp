import React from "react";
import UpFooter from "./UpFooter";
// import styled from "styled-components";

const today = new Date();

const todayString = (num) => {
  if (num === 1) return "Monday";
  else if (num === 2) return "Tuesday";
  else if (num === 3) return "Wednesday";
  else if (num === 4) return "Thursday";
  else if (num === 5) return "Friday";
  else if (num === 6) return "Saturday";
  else return "Sunday";
};

const Today = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "white", padding: "15px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            fontSize: "25px",
            color: "#595959",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Today&#39;s TiKi-TaKa
        </div>
        <div>
          <UpFooter />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSzie: "21px",
          color: "#2f54eb",
          fontWeight: "600",
        }}
      >
        <div style={{ marginRight: "8px" }}>{todayString(today.getDay())}</div>
        <div>{today.getDate()}</div>
      </div>
    </div>
  );
};

export default Today;
