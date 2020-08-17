/* eslint-disable react/display-name */
import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'
import { useQuery, gql, useMutation } from '@apollo/client'
import AttributeComponent from '../components/Attribute/Attribute'
// reactstrap components
import { Badge, Card, Container, Row, Modal } from 'reactstrap'
// core components
import Header from 'components/Headers/Header.jsx'
import CustomLoader from '../components/Loader/CustomLoader'
import DataTable from 'react-data-table-component'
import Loader from 'react-loader-spinner'
import orderBy from 'lodash/orderBy'
import { attributes, deleteAttribute } from '../apollo/server'

const GET_ATTRIBUTES = gql`
  ${attributes}
`

const DELETE_ATTRIBUTE = gql`${deleteAttribute}`



const Attribute = props => {
    const [editModal, setEditModal] = useState(false)
    const [attribute, setAttribute] = useState(null)

    const [deleteAttribute, { loading: deleteLoading }] = useMutation(DELETE_ATTRIBUTE, { refetchQueries: [{ query: GET_ATTRIBUTES }] })

    const { data, loading, error } = useQuery(GET_ATTRIBUTES)

    const toggleModal = attribute => {
        setEditModal(prev => !prev)
        setAttribute(attribute)
    }

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

    const columns = [
        {
            name: 'Title',
            sortable: true,
            selector: 'title'
        },
        {
            name: 'Sub Category',
            sortable: true,
            selector: 'subCategory.title',
        },
        {
            name: 'Options',
            cell: row => <>{row.options.map(option => option.title).toString()}</>
        },
        {
            name: 'Action',
            cell: row => <>{actionButtons(row)}</>
        }
    ]

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
                {deleteLoading ?
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
                        onClick={e => {
                            e.preventDefault()
                            deleteAttribute({ variables: { id: row._id } })
                        }}
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
                                    columns={columns}
                                    data={data ? data.optionGroups : []}
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
                    < AttributeComponent attribute={attribute} />
                </Modal>
            </Container>
        </>
    )
}
export default withTranslation()(Attribute)
