import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1220",
          borderRadius: "110px",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "80px",
            background: "linear-gradient(135deg, #2563EB, #3B82F6)",
            color: "white",
            fontSize: "180px",
            fontWeight: 800,
            fontFamily: "Arial",
          }}
        >
          T
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}