import starHalf from '../../assets/images/Star0.5.png';
import starEmpty from '../../assets/images/Star0.png';
import starFull from '../../assets/images/Star1.png';
import './CourseCard.css';

function renderStars(rating) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(starFull);
    } else if (rating >= i - 0.5) {
      stars.push(starHalf);
    } else {
      stars.push(starEmpty);
    }
  }

  return stars;
}

function CourseCard({
  thumbnail,
  title,
  description,
  authorName,
  authorJob,
  authorCompany,
  authorAvatar,
  rating,
  reviews,
  price,
}) {
  return (
    <article className="course-card">
      <div className="course-info">
        <img className="thumbnail" src={thumbnail} alt={title} />

        <div className="course-details">
          <h3 className="course-title">{title}</h3>

          <p className="course-description">{description}</p>

          <div className="course-author">
            <img className="author-avatar" src={authorAvatar} alt={authorName} />

            <div className="author-details">
              <strong>{authorName}</strong>
              <p>
                {authorJob} <span className="author-workplace">di {authorCompany}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="course-footer">
        <span className="rating">
          <span className="stars">
            {renderStars(rating).map((star, index) => (
              <img key={index} src={star} alt="star" />
            ))}
          </span>

          <small className="score">
            {rating} ({reviews})
          </small>
        </span>

        <p className="price">$ {price}</p>
      </div>
    </article>
  );
}

export default CourseCard;
