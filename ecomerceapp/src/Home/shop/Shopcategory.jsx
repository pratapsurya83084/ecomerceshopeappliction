import React from 'react';

const ShopCategory = ({ filterItem, setItem, menuItems, setProducts, selectCategory }) => {
  return (
    <>
      <div className='widget-header'>
        <h5 className='ms-2'>All Categories</h5>
      </div>
      <div>
        {menuItems.map((category, id) => (
          <button
            className={`m-2 ${selectCategory === 'All' ? 'bg-warning' : ''}`}
            key={id}
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default ShopCategory;
