"use client";

import Button from "./Button";

const Card = ({ icon, title, description, buttonText, buttonColor }) => (
  <div
    style={{
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "15px",
    }}
  >
    <div
      style={{
        backgroundColor: `${buttonColor}20`,
        borderRadius: "50%",
        padding: "15px",
      }}
    >
      {icon}
    </div>
    <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{title}</h2>
    <p style={{ color: "#666", fontSize: "0.9rem" }}>{description}</p>
    <Button color={buttonColor}>{buttonText}</Button>
  </div>
);

export default Card;
