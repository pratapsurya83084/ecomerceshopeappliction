import React, { useState } from "react";
import Pageheader from "../component/Pageheader";
import Data from "../products.json";
import Search from "./shop/Search";
import Productcard from "./shop/Productcard";
import Pajination from "./shop/Pajination";
import Shopcategory from "./shop/Shopcategory";
import Popularpost from "./shop/Popularpost";
import Tags from "./shop/Tags";

const showresult = "Showing 01-12 of 139 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data); // Fix variable name here
// 
  // Pajination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to change currentPage
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Filter products based on category
  const [selectedCategory, setSelectedCategory] = useState("All");
  //category of products
  const menuItems = [...new Set(Data.map((val) => val.category))];

  //filteritems products
  const filterItems = (currentCategory) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === currentCategory;
    });
    setSelectedCategory(currentCategory);
    setProducts(newItem);
  };

  return (
    <div>
      <Pageheader title="Our Shop Page" curpage="/shop" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showresult}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  ></div>
                  <a className="grid" onClick={() => setGridList(!GridList)}>
                    <i className="icofont-ghost"></i>
                  </a>
                  <a className="list" onClick={() => setGridList(!GridList)}>
                    <i className="icofont-listine-dots"></i>
                  </a>
                </div>
                <div>
                  <Productcard GridList={GridList} products={currentProducts} />
                </div>
              </article>
            </div>
             <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList} />
                <Shopcategory
                  filterItems={filterItems} // Corrected function name
                  setItems={setProducts} // Corrected function name
                  menuItems={menuItems}
                  // setProducts={setProducts}
                  selectedCategory={selectedCategory}
                />
                <Popularpost/>
                <Tags/>
              </aside>


                {/* <Search/> */}
            </div> 
         
          </div>
          {/* pajiantion number boottom */}
          <Pajination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
            activePage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
