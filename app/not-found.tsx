import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        width: "100vw ",
        height: "70vh",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100vw ",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ fontSize: "2.5rem" }}>Page Not Found</h2>
        <div className="spacer"></div>
        <p style={{ fontSize: "1.5rem" }}>Could not find requested resource</p>
        <div className="spacer"></div>
        <Link style={{ fontSize: "1.5rem" }} href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
