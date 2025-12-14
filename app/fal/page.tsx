"use client";
import { useEffect, useState } from "react";

export default function FalPage() {
  const tarotCards = ["Cups01.jpeg", "Cups02.jpeg", "Cups03.jpeg"];
  const iskambilCards = ["2_of_clubs.png", "3_of_clubs.png", "4_of_clubs.png"];

  const EXPLAINS: Record<string, string> = {
    Cups01: "Duygusal yeni başlangıçlar, sevgi ve şefkat.",
    Cups02: "Uyum, ortaklık ve ilişkilerde denge.",
    Cups03: "Kutlama, dostluk ve topluluk enerjisi.",
    "2_of_clubs": "İş birliği ve ufak başlangıçlar.",
    "3_of_clubs": "Ekip çalışması ve planların ilerlemesi.",
    "4_of_clubs": "Dayanıklılık ve sabitlik.",
  };

  const [tarotCard, setTarotCard] = useState<string | null>(null);
  const [iskambilCard, setIskambilCard] = useState<string | null>(null);

  const [tarotFlipped, setTarotFlipped] = useState(false);
  const [iskambilFlipped, setIskambilFlipped] = useState(false);

  const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  useEffect(() => {
    startDraw();
  }, []);

  function startDraw() {
    setTarotFlipped(false);
    setIskambilFlipped(false);

    const t = pick(tarotCards);
    const i = pick(iskambilCards);

    setTarotCard(t);
    setIskambilCard(i);

    setTimeout(() => setTarotFlipped(true), 600);
    setTimeout(() => setIskambilFlipped(true), 1200);
  }

  function handleAgain() {
    setTarotFlipped(false);
    setIskambilFlipped(false);
    setTimeout(startDraw, 200);
  }

  const keyFrom = (filename: string | null) =>
    filename ? filename.replace(/\..+$/, "") : "";

  return (
    <div style={{ fontFamily: "system-ui, serif", textAlign: "center", padding: 24 }}>
      <style>{`
        .cards { display:flex; gap:20px; justify-content:center; align-items:flex-start; }
        .card { width:170px; height:260px; perspective:1000px; }
        .inner {
          width:100%; height:100%;
          position:relative;
          transform-style:preserve-3d;
          transition: transform 700ms;
        }
        .flipped { transform: rotateY(180deg); }
        .face {
          position:absolute; inset:0;
          backface-visibility:hidden;
          border-radius:12px;
          overflow:hidden;
          box-shadow: 0 6px 18px rgba(0,0,0,0.18);
          background:#fff;
        }
        .back { display:flex; align-items:center; justify-content:center; }
        .front { transform: rotateY(180deg); display:flex; align-items:center; justify-content:center; }
        .card-img { 
          width:100%; 
          height:100%; 
          object-fit:contain; 
          display:block; 
          background:#fff; 
          padding:4px;
        }
        .explain { 
          max-width:520px; 
          margin:18px auto 0; 
          background:#fff; 
          padding:14px; 
          border-radius:12px; 
          box-shadow:0 6px 18px rgba(0,0,0,0.06); 
          text-align:left; 
        }
        .names { margin-top:12px; font-weight:600; }
      `}</style>

      <h1 style={{ fontSize: 26, marginBottom: 12 }}>Fal Ekranı 🔮</h1>

      <div className="cards">
        {/* TAROT */}
        <div className="card">
          <div className={`inner ${tarotFlipped ? "flipped" : ""}`}>
            <div className="face back">
              <img src="/tarot/back.png" alt="back" className="card-img" />
            </div>
            <div className="face front">
              {tarotCard && (
                <img src={`/tarot/${tarotCard}`} alt={tarotCard} className="card-img" />
              )}
            </div>
          </div>
        </div>

        {/* İSKAMBİL */}
        <div className="card">
          <div className={`inner ${iskambilFlipped ? "flipped" : ""}`}>
            <div className="face back">
              <img src="/iskambil/back.png" alt="back" className="card-img" />
            </div>
            <div className="face front">
              {iskambilCard && (
                <img src={`/iskambil/${iskambilCard}`} alt={iskambilCard} className="card-img" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="names">
        {tarotCard && <div>{keyFrom(tarotCard)}</div>}
        {iskambilCard && <div>{keyFrom(iskambilCard)}</div>}
      </div>

      <div className="explain">
        <strong>Tarot:</strong>{" "}
        <span>{EXPLAINS[keyFrom(tarotCard)] ?? "Kısa yorum yok."}</span>
        <br />
        <strong>İskambil:</strong>{" "}
        <span>{EXPLAINS[keyFrom(iskambilCard)] ?? "Kısa yorum yok."}</span>
      </div>

      <button
        onClick={handleAgain}
        style={{
          marginTop: 18,
          background: "#000",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: 999,
          cursor: "pointer",
        }}
      >
        Tekrar Çek
      </button>
    </div>
  );
}
