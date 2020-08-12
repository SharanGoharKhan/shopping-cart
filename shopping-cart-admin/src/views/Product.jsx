/* eslint-disable react/display-name */
import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'
import ProductComponent from '../components/Product/Product'
// reactstrap components
import { Badge, Card, Container, Row, Modal } from 'reactstrap'
// core components
import Header from 'components/Headers/Header.jsx'
import CustomLoader from '../components/Loader/CustomLoader'
import DataTable from 'react-data-table-component'
import Loader from 'react-loader-spinner'

const loading = false
const error = false
const data = null
const deleteLoading = false

const Product = props => {
    const [editModal, setEditModal] = useState(false)
    const [product, setProduct] = useState(null)

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
                        {/* <Card className="shadow">
                            {error ?
                                <span>
                                    {t('Error')}!
                                </span>
                                :
                                <DataTable
                                    title={'Attributes'}
                                    // columns={columns}
                                    data={data ? data.categories : []}
                                    pagination
                                    progressPending={loading}
                                    progressComponent={<CustomLoader />}
                                // onSort={handleSort}
                                // sortFunction={customSort}
                                // defaultSortField="title"
                                />
                            }
                        </Card> */}
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
