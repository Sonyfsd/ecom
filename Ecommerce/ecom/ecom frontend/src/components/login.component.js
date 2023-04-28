import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import subject from '../services/subject.service';
import axiosInstance from '../axios';

function LoginComponent() {
    const { register, formState: {errors}, handleSubmit } = useForm();
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate();
    const loginUser = (payload) => {
        setErrorMsg(null);
        axiosInstance.post('users/login', payload).then(resp => {
           if (resp && resp.data && resp.data.data && resp.data.data.token) {
            localStorage.setItem('access-token', resp.data.data.token);
            localStorage.setItem('user-id', resp.data.data.userId);
            subject.next(true);
            navigate('/');
           }
        }).catch(err => {
            if (err && err.response && err.response.data && err.response.data.error) {
                setErrorMsg(err.response.data.errorDescription)
            }
        });
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 my-4 py-4  mx-auto'>
                    <form onSubmit={handleSubmit(loginUser)} noValidate>
                        <h2 className='text-center my-2'>Login</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" name='email' {...register('email', {required: 'Email is required', pattern: {value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Incorrect email format'}})} className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                            <p className='text-danger'>{errors.email?.message}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                            <input type="password" name='password' {...register('password', {required: 'Password is required', minLength: {value: 5, message: 'Minumum 5 characters'}, maxLength: {value: 20, message: 'Maximum 20 characters'}})} className="form-control" id="exampleFormControlInput2" placeholder="Password" />
                            <p className='text-danger'>{errors.password?.message}</p>
                        </div>
                        <div>
                            <p className='text-danger'>{errorMsg}</p>
                        </div>
                        <button className='btn btn-success' type='submit'>Login</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default LoginComponent;