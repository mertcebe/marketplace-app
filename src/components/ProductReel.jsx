import React from 'react'
import ProductTitle from './ProductTitle';
import ProductListing from './ProductListing';

const ProductReel = () => {
    const list = [
        { id: 1, price: 10, name: 'icon 1', category: 'icon' },
        { id: 2, price: 7, name: 'UI kit 1', category: 'UI Kits' },
        { id: 3, price: 8, name: 'icon 2', category: 'icon' },
        { id: 4, price: 14, name: 'icon 3', category: 'icon' }
    ];
    return (
        <div>
            <section>
                <ProductTitle
                    title={'Brand new'}
                    subtitle={'Explore more than 10.000 icons and ui kits to use in websites, logos and social media.'}
                    href={'/'}
                />
                <div className='relative'>
                    <div className='mt-6 flex items-center w-full'>
                        <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
                            {list.map((product, i) => (
                                <ProductListing
                                    key={`product-${i}`}
                                    product={product}
                                    index={i}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ui kits */}
            <section className='my-20'>
                <ProductTitle
                    title={'UI Kits'}
                    subtitle={'Explore more than 10.000 ui kits to use in websites, logos and social media.'}
                    href={'/'}
                />
                <div className='relative'>
                    <div className='mt-6 flex items-center w-full'>
                        <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
                            {list.map((product, i) => (
                                <ProductListing
                                    key={`product-${i}`}
                                    product={product}
                                    index={i}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* icons */}
            <section className='my-20'>
                <ProductTitle
                    title={'Icons'}
                    subtitle={'Explore more than 10.000 icons to use in websites, logos and social media.'}
                    href={'/'}
                />
                <div className='relative'>
                    <div className='mt-6 flex items-center w-full'>
                        <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
                            {list.map((product, i) => (
                                <ProductListing
                                    key={`product-${i}`}
                                    product={product}
                                    index={i}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductReel