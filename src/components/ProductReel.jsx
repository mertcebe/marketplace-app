import React from 'react'
import ProductTitle from './ProductTitle';

const ProductReel = () => {
    const list = ['qwd'];
    return (
        <div>
            <ProductTitle
                title={'Brand new'}
                subtitle={'Explore more than 10.000 icons and ui kits to use in websites, logos and social media.'}
                href={'/'}
            />
            <div className='relative'>
                <div className='mt-6 flex items-center w-full'>
                    <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
                        {list.map((product, i) => (
                            // <ProductListing
                            //     key={`product-${i}`}
                            //     product={product}
                            //     index={i}
                            // />
                            <div>qwdqwd</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductReel