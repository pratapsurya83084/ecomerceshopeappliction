import React, { useState } from "react";
import Pageheader from "../component/Pageheader";

import { useParams } from "react-router-dom";
import Tags from '../Home/shop/Tags'
import Popularpost from '../Home/shop/Popularpost'
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
const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];
const Singleblog = () => {
  const [blog, setBlog] = useState(blogList); //all blog data are contain in (blog) variable

  const { id } = useParams();
  //console.log(id); // click any images blog we can display each cart detile page with unique id

  const result = blog.filter((b) => b.id === Number(id)); //blog=all data from blogList

  console.log(result);

  return (
    <div>
      <Pageheader title="single blog page" curpage="/Blog/Blog/Details" />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              {/* left side article */}
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  In the past few decades, e-commerce has
                                  revolutionized the way we shop, transfo rming
                                  traditional brick-and-mortar stores into
                                  digital marketplaces accessible from anywhere
                                  with an internet connection. This seismic
                                  shift has not only changed consumer behavior
                                  but has also reshaped entire industries, from
                                  retail to logistics and beyond.
                                </p>
                                <blockquote>
                                  <p>
                                    The Rise of Online Shopping The roots of
                                    e-commerce can be traced back to the early
                                    days of the internet when businesses started
                                    experimenting with online sales. However, it
                                    wasn't until the late 1990s and early 2000s
                                    that e-commerce truly began to take off,
                                    fueled by advancements in technology and
                                    changes in consumer attitudes.
                                  </p>

                                  <cite>
                                    <a href="#">...mellisaa hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Challenges and Opportunities While e-commerce
                                  offers numerous benefits, it also presents
                                  challenges for businesses, particularly small
                                  retailers and traditional brick-and-mortar
                                  stores. Competition is fierce in the digital
                                  marketplace, and standing out among the crowd
                                  requires a strong online presence, effective
                                  marketing strategies, and a seamless shopping
                                  experience for customers. However, e-commerce
                                  also opens up new opportunities for businesses
                                  to reach a global audience, expand their
                                  market reach, and diversify their revenue
                                  streams. By leveraging data analytics,
                                  personalization techniques, and omnichannel
                                  marketing tactics, companies can engage with
                                  customers on a deeper level and create unique
                                  shopping experiences tailored to their needs
                                  and preferences.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  The Future of E-commerce Looking ahead, the
                                  future of e-commerce appears to be filled with
                                  promise and innovation. Emerging technologies
                                  like augmented reality, artificial
                                  intelligence, and voice commerce are poised to
                                  further transform the online shopping
                                  experience, making it more immersive,
                                  interactive, and personalized than ever
                                  before. Moreover, the COVID-19 pandemic has
                                  accelerated the shift towards e-commerce, as
                                  lockdowns and social distancing measures
                                  forced many consumers to shop online out of
                                  necessity. As a result, businesses are
                                  investing more resources into their digital
                                  infrastructure, supply chain logistics, and
                                  customer service capabilities to meet the
                                  growing demand for online shopping.
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/_W3R2VwRyF4?si=X_P5Yqe9ek8MQJsL"
                                    className="video-button popup"
                                    // open new youtube tags using target
                                     target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  E-Commerce Nation is a collaborative community
                                  dedicated to helping ecommerce business owners
                                  on an international scale. They blog about
                                  almost everything related to ecommerce,
                                  including solutions and case studies to
                                  support in-store setup, logistics, online
                                  marketing, conversion, and
                                  internationalization.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agancy</a>
                                    </li>
                                    <li>
                                      <a href="#">Buisness</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>

                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="navigations-part">
                        <div className="left">
                          <a href="#">
                            <i className="icofont-double-left"></i>Previous Blog
                          </a>
                          <a href="#" className="title">
                            Evisculate Parallel Processes Via Technics Sound
                            Models Authoritative
                          </a>
                        </div>
                        <div className="right">
                          <a href="#">
                            <i className="icofont-double-left"></i>Next Artical
                          </a>
                          <a href="#" className="title">
                            Evisculate Parallel Processes Via Technics Sound
                            Models Authoritative
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {/* right side */}
            <div className="col-lg-4 col-12">
              
              <aside>
                <Tags/>
              <Popularpost/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleblog;
