const Button = ({ children, color, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: "10px 20px",
      backgroundColor: color,
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "100%",
      fontWeight: "bold",
    }}
  >
    {children}
  </button>
);

export default Button;
