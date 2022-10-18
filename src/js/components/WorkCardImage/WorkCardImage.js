import "./WorkCardImage.scss";

export default function WorkCardImage({ image, alt }) {
  return (
    <div className="img-outer">
      <img
        className="img-inner"
        src={"https://images.squarespace-cdn.com/content/v1/5d17ce5d2eb7e50001d55e3d/1562555753986-E6TYRJ77IIMK4XXZINB8/d11.jpg"}
        alt={alt}
      />
    </div>
  );
}
