import React, { useState } from "react";

const reviwtitle = "Add Review";
let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];
const Review = () => {
  const [reviewshow, setReviewShow] = useState(true);

  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewshow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewshow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewshow)}>
          Reviews 4
        </li>
      </ul>
      {/* desc and review content */}
      <div
        className={`review-content ${
          reviewshow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div>
                  <img src={review.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on ">
                      <a href="#" className="">
                        {review.name}
                      </a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* add review */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>
              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full name"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="enter email"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span>Your Ratings</span>
                    <i class="icofont-ui-rating"></i>
                    <i class="icofont-ui-rating"></i>
                    <i class="icofont-ui-rating"></i>
                    <i class="icofont-ui-rating"></i>
                    <i class="icofont-ui-rating"></i>
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    id="message"
                    rows="8"
                    placeholder="type here message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button bg-danger">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            minus voluptatum cupiditate animi! Nihil, earum qui eum
            exercitationem modi ut quas voluptatibus assumenda veniam iusto
            tenetur ea unde ipsum sequi. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Magnam quis reprehenderit corporis eveniet
            repudiandae fugit dicta minus, provident perspiciatis dolor vero
            odio officiis doloremque earum obcaecati. Magni quos itaque labore!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quis eaque impedit, at soluta accusamus facere quisquam cumque ad
            autem molestias quasi vitae numquam ipsum dolore a, cum dolor
            tenetur.
          </p>
          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>architecto eum a? Ipsum tenetur iste nostrum.</li>
                <li>architecto eum a? Ipsum tenetur iste nostrum.</li>
                <li>Ipsum tenetur iste nostrum.</li>
                <li>Ipsum tenetur iste nostrum.</li>
                <li>Ipsum tenetur iste nostrum.</li>
              </ul>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            minus voluptatum cupiditate animi! Nihil, earum qui eum
            exercitationem modi ut quas voluptatibus assumenda veniam iusto
            tenetur ea unde ipsum sequi. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Magnam quis reprehenderit corporis eveniet
            repudiandae fugit dicta minus, provident perspiciatis dolor vero
            odio officiis doloremque earum obcaecati. Magni quos itaque labore!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quis eaque impedit, at soluta accusamus facere quisquam cumque ad
            autem molestias quasi vitae numquam ipsum dolore a, cum dolor
            tenetur.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
