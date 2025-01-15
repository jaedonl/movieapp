'use client';

import React from 'react'
import AuthForm from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validations'
import { signUp } from '@/lib/actions/auth';

const page = () => {
  return (
    <AuthForm 
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
            fullName: '',
            email: '',
            age: 0,
            password: '',
            confirmPassword: '',
            avatar: '',
        }}
        onSubmit={signUp}
    />
  )
}

export default page