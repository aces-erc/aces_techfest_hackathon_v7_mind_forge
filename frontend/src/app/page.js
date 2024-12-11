import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home({ children, color, onClick }) {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}
        >
          Registration
        </h1>
        <p style={{ color: "#666", marginBottom: "30px" }}>
          Choose your role and register
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <Card
            icon="👤"
            title="Patient"
            description="Register as a patient to book emergency ambulance services"
            buttonText="Register as Patient"
            buttonColor="#4285F4"
          />
          <Card
            icon="🚑"
            title="Ambulance Driver"
            description="Register as an ambulance driver to provide emergency services"
            buttonText="Register as Driver"
            buttonColor="#34A853"
          />
          <Card
            icon="🏥"
            title="Hospital"
            description="Register your hospital to coordinate emergency services"
            buttonText="Register Hospital"
            buttonColor="#EA4335"
          />
        </div>

        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <p style={{ color: "#666", marginBottom: "10px" }}>
            Already have an account?
          </p>
          <Button color="#1a202c">Login Here</Button>
        </div>
      </div>
    </>
  );
}
