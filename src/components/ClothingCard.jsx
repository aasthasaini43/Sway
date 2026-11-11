function ClothingCard({ image, name, category }) {
  return (
    <div className="clothing-card">
      <div className="clothing-image">
        <img src={image} alt={name} />
      </div>

      <div className="clothing-info">
        <h3>{name}</h3>
        <p>{category}</p>
      </div>
    </div>
  );
}

export default ClothingCard;