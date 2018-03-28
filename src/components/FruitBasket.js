import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {

  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleFilterChange} />
      <FilteredFruitList
        filter={props.currentFilter} />
    </div>
  );
}

FruitBasket.defaultProps = {
  currentFilter: null,
  updateFilterCallback: () => {},
  fruit: [],
  filters: []
}

export default FruitBasket;
