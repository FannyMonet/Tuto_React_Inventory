import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" name="filterText" placeholder="Search ..." value={this.props.filterText} onChange={this.props.handleChange} />
                <p>
                    <input type="checkbox" name="inStockOnly" checked={this.props.inStockOnly} onChange={this.props.handleChange} />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}
export default SearchBar;
