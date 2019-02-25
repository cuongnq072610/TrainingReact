import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Nav = styled.nav`
    font-family: 'Ubuntu';

    .pagination-info {
        color: #989898;
    }

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
    }
    input[type='number'] {
        text-align: center;
        color: #111111;
        font-weight: bold;
        border: solid 1px #989898;
        padding: 5px;
        max-width: 50px;
    }
`;

const Li = styled.li`
    border: solid 1px #989898;
    border-radius: 0;
    margin-right: 13px;
    font-size: 13px;
    padding: 5px;
    font-family: 'Ubuntu';
    text-align: center;
    color: #989898;
    cursor: pointer;
    &.enabled:active {
        background-color: #8d8d8d;
        color: #fff;
    }
    &.disabled {
        cursor: default;
    }
    &.pagination-info {
        border: none;
    }
`;

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: props.currentPage,
        };
        this.totalPages = Math.ceil(
            props.totalItemCount / props.itemsCountPerPage,
        );
        this.onChangeTextField = this.onChangeTextField.bind(this);
        this.goToPage = this.goToPage.bind(this);
    }

    onChangeTextField(event) {
        const { value } = event.currentTarget;

        this.setState({
            pageNumber: value,
        });
    }

    goToPage(pageNumber) {
        const { goToPage } = this.props;
        const nextPageNumber = typeof pageNumber === 'number' ? pageNumber : 1;

        if (
            nextPageNumber <= this.totalPages &&
            nextPageNumber >= 1
        ) {
            goToPage(nextPageNumber);
        }
    }

    render() {
        const { previousText, nextText, currentPage } = this.props;
        return (
            <Nav aria-label="...">
                <ul className="pagination">
                    <Li
                        className={`page-item ${
                            currentPage === 1 ? 'disabled' : 'enabled'
                        }`}
                        onClick={() => this.goToPage(currentPage - 1)}
                    >
                        <span>{previousText}</span>
                    </Li>
                    <Li
                        className={`page-item ${
                            currentPage === this.totalPages
                                ? 'disabled'
                                : 'enabled'
                        }`}
                        onClick={() => this.goToPage(currentPage + 1)}
                    >
                        <span>{nextText}</span>
                    </Li>
                    <Li className="pagination-info">{`Page ${currentPage} of ${
                        this.totalPages
                    } | Go to page`}</Li>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            this.goToPage(this.state.pageNumber);
                        }}
                    >
                        <input
                            type="number"
                            onChange={this.onChangeTextField}
                            name="jump-page"
                            value={this.state.pageNumber}
                        />
                    </form>
                </ul>
            </Nav>
        );
    }
}

Pagination.propTypes = {
    /**
     * Text of the previous button
     */
    previousText: PropTypes.string,
    /**
     * Text of the next button
     */
    nextText: PropTypes.string,
    /**
     * Function handle click go to page
     */
    goToPage: PropTypes.func,
    /**
     * Current number Page
     */
    currentPage: PropTypes.number.isRequired,
    /**
     * Total item on all page
     */
    totalItemCount: PropTypes.number.isRequired,
    /**
     * Total item on one page
     */
    itemsCountPerPage: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
    previousText: 'Previous',
    nextText: 'Next',
    goToPage: () => {},
    itemsCountPerPage: 10,
};

export default Pagination;
