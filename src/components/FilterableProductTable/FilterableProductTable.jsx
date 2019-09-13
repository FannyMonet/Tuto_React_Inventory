import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../ProductTable/ProductTable'

class FilterableProductTable extends React.Component {
    render() {
        return (
            <>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </>
        );
    }
}
export default FilterableProductTable;
