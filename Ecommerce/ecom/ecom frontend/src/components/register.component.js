import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';

function RegisterComponent() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [errorMsg, setErrorMsg] = useState(null);
    const password = React.createRef({});
    password.current = watch('password', '');
    const navigate = useNavigate();

    const registerUser = (payload) => {
        setErrorMsg(null);
        axiosInstance.post('users/register', payload).then(resp => {
           if (resp && resp.data && resp.data.data && resp.data.data.token) {
            localStorage.setItem('access-token', resp.data.data.token);
            localStorage.setItem('user-id', resp.data.data.userId);
            window.alert('Registered successfully');
            navigate('/');
           }
        }).catch(err => {
            console.log(err);
            if (err && err.response && err.response.data && err.response.data.errorDescription && err.response.data.errorDescription.keyPattern && err.response.data.errorDescription.keyPattern.mobile) {
                setErrorMsg('Mobile no already exist');
            } else if (err && err.response && err.response.data && err.response.data.error) {
                setErrorMsg(err.response.data.errorDescription)
            }
        }) ;
    };
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 my-4 py-4  mx-auto'>
                    <form onSubmit={handleSubmit(registerUser)} noValidate>
                        <h2 className='text-center my-2'>Register</h2>
                        <div>
                            <p className='text-danger'>{errorMsg}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">First name</label>
                            <input type="text" name='firstName' {...register('firstName', {required: 'Firstname is required'})} className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                            <p className='text-danger'>{errors.firstName?.message}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Last name</label>
                            <input type="text" name='lastName' {...register('lastName', {required: 'Lastname is required'})} className="form-control" id="exampleFormControlInput2" placeholder="Last Name" />
                            <p className='text-danger'>{errors.lastName?.message}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput3" className="form-label">Email address</label>
                            <input type="email" name='email' {...register('email', {required: 'Email is required', pattern: {value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Incorrect email format'}})} className="form-control" id="exampleFormControlInput3" placeholder="Email" />
                            <p className='text-danger'>{errors.email?.message}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput4" className="form-label">Password</label>
                            <input type="password" name='password' {...register('password', {required: 'Password is required', minLength: {value: 5, message: 'Minumum 5 characters'}, maxLength: {value: 20, message: 'Maximum 20 characters'}})} className="form-control" id="exampleFormControlInput4" placeholder="Password" />
                            <p className='text-danger'>{errors.password?.message}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput4" className="form-label">Confirm Password</label>
                            <input type="password" name='confirmPassword' {...register('confirmPassword', {validate: value => value === password.current || 'Passwords does not match'})} className="form-control" id="exampleFormControlInput4" placeholder="Confirm Password" />
                            <p className='text-danger'>{errors.confirmPassword?.message}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput5" className="form-label">Mobile No</label>
                            <input type="number" name='mobile' {...register('mobile', {required: 'Mobile No is required'})} className="form-control" id="exampleFormControlInput5" placeholder="Mobile No" />
                            <p className='text-danger'>{errors.mobile?.message}</p>
                        </div>
                        <button className='btn btn-success' type='submit'>Register</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default RegisterComponent;