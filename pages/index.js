export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a0dad, #9b30ff)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: 20,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: 10, fontWeight: "bold" }}>
        Welcome to VantoWare
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: 40 }}>
        Your #1 External Utility for Roblox — Safe & Reliable.
      </p>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href="https://discord.gg/yourdiscordlink"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#7289da",
            padding: "15px 35px",
            borderRadius: 8,
            color: "white",
            fontWeight: "600",
            fontSize: "1.1rem",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5b6eae")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#7289da")}
        >
          Join Discord
        </a>

        <a
          href="/download"
          style={{
            backgroundColor: "#9b30ff",
            padding: "15px 35px",
            borderRadius: 8,
            color: "white",
            fontWeight: "600",
            fontSize: "1.1rem",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#7e26cc")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#9b30ff")}
        >
          Get VantoWare External
        </a>
      </div>
    </main>
  );
}
