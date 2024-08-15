import Rating from "../ui/rating";

export default function Review({
  comment,
  rating,
  reviewerName,
  reviewerEmail,
}) {
  return (
    <div>
      <div className="flex justify-between py-3">
        <h3 className="text-xl">{comment}</h3>
        <Rating className={`bg-blue-600`}>{rating}</Rating>
      </div>
      <div className="flex gap-3">
        <span className="text-sm">{reviewerName}</span>
        <a className="text-sm" href={`mailto:${reviewerEmail}`}>
          {reviewerEmail}
        </a>
      </div>
    </div>
  );
}
