interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

const StarRating = ({ rating, maxStars = 5 }: StarRatingProps) => {
  return (
    <div className="flex text-yellow-400">
      {Array.from({ length: maxStars }).map((_, i) => (
        <span key={i} className="material-icons text-sm">
          {i < rating ? "star" : "star_border"}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
