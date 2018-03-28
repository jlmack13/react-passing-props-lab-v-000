import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fruit: [],
            filters: [],
            currentFilter: null
        }
    }

    componentDidMount() {
        this.fetchFruitList();
    }

    fetchFruitList = () => {
        fetch('/api/fruit')
            .then(response => response.json())
            .then(items => this.setState({ items }));
    }

    componentWillMount() {
        this.fetchFilters();
    }

    fetchFilters = () => {
        fetch('/api/fruit_types')
            .then(response => response.json())
            .then(filters => this.setState({ filters }));
    }

    handleFilterChange = (event) => {
        this.setState({currentFilter: event.target.value});
    }

    render() {
        return(
            <FruitBasket />
        )
    }
}

export default App;
