"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '@/components/navbar/navbar';
import authStyles from '../auth.module.css';
import Link from 'next/link';
import { toast } from 'react-toastify';


interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    city: string;
}
export default function Signup() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        city: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(formData)
        setErrors({})
        const validationErrors: Record<string, string> = {};
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        }
        if (!formData.password) {
            validationErrors.password = 'Password is required';
        }
        if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.city) {
            validationErrors.city = 'City is required';
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
    }
    return (
        <div className={authStyles.authout}>
            <div className={authStyles.authin}>
                <div className={authStyles.left}>
                    <Image src="/logo.png"  width={320} height={280} alt="" className='img' />
                </div>
                <div className={authStyles.right}>
                    <form
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        onSubmit={handleSubmit}
                    >
                        <div className={authStyles.forminput_cont}>
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className={authStyles.formerror}>{errors.name}</span>}
                        </div>
                        <div className={authStyles.forminput_cont}>
                            <label>Email</label>
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className={authStyles.formerror}>{errors.email}</span>}
                        </div>
                        <div className={authStyles.forminput_cont}>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && (
                                <span className={authStyles.formerror}>{errors.password}</span>
                            )}
                        </div>
                        <div className={authStyles.forminput_cont}>
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm Your Password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && (
                                <span className={authStyles.formerror}>{errors.confirmPassword}</span>
                            )}
                        </div>

                        <div className={authStyles.forminput_cont}>
                            <label>City</label>
                            <input
                                type="text"
                                placeholder="Enter Your City"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && (
                                <span className={authStyles.formerror}>{errors.city}</span>
                            )}
                        </div>

                        <button type="submit" className={authStyles.main_button}>Register</button>
                        <p className={authStyles.authlink}>Already have an account? <Link href="/auth/signin">login</Link></p>
                    </form>
                </div>

            </div>
        </div >
    )
}
