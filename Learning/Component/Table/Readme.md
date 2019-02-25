Table example with default props (use react-table):

```js
const { Button, Modal, ModalHeader, ModalBody, ModalFooter } = require('reactstrap');
const StatusText = require('../StatusText').default;
const IconAction = require('../IconAction').default;
const Pagination = require('../Pagination').default;

const columns = [
    {
        Header: 'Assigned To',
        accessor: 'assignedTo',
    },
    {
        Header: 'Tracking No',
        accessor: 'trackingNo',
    },
    {
        Header: 'Delivery Date',
        accessor: 'deliveryDate',
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: (props) => <StatusText status={props.value} />,
    },
    {
        Header: 'Notes',
        accessor: 'notes',
    },
    {
        Header: 'Action',
        Cell: () => (<div>{icons.map(item => <IconAction {...item} />)}</div>),
        accessor: 'action',
    },
];
const icons = [
    {
        action: deleteItem,
        icon: <i className="icon-content-text">...</i>,
    },
    {
        icon: <i className="material-icons">arrow_downward</i>,
        action: deleteItem,
    },
    {
        icon: <i className="material-icons">share</i>,
        action: deleteItem,
    },
];
const deleteItem = () => {

}
const dataPage1 = [
    {
       assignedTo: 'D16285C',
       trackingNo: '16257811',
       status: 'Completed',
       deliveryDate: '15/1/2019',
       notes: '-',
    },
    {
       assignedTo: 'D16286D',
       trackingNo: '16257812',
       status: 'Partial',
       deliveryDate: '15/1/2019',
       notes: 'Wrong order',
    },
    {
       assignedTo: 'D16287E',
       trackingNo: 'D16287E',
       status: 'Completed',
       deliveryDate: '15/1/2019',
       notes: '-',
    },
    {
       assignedTo: 'D16288F',
       trackingNo: '16257814',
       status: 'Failed',
       deliveryDate: '15/1/2019',
       notes: 'Vehicle breakdown',
    },
    {
       assignedTo: 'D16289G',
       trackingNo: '16257815',
       status: 'Completed',
       deliveryDate: '15/1/2019',
       notes: '-',
    },
];
const dataPage2 = [
    {
       assignedTo: 'D16285C',
       trackingNo: '16257811',
       status: 'Completed',
       deliveryDate: '15/1/2019',
       notes: '-',
    },
    {
       assignedTo: 'D16286D',
       trackingNo: '16257812',
       status: 'Partial',
       deliveryDate: '15/1/2019',
       notes: 'Wrong order',
    },
];
const allData = {
    1: dataPage1,
    2: dataPage2,
};

const itemsCountPerPage = 5;
initialState = {
  data: dataPage1,
  currentPage: 1,
};
const handlePaging = (pageNumber) => {
    setState({
        currentPage: pageNumber,
        data: allData[pageNumber],
    })
}
<Table
    columns={columns}
    data={state.data}
    onPaging={() => {}}
    showPagination
    pageSizeOptions={[5, 10, 20, 25, 50, 100]}
    defaultPageSize={5}
    title="Today"
    PaginationComponent={() => <Pagination
        itemsCountPerPage={itemsCountPerPage}
        totalItemCount={dataPage1.length + dataPage2.length}
        currentPage={state.currentPage}
        goToPage={handlePaging}
    />}
/>
```