"use client";

import { auth, database } from '@/firebase/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SignUpPage = () => {
    let [username, setUsername] = useState();
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();

    const router = useRouter();

    const submitFunc = async (e) => {
        e.preventDefault();
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, {
            displayName: username
        });
        await setDoc(doc(database, `users/${user.uid}`), {
            displayName: username,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid
        })
        router.push('/sign-in');
    }

    return (
        <div className=' flex flex-col justify-center items-center w-full my-10'>
            <Image src={'/hippoicon.png'} width={100} height={100} alt='hippoicon' className='pointer-events-none' />
            <h3 className='font-bold text-lg'>Create your account</h3>
            <Link href={`/sign-in`} className='text-xs mt-2 text-gray-400 hover:text-gray-700'>Already have an account? &rarr;</Link>

            <form class="bg-white rounded px-8 pt-6 pb-8 mb-4 w-96" onSubmit={submitFunc}>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input onChange={(e) => {
                        setUsername(e.target.value);
                    }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="username" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input onChange={(e) => {
                        setEmail(e.target.value);
                    }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="you@example.com" />
                </div>
                <div class="mb-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input onChange={(e) => {
                        setPassword(e.target.value);
                    }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" />
                </div>
                <div class="flex items-center justify-between">
                    <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign Up
                    </button>
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
                &copy;2024 Acme Corp. All rights reserved.
            </p>
        </div>
    )
}

export default SignUpPage