import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
    return (
        <div className=' flex flex-col justify-center items-center w-full my-10'>
            <Image src={'/hippoicon.png'} width={100} height={100} alt='hippoicon' className='pointer-events-none' />
            <h3 className='font-bold text-lg'>Sign in to your account</h3>
            <Link href={`/sign-up`} className='text-xs mt-2 text-gray-400 hover:text-gray-700'>Don't have an account? &rarr;</Link>

            <form class="bg-white rounded px-8 pt-6 pb-8 mb-4 w-96">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="you@example.com" />
                </div>
                <div class="mb-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                </div>
                <div className='text-end w-full mb-2'>
                    <Link href={'/'} class="inline-block align-baseline font-bold text-xs text-gray-400 hover:text-blue-300">
                        Forgot Password?
                    </Link>
                </div>
                <div class="flex items-center justify-between">
                    <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
                &copy;2024 Acme Corp. All rights reserved.
            </p>
        </div>
    )
}

export default SignInPage