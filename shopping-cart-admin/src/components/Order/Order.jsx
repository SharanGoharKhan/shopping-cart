import React, { useState, useEffect } from 'react'
import { withTranslation } from 'react-i18next'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Col,
  Alert,
  ListGroup,
  ListGroupItem,
  Badge,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'
import { validateFunc } from '../../constraints/constraints'
import {
  updateOrderStatus,
  getPaymentStatuses,
  updatePaymentStatus,
  getConfiguration
} from '../../apollo/server'
import Loader from 'react-loader-spinner'
import { gql, useQuery, useMutation } from '@apollo/client'

// constants
const UPDATE_STATUS = gql`
  ${updateOrderStatus}
`
const GET_PAYMENT_STATUSES = gql`
  ${getPaymentStatuses}
`
const UPDATE_ORDER_STATUS = gql`
  ${updateOrderStatus}
`
const UPDATE_PAYMENT_STATUS = gql`
  ${updatePaymentStatus}
`
const GET_CONFIGURATION = gql`
  ${getConfiguration}
`

function Order(props) {
  const { order } = props
  const [reason, reasonSetter] = useState('')
  const [selectedStatus, selectedStatusSetter] = useState('')
  const [selectedPaymentStatus, selectedPaymentStatusSetter] = useState('')
  const [customerCollapse, customerCollapseSetter] = useState(true)
  const [orderCollapse, orderCollapseSetter] = useState(true)
  const [reasonError, reasonErrorSetter] = useState(null)
  const [error, errorSetter] = useState('')
  const [success, successSetter] = useState('')

  const { data: paymentData, loading: paymentLoading, error: paymentError } = useQuery(GET_PAYMENT_STATUSES)
  const { data: configData, loading: configLoading, error: configError } = useQuery(GET_CONFIGURATION)

  const [mutateStatus, { loading: updateLoading }] = useMutation(UPDATE_STATUS, { onCompleted, onError })
  const [updateOrderStatus, { loading: updateOrderLoading }] = useMutation(UPDATE_ORDER_STATUS, { onCompleted, onError })
  const [updatePaymentStatus, { loading: updatePaymentLoading }] = useMutation(UPDATE_PAYMENT_STATUS, { onCompleted, onError })

  useEffect(() => {
    console.log('State Log: ', order)
  }, [])
  const toggle = state => {
    if (state === 'Order') orderCollapseSetter(prev => !prev)
    else if (state === 'Customer') customerCollapseSetter(prev => !prev)
  }
  const validateReason = () => {
    const reasonError = !validateFunc({ reason }, 'reason')
    reasonErrorSetter(reasonError)
    console.log(reasonError)
    return reasonError
  }
  const onCompleted = ({
    updateStatus,
    assignRider,
    updateOrderStatus,
    updatePaymentStatus
  }) => {
    if (updateStatus) {
      successSetter('Status Updated')
    } else if (assignRider) {
      successSetter('Rider assinged')
    } else if (updateOrderStatus) {
      successSetter('Order status updated')
    } else if (updatePaymentStatus) {
      successSetter('Payment status updated')
    }
  }
  const onError = error => {
    errorSetter(error.message)
  }
  const validateStatus = () => {
    return !!selectedStatus
  }
  const validatePaymentStatus = () => {
    return !!selectedPaymentStatus
  }
  const onDismiss = () => {
    console.log('onDismiss')
    errorSetter('')
    successSetter('')
  }
  const onChangeStatus = event => {
    selectedStatusSetter(event.target.value)
  }
  const onChangePaymentStatus = event => {
    selectedPaymentStatusSetter(event.target.value)
  }
  const { t } = props
  if (!props.order) return null
  return (
    <Card className="bg-secondary shadow">
      <CardHeader className="bg-white border-0">
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">
              {t('Order')}#{order.order_id}
            </h3>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Form>
          <div className="pl-lg-4">
            {(error || success) && (
              <Row>
                <Col lg="12">
                  <Alert
                    color="success"
                    isOpen={!!success}
                    fade={true}
                    toggle={onDismiss}>
                    <span className="alert-inner--text">{success}</span>
                  </Alert>
                  <Alert
                    color="danger"
                    isOpen={!!error}
                    fade={true}
                    toggle={onDismiss}>
                    <span className="alert-inner--text">{error}</span>
                  </Alert>
                </Col>
              </Row>
            )}
            {order.order_status !== 'CANCELLED' &&
              order.order_status !== 'DELIVERED' && (
                <Row className="mb-2">
                  <Col lg="12">
                    <div>
                      {updateLoading ?
                        <Loader
                          className="text-center"
                          type="TailSpin"
                          color="#fb6340"
                          height={40}
                          width={40}
                          visible={updateLoading}
                        />
                        :
                        <FormGroup
                          className={
                            reasonError === null
                              ? ''
                              : reasonError
                                ? 'has-success'
                                : 'has-danger'
                          }>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <Button
                                disabled={
                                  order.order_status !== 'CANCELLED' &&
                                  order.order_status !== 'PENDING'
                                }
                                color="success"
                                onClick={() => {
                                  mutateStatus({
                                    variables: {
                                      id: order._id,
                                      status: 'ACCEPTED',
                                      reason: ''
                                    }
                                  })
                                }}>
                                {order.status === true
                                  ? 'Accepted'
                                  : 'Accept'}
                              </Button>
                            </InputGroupAddon>
                            <Input
                              style={{ marginLeft: '5px' }}
                              placeholder="Reason if rejected..."
                              value={order.reason || reason}
                              // readOnly={status === false}
                              onChange={event => {
                                reasonSetter(event.target.value)
                              }}
                              maxLength={20}
                            />
                            <InputGroupAddon addonType="append">
                              <Button
                                disabled={
                                  order.order_status === 'CANCELLED'
                                }
                                color="danger"
                                onClick={() => {
                                  if (validateReason()) {
                                    mutateStatus({
                                      variables: {
                                        id: order._id,
                                        status: 'CANCELLED',
                                        reason: order.reason
                                      }
                                    })
                                  }
                                }}>
                                {order.status === false
                                  ? 'Cancelled'
                                  : 'Cancel'}
                              </Button>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                      }
                    </div>
                  </Col>
                </Row>
              )}
            {order.order_status !== 'PENDING' &&
              order.order_status !== 'CANCELLED' &&
              order.order_status !== 'DELIVERED' && (
                <>
                  <Row>
                    <Col xs="8">
                      <h3 className="mb-1">{t('Rider')}</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <label
                        className="form-control-label"
                        htmlFor="input-rider">
                        {t('Available Riders')}
                      </label>
                    </Col>
                    <Col lg="6">
                      <label
                        className="form-control-label"
                        htmlFor="rider-name">
                        {t('Assigned To')}
                      </label>
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="rider-name"
                          type="text"
                          readOnly
                          value={order.rider ? order.rider.name : ''}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="8">
                      <h3 className="mb-1">{t('Order Status')}</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <label
                        className="form-control-label"
                        htmlFor="input-rider">
                        {t('Select Status')}
                      </label>
                      <FormGroup>
                        <InputGroup>
                          <Input
                            type="select"
                            name="select"
                            id="input-rider"
                            onChange={onChangeStatus}>
                            <option selected></option>
                            <option value="PICKED">PICKED</option>
                            <option value="DELIVERED">DELIVERED</option>
                          </Input>

                          <InputGroupAddon addonType="append">
                            {updateOrderLoading ?
                              <Button
                                color="primary"
                                onClick={() => null}>
                                <Loader
                                  className="text-center"
                                  type="TailSpin"
                                  color="#FFF"
                                  height={20}
                                  width={40}
                                  visible={updateOrderLoading}
                                />
                              </Button>
                              :
                              <Button
                                color="primary"
                                disabled={
                                  order.order_status === selectedStatus
                                }
                                onClick={() => {
                                  if (validateStatus()) {
                                    updateOrderStatus({
                                      variables: {
                                        id: order._id,
                                        status: selectedStatus
                                      }
                                    })
                                  }
                                }}>
                                {'Assign'}
                              </Button>
                            }
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <label
                        className="form-control-label"
                        htmlFor="rider-name">
                        {t('Current Status')}
                      </label>
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="rider-name"
                          type="text"
                          readOnly
                          value={order.order_status || ''}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="8">
                      <h3 className="mb-1">{t('Payment Status')}</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <label
                        className="form-control-label"
                        htmlFor="input-rider">
                        {t('Select Status')}
                      </label>
                      <FormGroup>
                        <InputGroup>
                          {paymentError ?
                            <option>Error...</option>
                            :
                            paymentLoading ? <option>Loading...</option>
                              :
                              <Input
                                type="select"
                                name="select"
                                id="input-rider"
                                onChange={onChangePaymentStatus}
                                defaultValue={order.payment_status}>
                                <option disabled></option>
                                {paymentData.getPaymentStatuses.map(status => (
                                  <option key={status} value={status}>
                                    {status}
                                  </option>
                                ))}
                              </Input>
                          }
                          <InputGroupAddon addonType="append">
                            {
                              updatePaymentLoading ?
                                <Button
                                  color="primary"
                                  onClick={() => null}>
                                  <Loader
                                    className="text-center"
                                    type="TailSpin"
                                    color="#FFF"
                                    height={20}
                                    width={40}
                                    visible={updatePaymentLoading}
                                  />
                                </Button>
                                :
                                <Button
                                  color="primary"
                                  disabled={
                                    order.payment_status ===
                                    selectedPaymentStatus
                                  }
                                  onClick={() => {
                                    if (validatePaymentStatus()) {
                                      updatePaymentStatus({
                                        variables: {
                                          id: order._id,
                                          status: selectedPaymentStatus
                                        }
                                      })
                                    }
                                  }}>
                                  {'Assign'}
                                </Button>
                            }
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <label
                        className="form-control-label"
                        htmlFor="rider-name">
                        {t('Current Status')}
                      </label>
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="rider-name"
                          type="text"
                          readOnly
                          value={order.payment_status || ''}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </>
              )}
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-1">{t('Customer')}</h3>
              </Col>
              <Col xs="4">
                <Button
                  color="primary"
                  onClick={() => {
                    toggle('Customer')
                  }}
                  style={{ marginBottom: '1rem' }}>
                  Show/Hide
                </Button>
              </Col>
            </Row>
            <Collapse isOpen={customerCollapse}>
              <Row>
                <Col lg="4">
                  <label className="form-control-label" htmlFor="input-name">
                    {t('Name')}
                  </label>
                  <FormGroup>
                    <Input
                      className="form-control-alternative"
                      id="input-name"
                      type="text"
                      disabled={true}
                      defaultValue={order.user.name}
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <label className="form-control-label" htmlFor="input-phone">
                    {t('Phone')}
                  </label>
                  <FormGroup>
                    <Input
                      className="form-control-alternative"
                      id="input-phone"
                      type="text"
                      disabled={true}
                      defaultValue={order.user.phone}
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <label className="form-control-label" htmlFor="input-email">
                    {t('Email')}
                  </label>
                  <FormGroup>
                    <Input
                      className="form-control-alternative"
                      id="input-email"
                      type="text"
                      disabled={true}
                      defaultValue={order.user.email}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <label className="form-control-label" htmlFor="input-address">
                    {t('Address')}
                  </label>
                  <FormGroup>
                    <Input
                      className="form-control-alternative"
                      id="input-address"
                      type="text"
                      disabled={true}
                      defaultValue={order.delivery_address.delivery_address}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Collapse>
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-1">{t('Order Details')}</h3>
              </Col>
              <Col xs="4">
                <Button
                  color="primary"
                  onClick={() => {
                    toggle('Order')
                  }}
                  style={{ marginBottom: '1rem' }}>
                  Show/Hide
                </Button>
              </Col>
            </Row>
            <Collapse isOpen={orderCollapse}>
              {configError ? null : configLoading ? null :
                <Row>
                  <Col lg="6">
                    <label
                      className="form-control-label"
                      htmlFor="input-items">
                      {t('Items')}
                    </label>
                    <FormGroup>
                      <ListGroup id="input-items">
                        {order.items.map(item => {
                          return (
                            <ListGroupItem
                              key={item._id}
                              className="justify-content-between">
                              <Badge
                                style={{
                                  fontSize: '12px',
                                  backgroundColor: 'grey',
                                  marginRight: '10px'
                                }}
                                pill>
                                {item.quantity}
                              </Badge>
                              {`${item.food.title}(${item.variation.title})`}
                              <Badge
                                style={{
                                  fontSize: '12px',
                                  backgroundColor: 'black',
                                  float: 'right'
                                }}
                                pill>
                                {configData.configuration.currency_symbol}{' '}
                                {(
                                  item.variation.price * item.quantity
                                ).toFixed(2)}
                              </Badge>
                              {!!item.addons.length && (
                                <UncontrolledDropdown>
                                  <DropdownToggle caret>
                                    Addons
                              </DropdownToggle>
                                  <DropdownMenu>
                                    {item.addons.map(addon => {
                                      return addon.options.map(
                                        (option, index) => (
                                          <DropdownItem key={index}>
                                            {addon.title}:- {option.title}{' '}
                                            <Badge
                                              style={{
                                                fontSize: '12px',
                                                backgroundColor: 'black',
                                                float: 'right'
                                              }}
                                              pill>
                                              {
                                                configData.configuration
                                                  .currency_symbol
                                              }{' '}
                                              {option.price}
                                            </Badge>
                                          </DropdownItem>
                                        )
                                      )
                                    })}
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                              )}
                            </ListGroupItem>
                          )
                        })}
                      </ListGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <Row>
                      <Col md="12">
                        <label
                          className="form-control-label"
                          htmlFor="input-price">
                          {t('Charges')}
                        </label>
                        <FormGroup>
                          <ListGroup id="input-price">
                            <ListGroupItem className="justify-content-between">
                              Subtotal
                          <Badge
                                style={{
                                  fontSize: '12px',
                                  color: 'black',
                                  float: 'right'
                                }}
                                pill>
                                {configData.configuration.currency_symbol}{' '}
                                {(
                                  order.order_amount -
                                  order.delivery_charges
                                ).toFixed(2)}
                              </Badge>
                            </ListGroupItem>
                            <ListGroupItem className="justify-content-between">
                              Delivery Charges
                          <Badge
                                style={{
                                  fontSize: '12px',
                                  float: 'right',
                                  color: 'black'
                                }}>
                                {configData.configuration.currency_symbol}{' '}
                                {order.delivery_charges.toFixed(2)}
                              </Badge>
                            </ListGroupItem>
                            <ListGroupItem className="justify-content-between">
                              Total
                          <Badge
                                style={{
                                  fontSize: '12px',
                                  color: 'black',
                                  float: 'right'
                                }}
                                pill>
                                {configData.configuration.currency_symbol}{' '}
                                {order.order_amount.toFixed(2)}
                              </Badge>
                            </ListGroupItem>
                          </ListGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <label
                          className="form-control-label"
                          htmlFor="input-payment">
                          {t('Payment')}
                        </label>
                        <FormGroup>
                          <ListGroup id="input-payment">
                            <ListGroupItem className="justify-content-between">
                              Payment Method
                          <Badge
                                style={{
                                  fontSize: '12px',
                                  backgroundColor: 'green',
                                  float: 'right'
                                }}
                                pill>
                                {order.payment_method}
                              </Badge>
                            </ListGroupItem>
                            {order.order_status !== 'DELIVERED' && <ListGroupItem className="justify-content-between">
                              Paid Amount
                          <Badge
                                style={{
                                  fontSize: '12px',
                                  float: 'right',
                                  color: 'black'
                                }}>
                                {configData.configuration.currency_symbol}{' '}
                                {order.paid_amount
                                  ? order.paid_amount.toFixed(2)
                                  : 0}
                              </Badge>
                            </ListGroupItem>}
                          </ListGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              }
            </Collapse>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}
export default withTranslation()(Order)
