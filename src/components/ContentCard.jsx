function ContentCard({ title, description }) {
  return (
    <div className="border p-4 rounded shadow my-2">
      <h2 className="font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ContentCard;
