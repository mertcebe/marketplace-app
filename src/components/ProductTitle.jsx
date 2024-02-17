import Link from "next/link";

const ProductTitle = ({ title, subtitle, href }) => {
    return (
        <div className="md:flex md:items-center md:justify-between mb-4">
            <div className='max-w-2xl px-4 lg:max-w-4xl lg:px-0'>
                {title ? (
                    <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>
                        {title}
                    </h1>
                ) : null}
                {subtitle ? (
                    <p className='mt-2 text-xs text-gray-500'>
                        {subtitle}
                    </p>
                ) : null}
            </div>
            {href ? (
                <Link
                    href={href}
                    className='hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block'>
                    Shop the collection{' '}
                    <span aria-hidden='true'>&rarr;</span>
                </Link>
            ) : null}
        </div>
    )
}

export default ProductTitle;