/* eslint-disable react/display-name */
import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'
import ProductComponent from '../components/Product/Product'
// reactstrap components
import { Card, Container, Row, Modal } from 'reactstrap'
import { useQuery, gql } from '@apollo/client'
import { getProducts, deleteProduct } from '../apollo/server'
// core components
import Header from 'components/Headers/Header.jsx'
import CustomLoader from '../components/Loader/CustomLoader'
import DataTable from 'react-data-table-component'
import orderBy from 'lodash/orderBy'
import ActionButton from '../components/ActionButton/ActionButton'

const GET_PRODUCTS = gql`${getProducts}`

const DELETE_PRODUCT = gql`${deleteProduct}`

const Product = props => {
    const [editModal, setEditModal] = useState(false)
    const [product, setProduct] = useState(null)
    const { data, loading, error } = useQuery(GET_PRODUCTS)


    const columns = [
        {
            name: 'Title',
            sortable: true,
            selector: 'title'
        },
        {
            name: 'Sku Code',
            sortable: true,
            selector: 'skuCode',
        },
        {
            name: 'Description',
            sortable: true,
            selector: 'description',
        },
        {
            name: 'Sub Category',
            sortable: true,
            selector: 'subCategory.title',
        },
        {
            name: 'Price',
            sortable: true,
            selector: 'price',
        },
        {
            name: 'Image',
            cell: row => (
                <>
                    {!!row.image && (
                        <img className="img-responsive" src={row.image[0]} alt="img menu" />
                    )}
                    {!row.image && 'No Image'}
                </>
            )
        },
        {
            name: 'Action',
            cell: row => <ActionButton
                deleteButton={true}
                editButton={true}
                row={row}
                mutation={DELETE_PRODUCT}
                editModal={toggleModal}
                refetchQuery={GET_PRODUCTS} />
        }
    ]


    const customSort = (rows, field, direction) => {
        const handleField = row => {
            if (row[field]) {
                return row[field].toLowerCase()
            }

            return row[field]
        }

        return orderBy(rows, handleField, direction)
    }

    const handleSort = (column, sortDirection) =>
        console.log(column.selector, sortDirection)

    const toggleModal = product => {
        setEditModal(prev => !prev)
        setProduct(product)
    }

    const { t } = props
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                < ProductComponent />
                {/* Table */}
                <Row className="mt-5">
                    <div className="col">
                        <Card className="shadow">
                            {error ?
                                <span>
                                    {t('Error')}!
                                </span>
                                :
                                <DataTable
                                    title={'Attributes'}
                                    columns={columns}
                                    data={data ? data.products : []}
                                    pagination
                                    progressPending={loading}
                                    progressComponent={<CustomLoader />}
                                    onSort={handleSort}
                                    sortFunction={customSort}
                                    defaultSortField="title"
                                />
                            }
                        </Card>
                    </div>
                </Row>
                <Modal
                    className="modal-dialog-centered"
                    size="lg"
                    isOpen={editModal}
                    toggle={() => {
                        toggleModal(null)
                    }}>
                    < ProductComponent product={product} />
                </Modal>
            </Container>
        </>
    )
}
export default withTranslation()(Product)
