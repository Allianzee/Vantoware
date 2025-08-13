import React from "react";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#4B0082", // deep purple
        color: "#E0D7F5", // light purple text
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: 20,
        gap: 20,
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: 10 }}>VantoWare External</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: 400, textAlign: "center" }}>
        The ultimate Roblox external utility for power users. Get the edge you
        need to dominate.
      </p>

      <div style={{ display: "flex", gap: 20, marginTop: 30 }}>
        <a
          href="https://discord.gg/yourdiscordlink"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#7289DA", // Discord blurple
            color: "white",
            padding: "12px 24px",
            borderRadius: 8,
            fontWeight: "600",
            textDecoration: "none",
            fontSize: "1.1rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5b6eae")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7289DA")}
        >
          Join Discord
        </a>

        <a
          href="/buy"
          style={{
            backgroundColor: "#9B59B6", // lighter purple button
            color: "white",
            padding: "12px 24px",
            borderRadius: 8,
            fontWeight: "600",
            textDecoration: "none",
            fontSize: "1.1rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7e3a8a")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#9B59B6")}
        >
          Get VantoWare External
        </a>
      </div>
    </main>
  );
}
