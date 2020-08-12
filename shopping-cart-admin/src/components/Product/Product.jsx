import React, { useState } from 'react'
import {
    Alert,
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
    FormGroup,
    Input,
    Button,
    Label
} from 'reactstrap'
import { withTranslation } from 'react-i18next'
import { categories } from '../../apollo/server'
import { validateFunc } from '../../constraints/constraints'
import Loader from 'react-loader-spinner'
import { gql, useQuery } from '@apollo/client'
import { useRef } from 'react'
import classNames from 'classnames'


const ATTRIBUTE = [
    {
        _id: '1', title: 'Color', options: [{ _id: '11', title: 'red' }, { _id: '12', title: "green" }]
    },
    {
        _id: '2', title: 'Size', options: [{ _id: '21', title: 'small' }, { _id: '22', title: "Large" }]
    },
]


const GET_CATEGORIES = gql`
  ${categories}
`

function Product(props) {
    const formRef = useRef()
    const category = null
    const productTitle = ''
    const productCode = ''
    const description = ''
    const mainPrice = ''
    const isFeatured = false
    const { data, loading: loadingCategory, error: dropDownError } = useQuery(GET_CATEGORIES)
    const product = null
    // const [products, productsSetter] = useState(
    //     product || [
    //         {
    //             productTitle: '',
    //             productDescriptio: '',
    //             productCode: '',
    //             mainPrice: '',
    //             category: '',
    //             attribute: []
    //         }
    //     ]
    // )
    const [attributes, setAttribute] = useState(
        ATTRIBUTE.map(({ _id, title, options }) => (
            {
                _id,
                title,
                options: options.map(option => ({
                    ...option,
                    quantity: '',
                    price: '',
                    check: false
                }))
            }
        ))
    )

    // const option = null
    // const [options, optionsSetter] = useState(
    //     option || [
    //         {
    //             optionName: '',
    //             optionError: null
    //         }
    //     ]
    // )
    // const productAttributes = ATTRIBUTE.map(({ title, options }) => {
    //     return {
    //         title,
    //         options: options.map(option => ({
    //             ...option._id,
    //             quantityAttribute: '',
    //             priceAttribute: ''
    //         })
    //         )
    //     }
    // })

    const [success, successSetter] = useState('')
    const [error, errorSetter] = useState('')
    const [categoryError, categoryErrorSetter] = useState(null)
    const [productTitleError, setProductTitleError] = useState(null)
    const [productCodeError, setProductCodeError] = useState(null)
    const [descriptionError, setDescriptionError] = useState(null)
    const [mainPriceError, setMainPriceError] = useState(null)
    const [attributeError, setAttrbuteError] = useState(null)
    // const [images, imagesSetter] = useState(["", "", "", "", ""])
    const [images, imagesSetter] = useState([
        { index: 0, preview: "", raw: "" }
    ]);

    const onBlur = (setter, field, state) => {
        setter(!validateFunc({ [field]: state }, field))
    }

    function handleAttributeChange(event, outerIndex, index, type) {
        const attribute = attributes

        if (type === 'price') {
            attribute[outerIndex]['options'][index]['price'] = event.target.value
            setAttribute([...attribute])
        } else if (type === 'check') {
            attribute[outerIndex]['options'][index]['check'] = event.target.checked
            setAttribute([...attribute])
        }
        else {
            attribute[outerIndex]['options'][index]['quantity'] = event.target.value
            setAttribute([...attribute])
        }
    }

    const validate = () => {
        let mainError = false
        let checkCount = 0
        const titleError = !validateFunc({ productTitle: formRef.current['input-productTitle'].value }, 'productTitle')
        const codeError = !validateFunc({ productCode: formRef.current['input-productCode'].value }, 'productCode')
        const priceError = !validateFunc({ productPrice: formRef.current['input-mainPrice'].value }, 'productPrice')
        // const categoryError = !validateFunc({ sub_category: formRef.current['sub_category'].value }, 'sub_category')
        const attribute = attributes
        attribute.map(item => item.options.map(i => {
            if (i.check)
                checkCount = checkCount + 1
        }))
        const checkList = attribute.filter(item => item.options.some(i => (
            i.check && !validateFunc({ optionPrice: i.price }, 'optionPrice') && !validateFunc({ optionQuantity: i.quantity }, 'optionQuantity')
        )))

        if (checkList.length < 1) {
            mainError = false
        }
        else {
            if (checkCount === checkList.length)
                mainError = true
            else
                mainError = false
        }
        setProductCodeError(codeError)
        setProductTitleError(titleError)
        setMainPriceError(priceError)
        categoryErrorSetter(categoryError)
        setAttrbuteError(mainError)
        return mainError && categoryError && codeError && titleError && priceError
    }

    const onDismiss = () => {
        successSetter('')
        errorSetter('')
    }

    // const imageContainer = () => {
    //     switch (true) {
    //         case images.length > 0:
    //             return <Images images={images} removeImage={this.removeImage} />
    //         default:
    //             return <Buttons onChange={this.onChange} />
    //     }
    // }

    const handleChange = (event, ind) => {
        if (event.target.files.length) {

            const image = images
            console.log('i: ', ind)
            console.log('Imges: ', image)
            console.log('index: ', image[ind])
            image[ind] = {
                index: ind,
                preview: URL.createObjectURL(event.target.files[0]),
                raw: event.target.files[0]
            }
            imagesSetter([...image]);
            if (images.length < 5 && ind === image.length - 1) {
                image.push({ index: ind + 1, preview: '', raw: '' })
                imagesSetter([...image])
            }
        }
    };

    const { t } = props
    return (
        <Row>
            <Col className="order-xl-1">
                <Card className="bg-secondary shadow">
                    <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                            <Col xs="8">
                                <h3 className="mb-0">
                                    {props.attribute ? 'Edit Product' : 'Add Product'}
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
                                            htmlFor="input-productTitle">
                                            {'Product Title'}
                                        </label>
                                        <FormGroup
                                            className={
                                                productTitleError === null
                                                    ? ''
                                                    : productTitleError
                                                        ? 'has-success'
                                                        : 'has-danger'
                                            }>
                                            <Input
                                                className="form-control-alternative"
                                                id="input-productTitle"
                                                placeholder="e.g Dotted Shirt"
                                                type="text"
                                                defaultValue={productTitle}
                                                onBlur={event => {
                                                    onBlur(setProductTitleError, 'productTitle', event.target.value)
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg='6'>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-productCode">
                                            {'SKU Code'}
                                        </label>
                                        <FormGroup
                                            className={
                                                productCodeError === null
                                                    ? ''
                                                    : productCodeError
                                                        ? 'has-success'
                                                        : 'has-danger'
                                            }>
                                            <Input
                                                className="form-control-alternative"
                                                id="input-productCode"
                                                placeholder="e.g MLK-234"
                                                type="text"
                                                defaultValue={productCode}
                                                onBlur={event => {
                                                    onBlur(setProductCodeError, 'productCode', event.target.value)
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg='6'>
                                        <label className="form-control-label" htmlFor="input-title">
                                            {'Description'}
                                        </label>
                                        <br />
                                        <FormGroup
                                            className={
                                                descriptionError === null
                                                    ? ''
                                                    : descriptionError
                                                        ? 'has-success'
                                                        : 'has-danger'
                                            }>
                                            <Input
                                                className="form-control-alternative"
                                                id="input-description"
                                                placeholder="e.g "
                                                type="text"
                                                defaultValue={description}
                                                onBlur={event => {
                                                    onBlur(setDescriptionError, 'productDescription', event.target.value)
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg='6'>
                                        <label className="form-control-label" htmlFor="input-title">
                                            {'Price'}
                                        </label>
                                        <br />
                                        <FormGroup
                                            className={
                                                mainPriceError === null
                                                    ? ''
                                                    : mainPriceError
                                                        ? 'has-success'
                                                        : 'has-danger'
                                            }>
                                            <Input
                                                className="form-control-alternative"
                                                id="input-mainPrice"
                                                placeholder="e.g 0"
                                                type="number"
                                                min={'0'}
                                                defaultValue={mainPrice}
                                                onBlur={event => {
                                                    onBlur(setMainPriceError, 'price', event.target.value)
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg='6'>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-category">
                                            {t('Category')}
                                        </label>
                                        {dropDownError ? ' Error' :
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
                                                    // onChange={handleChange}
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
                                    <Col lg='6'>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-features">
                                            {t('Featured')}
                                        </label>
                                        <FormGroup>
                                            <label className="custom-toggle">
                                                <input
                                                    name={'input-featured'}
                                                    id={'input-featured'}
                                                    defaultChecked={isFeatured}
                                                    type="checkbox"
                                                />
                                                <span className="custom-toggle-slider rounded-circle" />
                                            </label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg='6'>
                                        <FormGroup className={classNames(
                                            { 'has-danger': attributeError === false }
                                        )}>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-category">
                                                {'Attributes'}
                                            </label>
                                            <br />
                                            <small style={{ color: 'blue' }}>
                                                Select Atleast one options of every option
                                  </small>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg='12'>
                                        {attributes.map((options, outerIndex) => (
                                            <div key={outerIndex}>
                                                <Row>
                                                    <Col lg='6'>
                                                        <label>
                                                            {outerIndex + 1}{'-'}{options.title}
                                                        </label>
                                                    </Col>
                                                    <Col lg='3'>
                                                        <label>
                                                            {'Quantity'}
                                                        </label>
                                                    </Col>
                                                    <Col lg='3'>
                                                        <label>
                                                            {'Price'}
                                                        </label>
                                                    </Col>
                                                </Row>
                                                {options.options.map((option, index) => (
                                                    <div key={option._id}>
                                                        <Row>
                                                            <Col lg='6'>
                                                                <FormGroup
                                                                    check
                                                                    className="mb-2 pt-2 ml-4">
                                                                    <Label check className={'text-capitalize text-muted pl-2'}>
                                                                        <Input
                                                                            value={option._id}
                                                                            type="checkbox"
                                                                            checked={option.check}
                                                                            onChange={event =>
                                                                                handleAttributeChange(
                                                                                    event,
                                                                                    outerIndex,
                                                                                    index,
                                                                                    'check'
                                                                                )
                                                                            }
                                                                        />
                                                                        {option.title}
                                                                    </Label>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col lg='3'>
                                                                <FormGroup>
                                                                    <Input
                                                                        className="form-control-alternative"
                                                                        value={option.quantity}
                                                                        id="input-quantity"
                                                                        placeholder="e.g 1"
                                                                        type="number"
                                                                        onChange={event => {
                                                                            handleAttributeChange(
                                                                                event,
                                                                                outerIndex,
                                                                                index,
                                                                                'quantity'
                                                                            )
                                                                        }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col lg='3'>
                                                                <FormGroup>
                                                                    <Input
                                                                        className="form-control-alternative"
                                                                        value={option.price}
                                                                        id="input-price"
                                                                        placeholder="e.g $10"
                                                                        type="number"
                                                                        onChange={event => {
                                                                            handleAttributeChange(
                                                                                event,
                                                                                outerIndex,
                                                                                index,
                                                                                'price'
                                                                            )
                                                                        }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h3 className="mb-2"> {t('Food Image')}</h3>
                                        <Row>
                                            {images.map((item, ind) => {
                                                console.log('map:', ind)
                                                return (
                                                    <Col lg='2' key={ind}>
                                                        <FormGroup>
                                                            <div>
                                                                <label htmlFor={item.index}>
                                                                    {item.preview ? (
                                                                        <img src={item.preview} alt="dummy" width="80" height="80" />
                                                                    ) : (
                                                                            <>
                                                                                <span className="fa-stack fa-2x mt-3 mb-2">
                                                                                    <i className="fas fa-square fa-stack-2x" />
                                                                                    <i class="fas fa-upload fa-stack-1x fa-inverse"></i>
                                                                                </span>
                                                                            </>
                                                                        )}
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    id={item.index}
                                                                    style={{ display: "none" }}
                                                                    onChange={(event) => handleChange(event, item.index)}
                                                                />
                                                            </div>
                                                        </FormGroup>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className='mt-2 justify-content-center'>
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
                                                size="lg"
                                                className="btn-block"
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

export default withTranslation()(Product)
