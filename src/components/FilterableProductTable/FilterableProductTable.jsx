import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../ProductTable/ProductTable'

class FilterableProductTable extends React.Component {
    state={
        filterText: '',
        inStockOnly: false
    }
    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <>
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} handleChange={this.handleChange}/>
                <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
            </>
        );
    }
}
export default FilterableProductTable;
