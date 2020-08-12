import React, { useState } from 'react'
import {
    Alert,
    Card,
    CardHeader,
    CardBody,
    Form,
    Row,
    Col,
    FormGroup,
    Input,
    Button
} from 'reactstrap'
import { withTranslation } from 'react-i18next'
import { createOptions, getOptions, editOption, categories } from '../../apollo/server'
import { validateFunc } from '../../constraints/constraints'
import Loader from 'react-loader-spinner'
import { gql, useQuery } from '@apollo/client'
import { useRef } from 'react'

const CREATE_OPTIONS = gql`
  ${createOptions}
`
const GET_OPTIONS = gql`
  ${getOptions}
`
const EDIT_OPTION = gql`
  ${editOption}
`

const GET_CATEGORIES = gql`
  ${categories}
`

function Attribute(props) {
    const formRef = useRef()
    const category = null
    const title = ''
    const { data, loading: loadingCategory, error: dropDownError } = useQuery(GET_CATEGORIES)
    const option = null
    const [options, optionsSetter] = useState(
        option || [
            {
                optionName: '',
                optionError: null
            }
        ]
    )
    const [success, successSetter] = useState('')
    const [error, errorSetter] = useState('')
    const [categoryError, categoryErrorSetter] = useState(null)
    const [titleError, titleErrorSetter] = useState(null)

    const onBlur = (setter, field, state) => {
        setter(!validateFunc({ [field]: state }, field))
    }

    const onBlurOptions = (index, type) => {
        const option = options
        option[index].optionError = !validateFunc({ optionTitle: option[index][type] },
            'optionTitle'
        )
        optionsSetter([...option])
    }
    const onChange = (event, index, state) => {
        const option = options
        option[index][state] = event.target.value
        optionsSetter([...option])
    }
    const onAdd = index => {
        const option = options
        if (index === option.length - 1) {
            option.push({ optionName: '', optionError: null })
        } else {
            option.splice(index + 1, 0, { optionName: '', optionError: null })
        }
        optionsSetter([...option])
    }
    const onRemove = index => {
        if (options.length === 1 && index === 0) {
            return
        }
        const option = options
        option.splice(index, 1)
        optionsSetter([...option])
    }

    const validate = () => {
        let mainError = false
        const categoryError = !validateFunc({ sub_category: formRef.current['sub_category'].value }, 'sub_category')
        const titleError = !validateFunc({ attributeName: formRef.current['input-attribute'].value }, 'attributeName')
        const option = options
        option.map((option, index) => {
            onBlurOptions(index, 'optionName')
            return option
        })
        const error = option.filter(option => option.optionError)
        if (!error.length) {
            mainError = true
        }

        titleErrorSetter(titleError)
        categoryErrorSetter(categoryError)
        return mainError && categoryError
    }

    const onDismiss = () => {
        successSetter('')
        errorSetter('')
    }
    const { t } = props
    return (
        <Row>
            <Col className="order-xl-1">
                <Card className="bg-secondary shadow">
                    <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                            <Col xs="8">
                                <h3 className="mb-0">
                                    {props.attribute ? 'Edit Attribute' : 'Add Attribute'}
                                </h3>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <form ref={formRef}>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg='6'>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-category">
                                            {t('Category')}
                                        </label>
                                        {error ? ' Error' :
                                            <FormGroup
                                                className={
                                                    categoryError === null
                                                        ? ''
                                                        : categoryError
                                                            ? 'has-success'
                                                            : 'has-danger'
                                                }>
                                                <Input
                                                    type="select"
                                                    name="sub_category"
                                                    id="sub_category"
                                                    defaultValue={category}
                                                    onBlur={event => {
                                                        onBlur(
                                                            categoryErrorSetter,
                                                            'sub_category',
                                                            event.target.value
                                                        )
                                                    }}>
                                                    {loadingCategory ?
                                                        <option value={''}>
                                                            {'Loading'}
                                                        </option>
                                                        :
                                                        <>
                                                            {!category && (
                                                                <option value={''}>
                                                                    {t('Select')}
                                                                </option>)}
                                                            {data.categories.map(category => (
                                                                <option
                                                                    value={category._id}
                                                                    key={category._id}>
                                                                    {category.title}
                                                                </option>
                                                            ))}
                                                        </>
                                                    }
                                                </Input>
                                            </FormGroup>
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg='6'>
                                        <label className="form-control-label" htmlFor="input-title">
                                            {t('Title')}
                                        </label>
                                        <br />
                                        <FormGroup
                                            className={
                                                titleError === null
                                                    ? ''
                                                    : titleError
                                                        ? 'has-success'
                                                        : 'has-danger'
                                            }>
                                            <Input
                                                className="form-control-alternative"
                                                id="input-attribute"
                                                placeholder="e.g Color"
                                                type="text"
                                                defaultValue={title}
                                                onBlur={event => {
                                                    onBlur(titleErrorSetter, 'attributeName', event.target.value)
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg='12'>
                                        <label className="form-control-label" htmlFor="input-title">
                                            {t('Options')}
                                        </label>
                                        <br />
                                        {options.map((option, index) => (
                                            <Row>
                                                <Col lg='6'>
                                                    <FormGroup
                                                        className={
                                                            option.optionError === null
                                                                ? ''
                                                                : option.optionError
                                                                    ? 'has-success'
                                                                    : 'has-danger'
                                                        }>
                                                        <Input
                                                            className="form-control-alternative"
                                                            id="input-title"
                                                            placeholder="e.g Black"
                                                            type="text"
                                                            value={option.optionName}
                                                            onChange={event => {
                                                                onChange(event, index, 'optionName')
                                                            }}
                                                            onBlur={event => {
                                                                onBlurOptions(index, 'optionName')
                                                            }}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                {!props.option && (
                                                    <Col lg='3'>
                                                        <Button
                                                            color="danger"
                                                            onClick={() => {
                                                                onRemove(index)
                                                            }}>
                                                            {'-'}
                                                        </Button>{' '}
                                                        <Button
                                                            onClick={() => {
                                                                onAdd(index)
                                                            }}
                                                            color="primary">
                                                            {'+'}
                                                        </Button>
                                                    </Col>
                                                )}
                                            </Row>
                                        ))}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="4">
                                        {false ?
                                            <Button disabled color="primary" onClick={() => null}>
                                                <Loader
                                                    type="TailSpin"
                                                    color="#FFF"
                                                    height={25}
                                                    width={30}
                                                    visible={true}
                                                />
                                            </Button> :
                                            <Button
                                                color="primary"
                                                onClick={() => {
                                                    validate()
                                                }}>
                                                {'Save'}
                                            </Button>
                                        }
                                    </Col>
                                    <Alert color="success" isOpen={!!success} toggle={onDismiss}>
                                        {success}
                                    </Alert>
                                    <Alert color="danger" isOpen={!!error} toggle={onDismiss}>
                                        {error}
                                    </Alert>
                                </Row>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </Col>
        </Row >
    )
}

export default withTranslation()(Attribute)
