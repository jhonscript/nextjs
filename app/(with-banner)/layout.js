export default function Layout({ children }) {
  return (
    <div>
      <marquee style={{ background: "#000", color: "#fff" }}>
        Banner compartido entre los layout
      </marquee>
      {children}
    </div>
  );
}
