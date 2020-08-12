/* eslint-disable react/display-name */
import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'
import AttributeComponent from '../components/Attribute/Attribute'
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

const Attribute = props => {
    const [editModal, setEditModal] = useState(false)
    const [attribute, setAttribute] = useState(null)

    const toggleModal = attribute => {
        setEditModal(prev => !prev)
        setAttribute(attribute)
    }


    // const columns = [
    //     {
    //         name: 'Category',
    //         sortable: true,
    //         selector: 'category'
    //     },
    //     {
    //         name: 'Title',
    //         sortable: true,
    //         selector: 'title'
    //     },
    //     {
    //         name: 'Options',
    //         sortable: true,
    //         selector: 'options'
    //     },
    //     {
    //         name: 'Action',
    //         cell: row => <>{actionButtons(row)}</>
    //     }
    // ]

    const actionButtons = row => {
        return (
            <>
                <Badge
                    href="#pablo"
                    onClick={e => {
                        e.preventDefault()
                        toggleModal(row)
                    }}
                    color="primary">
                    Edit
            </Badge>
            &nbsp;&nbsp;
                {loading ?
                    <Loader
                        type="ThreeDots"
                        color="#BB2124"
                        height={20}
                        width={40}
                        visible={deleteLoading}
                    /> :
                    <Badge
                        href="#pablo"
                        color="danger"
                    // onClick={e => {
                    //     e.preventDefault()
                    //     deleteCategory({ variables: { id: row._id } })
                    // }}
                    >
                        {'Delete'}
                    </Badge>
                }
            </>
        )
    }

    const { t } = props
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                < AttributeComponent />
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
                    < AttributeComponent attribute={attribute} />
                </Modal>
            </Container>
        </>
    )
}
export default withTranslation()(Attribute)
