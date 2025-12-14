"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f5f1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        fontFamily: "serif",
      }}
    >
      {/* Logo / Yazı */}
      <h1 style={{ fontSize: 36, letterSpacing: 1 }}>
        AYBACIM
      </h1>

      {/* Orta buton (daire) */}
      <div
        onClick={() => router.push("/fal")}
        style={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "#0a0a0a",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: 20,
          boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
          userSelect: "none",
        }}
      >
        FALA BAK
      </div>
    </div>
  );
}
