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
                AY BACIM
            </h1>

            {/* Orta buton (daire) - GÜNCEL VE ORTALANMIŞ STİL */}
            <div
                onClick={() => router.push("/fal")}
                style={{
                    width: 190, // Çap
                    height: 190, // Çap
                    borderRadius: "50%",
                    background: "#0a0a0a",
                    color: "white",
                    display: "flex",
                    flexDirection: "column", // Metni dikey (sütun) olarak hizalar
                    alignItems: "center", // Yatayda merkezler
                    justifyContent: "center", // Dikeyde merkezler
                    cursor: "pointer",
                    fontSize: 20,
                    textAlign: "center", // Metni ortalar
                    lineHeight: "1.2", // Satır aralığını daraltır
                    padding: "10px", // İç boşluk ekler
                    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                    userSelect: "none",
                }}
            >
                {/* Metni span'lere bölerek ayrı ayrı satırlarda ortalanmasını sağlıyoruz */}
                <span style={{ fontSize: 18, fontWeight: 'bold' }}>BURAYA TIKLA</span>
                <span style={{ fontSize: 18, fontWeight: 'bold' }}>NEYSE HALİN</span>
                <span style={{ fontSize: 18, fontWeight: 'bold' }}>ÇIKSIN FALIN</span>
            </div>
        </div>
    );
}