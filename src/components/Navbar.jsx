import Image from 'next/image'
import Link from 'next/link'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Navbar = async () => {
    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 lg:px-48 py-4 shadow-md shadow-slate-200'>
            <div className='flex justify-between items-center px-6'>
                <div className='flex items-center gap-8'>
                    <div className='flex'>
                        <Link href={`/`}>
                            <Image src={'/hippoicon.png'} width={34} height={34} alt='hippo' />
                        </Link>
                    </div>

                    <div>
                        navitems
                    </div>
                </div>

                <div className='flex items-center gap-10'>
                    <Link href={`/sign-in`} className='text-sm text-slate-500'>Sign In</Link>
                    <Link href={`/sign-up`} className='text-sm text-slate-500'>Create Account</Link>
                    <Link href={`/orders`} className='text-slate-700 text-sm relative'>
                        <LocalGroceryStoreIcon />
                        <span className='absolute -top-1 left-4 bg-blue-600 text-white text-center px-1 rounded-full text-xs font-semibold'>
                            0
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar