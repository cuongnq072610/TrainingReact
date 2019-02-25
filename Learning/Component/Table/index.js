import React from 'react';
import ReactTable from 'react-table';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'react-table/react-table.css';

const Wrapper = styled.div`
    .table-name {
        color: #111111;
        font-weight: bold;
        font-family: "Ubuntu";
        font-size: 24px;
        text-align: left;
    }
    & .ReactTable {
        border: none;
        font-family: "Ubuntu";
        .rt-tbody .rt-tr-group {
            border-bottom: none;
            &:nth-child(1n) {
                background-color: #f1f1f1;
            }
            &:nth-child(2n) {
                background-color: #f9f9f9;
            }
        }
        .rt-tbody .rt-td,
        .rt-table > .rt-thead > .rt-tr .rt-th {
            border-right: 2px solid #fff;
            &:last-child {
                border-right: none;
            }
        }
        .rt-table > .rt-thead > .rt-tr {
            background-color: #dddddd;
            .rt-th {
                text-align: left;
                font-size: 17px;
                font-weight: bold;
                padding: 13px 5px;
                vertical-align: middle;
            }
        }
        .action-icon {
            display: inline-block;
            margin: 0 3px;
        }
        .pagination-bottom {
            margin-top: 20px;
            nav {
                float: right;
            }
        }
    }
`;

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { title, ...remainProps } = this.props;

        return (
            <Wrapper>
                {title && <span className="table-name">{title}</span>}
                <ReactTable {...remainProps} />
            </Wrapper>
        );
    }
}
Table.propTypes = {
    /**
     * data to show on Table
     */
    data: PropTypes.array,
    /**
     * Name of the table.
     */
    title: PropTypes.string,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * Title of the column. (Custom header components id need)
             */
            Header: PropTypes.node,
            /**
             * Component that used to render table cell.
             */
            Cell: PropTypes.func,
            /**
             * Name of the column.
             * Can custom value accessors;
             */
            accessor: PropTypes.string.isRequired,
            /**
             * Required if accessor is not a string
             */
            id: PropTypes.string,
        })
    ).isRequired,
    /**
     * Pagination Component
     */
    PaginationComponent: PropTypes.func,
};

Table.defaultProps = {
    data: [],
    columns: [],
    title: '',
};
export default Table;
