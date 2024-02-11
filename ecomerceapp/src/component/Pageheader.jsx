import React from "react";
import {Link} from 'react-router-dom'
// import Shop from '../Home/Shop'
const Pageheader = ({title,curpage}) => {
  return (
    <div className="pageheader-section">
      <div className="container">
        <div className="row">
          <div className="col-10">
            <div className="pageheader-content">
                <h2>{title}</h2>
                <nav aria-label='breadcrumb'>
                    <ol className="breadecrumb justify-content-center">
                        <li className="breadcrumb-item"> <Link to="/">Home</Link> </li>
                        <li className="breadcrumb-item active "> <Link to="/">{curpage}</Link></li>
                   
                    </ol>
                </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pageheader;
