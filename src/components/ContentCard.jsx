function ContentCard({ title, description }) {
  return (
    <div className="card my-3">
      <h3 style={{ color: "#1e40af", marginBottom: "8px" }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ContentCard;
