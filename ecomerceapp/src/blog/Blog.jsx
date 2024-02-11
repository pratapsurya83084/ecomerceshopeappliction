import React from "react";
import Pageheader from "../component/Pageheader";
// import blogList from "../utilis/blogdata";
import { Link } from "react-router-dom";
const blogList = [
  {
    id: 1,
    imgUrl: "/src/assets/images/blog/01.jpg",
    imgAlt: "Blog Thumb",
    title: "Business Ueporting Rouncil Them Could Plan.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "2",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    id: 2,
    imgUrl: "/src/assets/images/blog/02.jpg",
    imgAlt: "Blog Thumb",
    title: "Financial Reporting Qouncil What Could More.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "8",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    id: 3,
    imgUrl: "/src/assets/images/blog/03.jpg",
    imgAlt: "Blog Thumb",
    title: "Consulting Reporting Qounc Arei Could More.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "1",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    id: 4,
    imgUrl: "/src/assets/images/blog/04.jpg",
    imgAlt: "Blog Thumb",
    title: "Strategic Social Media and of visual design.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "3",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    id: 5,
    imgUrl: "/src/assets/images/blog/05.jpg",
    imgAlt: "Blog Thumb",
    title: "Find the Right Path for your Group Course online.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "5",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    id: 6,
    imgUrl: "/src/assets/images/blog/06.jpg",
    imgAlt: "Blog Thumb",
    title: "Learn by doing with Real World Projects other countries.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "7",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    id: 7,
    imgUrl: "/src/assets/images/blog/07.jpg",
    imgAlt: "Blog Thumb",
    title: "The Importance Of Intrinsic for Students.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "2",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    id: 8,
    imgUrl: "/src/assets/images/blog/08.jpg",
    imgAlt: "Blog Thumb",
    title: "A Better Alternative To Grading Student Writing.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "4",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
  {
    id: 9,
    imgUrl: "/src/assets/images/blog/09.jpg",
    imgAlt: "Blog Thumb",
    title: "The Challenge Global Learning In Public Education.",
    desc: "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
    commentCount: "6",
    btnText: "Read More",
    metaList: [
      {
        iconName: "icofont-ui-user",
        text: "Rajib Raj",
      },
      {
        iconName: "icofont-calendar",
        text: "Jun 05,2022",
      },
    ],
  },
];
const Blog = () => {
  return (
    <div>
      <Pageheader title="Blog page" curpage="/Blog" />
      <div className="blog-section padding-tb section-bg ">
        <div className="container">
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
              {blogList.map((blog, i) => (
                <div key={i} className="col">
                  <div className="post-item">
                    <div className="post-inner">
                      <div className="post-thumb">
                        <Link to={`/blog/${blog.id}`}>
                          <img src={blog.imgUrl} alt="" />
                        </Link>
                      </div>
                      <div className="post-content">
                        <Link to={`/blog/${blog.id}`}>
                          <h4 className="">{blog.title}</h4>
                        </Link>

                        <div className="meta-post">
                          <ul className="lab-ul">
                            {blog.metaList.map((val, i) => (
                              <li key={i}>
                                <i className={val.iconName}></i>
                                {val.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p>{blog.desc}</p>
                      </div>
                      {/* post footer */}

                      <div className="post-footer">
                        <div className="pf-left">
                          <Link
                            to={`/blog/${blog.id}`}
                            className="lab-btn-text"
                          >
                            {blog.btnText}{" "}
                            <i className="icofont-external-link"></i>{" "}
                          </Link>
                        </div>
                        <div className="pf-right">
                          <i className="icofont-comment">
                            <span className="comment">{blog.commentCount}</span>
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
