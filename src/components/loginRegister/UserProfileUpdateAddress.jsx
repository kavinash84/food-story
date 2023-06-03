/** @format */

import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState, useContext } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { UserAddressSchema } from './schemas/userAddressValidation';
import { SomeContext } from '../../App';
import { clearCurrentAddress } from '../../redux/slices/meSlice';
import { debounceUtil } from '../utilis/helper';

const loaderStyle = {
  position: 'absolute',
  left: '0',
  top: '60%',
  right: '0',
  bottom: '0',
  textAlign: 'center',
  margin: '0 auto',
  zIndex: '999'
};
let isStateLoading = false;

const UserProfileUpdateAddress = props => {
  const dispatch = useDispatch();
  const addressInitialValue = useSelector(state => state.me.currentAddress);
  const userDataCtx = useSelector(state => state.me.allDetails);
  const [error, setError] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const history = useNavigate();
  const [isValidState, setIsValidState] = useState(true);
  const [stateErrorMessage, setStateErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: { ...addressInitialValue, email: userDataCtx.email,street:addressInitialValue.street.toString() },
    validationSchema: UserAddressSchema,
    onSubmit: async values => {
      const payload = {
        address: {
          id: addressInitialValue.id,
          customer_id: userDataCtx.id,
          firstname: values.firstname,
          lastname: values.lastname,
          street: [values.street],
          telephone: values.telephone,
          postcode: values.postcode,
          city: values.city,
          country_id: 'IN',
          region: {
            regionCode: values.region.region_code,
            region: values.region.region,
            regionId: values.region.region_id
          }
        }
      };
      setIsLoading(true),
        await axios
          .post(
            'https://beta.foodstories.store/rest/V1/customer/addresses',
            payload,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${  localStorage.getItem('token')}`
              }
            }
          )
          .then(resp => {
            console.log('response update add', resp);
            history('/profile');
            setIsLoading(false);
          })
          .catch(e => {
            console.log('error', e);
            setError(toast.error(e.response.data.message));
          });
    }
  });

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched,
    setFieldError,
    resetForm
  } = formik;

  const fetchStateInfo = async (state = addressInitialValue.region.region) => {
    setIsLoading(true);
    const { data } = await axios({
      url: 'https://beta.foodstories.store/rest/V1/customer/addresses/get-regions',
      method: 'post',
      data: {
        parameters: {
          country_code: 'IN',
          region_name: state
        }
      }
    });
    setIsLoading(false);
    isStateLoading = false;
    if (data[0]?.region_id) {
      setFieldValue('region.region', data[0]?.name);
      setFieldValue('region.region_code', data[0]?.code);
      setFieldValue('region.region_id', data[0]?.region_id);
      setIsValidState(true);
    } else {
      setFieldError('region.region', 'Please enter valid state');
      setIsValidState(false);
      setStateErrorMessage('Please enter valid state');
    }
  };

  const handleStateChange = async e => {
    setFieldValue(e.target.name, e.target.value);
    debounceUtil(() => {
      fetchStateInfo(e.target.value);
    }, 800);
  };

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center" style={loaderStyle}>
          <div
            className="spinner-border spinner-border-lg text-success"
            style={{ width: '4rem', height: '4rem' }}
            role="status"
          >
            <span className="visually-hidden ">Loading...</span>
          </div>
        </div>
      )}
      <div className="w-75 container">
        <h5
          className="mb-3 mt-5"
          style={{
            color: 'white',
            background: '#a0383f',
            padding: '20px'
          }}
        >
          Update a address
        </h5>

        <div className="page-content modalWrapper">
          <div className="form-v10-content">
            <form
              className="form-detail pt-4"
              action="#"
              method="post"
              id="myform"
              onSubmit={handleSubmit}
            >
              <div className="form-left">
                <div className="form-group">
                  <div className="form-row form-row-1">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="input-text"
                      placeholder="First Name"
                      required=""
                      autoComplete="off"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstname}
                    />
                    {errors.firstname && touched.firstname ? (
                      <p className="form-errors">{errors.firstname}</p>
                    ) : null}
                  </div>
                  <div className="form-row form-row-2">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="input-text"
                      placeholder="Last Name"
                      required=""
                      autoComplete="off"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastname}
                    />
                    {errors.lastname && touched.lastname ? (
                      <p className="form-errors">{errors.lastname}</p>
                    ) : null}
                  </div>
                </div>

                <div className="form-row">
                  <input
                    type="text"
                    name="telephone"
                    className="phone"
                    id="phone"
                    placeholder="Phone Number"
                    required=""
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.telephone}
                  />
                  {errors.telephone && touched.telephone ? (
                    <p className="form-errors">{errors.telephone}</p>
                  ) : null}
                </div>

                <div className="form-row">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="input-text"
                    required=""
                    pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                    placeholder="Your Email"
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-errors">{errors.email}</p>
                  ) : null}
                </div>
                <div className="form-row">
                  <input
                    type="pincode"
                    name="postcode"
                    id="pincode"
                    className="input-text"
                    placeholder="Pincode"
                    required=""
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.postcode}
                  />
                  {errors.postcode && touched.postcode ? (
                    <p className="form-errors">{errors.postcode}</p>
                  ) : null}
                </div>
                <div className="form-row">
                  <input
                    type="flat"
                    name="street"
                    id="flat"
                    className="input-text"
                    placeholder="Flat, House no., Building, Company, Apartment"
                    required=""
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.street.toString()}
                  />
                  {errors.street && touched.street ? (
                    <p className="form-errors">{errors.street}</p>
                  ) : null}
                </div>

                <div className="form-row">
                  <input
                    type="city"
                    name="city"
                    id="city"
                    className="input-text"
                    placeholder="Town/City"
                    required=""
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                  />
                  {errors.city && touched.city ? (
                    <p className="form-errors">{errors.city}</p>
                  ) : null}
                </div>
                <div className="form-row">
                  <input
                    type="state"
                    name="region.region"
                    id="state"
                    className="input-text"
                    placeholder="State"
                    required=""
                    autoComplete="off"
                    onChange={e => {
                      handleStateChange(e);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    value={values.region.region}
                  />
                  {isValidState ? (
                    errors?.region?.region && touched?.region?.region ? (
                      <p className="form-errors">
                        {errors?.region?.region || stateErrorMessage}
                      </p>
                    ) : null
                  ) : (
                    <p className="form-errors">{stateErrorMessage}</p>
                  )}
                </div>

                <br />
                <div
                  className=" mx-auto"
                  style={{ width: '20%', overflow: 'hidden' }}
                >
                  <Link
                    to="/profile/address"
                    style={{ float: 'left', display: 'block' }}
                  >
                    <button
                      type="submit"
                      name="register"
                      className="btn btn-primary d-block mx-auto my-3"
                    >
                      Back
                    </button>
                  </Link>
                  <button
                    type="submit"
                    disabled={!!(isLoading || !isValidState)}
                    style={{ float: 'left', display: 'block' }}
                    name="register"
                    className="btn btn-primary d-block mx-auto my-3 ms-2"
                  >
                    Update changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default UserProfileUpdateAddress;
