

// import React from 'react';
// import Container from '@/app/components/Container';
// import { Metadata } from 'next';
// import ProductImage from '@/app/components/ProductImage';
// import { FaRegEye } from 'react-icons/fa6';
// import PriceFormat from '@/app/components/PriceFormat';
// import AddToCartButton from '@/app/components/AddToCartButton';
// import { MdStar } from 'react-icons/md';
// import PriceTag from '@/app/components/PriceTag';

// const fetchData = async (url: string) => {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error('Failed to fetch data');
//     return res.json();
//   } catch (error) {
//     console.error('Fetch error:', error);
//     return null;
//   }
// };

// export const metadata: Metadata = {
//   title: 'Product View Page | Amazon Clone App',
// };

// interface Props {
//   searchParams: {
//     id: string;
//   };
// }

// const SingleProductPage = async ({ searchParams }: Props) => {
//   const { id } = searchParams;
//   const endpoint = `https://dummyjson.com/products/${id}`;
//   const product = await fetchData(endpoint);

//   if (!product) {
//     return (
//       <Container className="py-10">
//         <p className="text-center text-red-500">Product not found or failed to load.</p>
//       </Container>
//     );
//   }

//   return (
//     <Container className='py-10'>
     
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//  <ProductImage product={product} />

// <div className="flex flex-col gap-4">
//         <h2 className="text-3xl font-bold">{product?.title}</h2>

//         {/* Rating */}
       

//         {/* Viewers */}
// <div className='flex items-center justify-between gap-2 ' >
// <PriceTag  regularPrice={product?.price + product?.discountPercentage / 100} discountedPrice={product?.price -

//   product?.discountPercentage /100
// }   />
//  <div className='flex items-center gap-1 '> 


//           <div className="text-base flex items-center gap-1">
//             {Array.from({ length: 5 }).map((_, index) => {
//               const filled = index + 1 <= Math.floor(product?.rating);
//               const halfFilled =
//                 index + 1 > Math.floor(product?.rating) &&
//                 index < Math.ceil(product?.rating);

//               return (
//                 <MdStar
//                   key={index}
//                   className={`text-xl ${
//                     filled
//                       ? 'text-[#fa8900]'
//                       : halfFilled
//                       ? 'text-[#f7ca00]'
//                       : 'text-[#ccc]'
//                   }`}
//                 />
//               );
//             })}
//           </div>
//           <p className="text-base font-semibold">
//             ({product?.rating.toFixed(1)} reviews)
//           </p>
//         </div>

// </div>

//         <p className="flex items-center text-sm text-gray-700">
//           <FaRegEye className="mr-1" />
//           <span className="font-semibold mr-1">250+ people are viewing this right now</span>
//         </p>

//         {/* Discount */}
//         <p>
//           You are saving{' '}
//           <span className="text-base font-semibold text-green-500">
//             <PriceFormat amount={(product?.price * product?.discountPercentage) / 100} />
//           </span>{' '}
//           upon purchase
//         </p>

//         {/* Description */}
//         <div className="text-sm tracking-wide text-gray-800">
//           <p>{product?.description}</p>
//           {product?.warrantyInformation && (
//             <p className="text-base mt-2">{product?.warrantyInformation}</p>
//           )}
//         </div>

//         {/* Details */}
//         <p>
//           Brand: <span className="font-medium">{product?.brand}</span>
//         </p>
//         <p>
//           Category: <span className="font-medium capitalize">{product?.category}</span>
//         </p>

//         {/* Tags */}
//         {Array.isArray(product?.tags) && product.tags.length > 0 && (
//           <p>
//             Tags:{' '}
//             {product.tags.map((item: string, index: number) => (
//               <span key={index} className="font-medium capitalize">
//                 {item}
//                 {index < product.tags.length - 1 && ', '}
//               </span>
//             ))}
//           </p>
//         )}

//         {/* Add to Cart */}
//         <AddToCartButton product={product} />

//         {/* Checkout Secure Message */}
//         <div className="bg-[#f7f7f7] p-5 md:p-10 rounded-md flex flex-col items-center justify-center gap-2  ">
//           <p className="font-semibold">Guaranteed safe & secure checkout</p>
//         </div>
//       </div>


//       </div>
// <div className='p-10 bg-[#f7f7f7] w-full flex items-center justify-center flex-wrap gap-5 md:gap-10'>

// {product?.reviews?.map((item)=>(

// <div key={item?.reviewerName}

// className='bg-oklch(98.5% 0.002 247.839) p-5 border-[1px] border-[#fa8900/50] rounded-md hover:bg-oklch(98.5% 0.002 247.839) duration-200 flex flex-col gap-1'
// >

// <p className="text-base font-semibold ">{item?.comment}</p>


// <div className='text-xs'>
// <p className='font-semibold ' >{item?.reviewerName}</p>
// <p className='font-semibold '>{item?.reviewerEmail}</p>

// </div>
// <div className='flex items-center'>

// {Array.from({length:5}).map((_,index)=>(

//   <MdStar key={index}

//  className={`${index < item?.rating?

//   "text-[#fa8900]" : "text-[#ccc]"
//  }`}

  
//   />
// ))}

// </div>
// </div>

// ))}
// </div>


//     </Container>
//   );
// };

// export default SingleProductPage;

import React from 'react';
import Container from '@/app/components/Container';
import { Metadata } from 'next';
import ProductImage from '@/app/components/ProductImage';
import { FaRegEye } from 'react-icons/fa6';
import PriceFormat from '@/app/components/PriceFormat';
import AddToCartButton from '@/app/components/AddToCartButton';
import { MdStar } from 'react-icons/md';
import PriceTag from '@/app/components/PriceTag';

const fetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

export const metadata: Metadata = {
  title: 'Product View Page | Amazon Clone App',
};

interface Props {
  searchParams: URLSearchParams;  // تم تعديل النوع هنا
}

const SingleProductPage = async ({ searchParams }: Props) => {
  const id = searchParams.get('id');

  if (!id) {
    return (
      <Container className="py-10">
        <p className="text-center text-red-500">Product ID is missing.</p>
      </Container>
    );
  }

  const endpoint = `https://dummyjson.com/products/${id}`;
  const product = await fetchData(endpoint);

  if (!product) {
    return (
      <Container className="py-10">
        <p className="text-center text-red-500">Product not found or failed to load.</p>
      </Container>
    );
  }

  return (
    <Container className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductImage product={product} />

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{product?.title}</h2>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
              const filled = index + 1 <= Math.floor(product?.rating);
              const halfFilled =
                index + 1 > Math.floor(product?.rating) &&
                index < Math.ceil(product?.rating);

              return (
                <MdStar
                  key={index}
                  className={`text-xl ${
                    filled
                      ? 'text-[#fa8900]'
                      : halfFilled
                      ? 'text-[#f7ca00]'
                      : 'text-[#ccc]'
                  }`}
                />
              );
            })}
            <p className="text-base font-semibold">({product?.rating.toFixed(1)} reviews)</p>
          </div>

          <p className="flex items-center text-sm text-gray-700">
            <FaRegEye className="mr-1" />
            <span className="font-semibold mr-1">250+ people are viewing this right now</span>
          </p>

          <PriceTag
            regularPrice={product?.price + product?.discountPercentage / 100}
            discountedPrice={product?.price - product?.discountPercentage / 100}
          />

          <p>
            You are saving{' '}
            <span className="text-base font-semibold text-green-500">
              <PriceFormat amount={(product?.price * product?.discountPercentage) / 100} />
            </span>{' '}
            upon purchase
          </p>

          <div className="text-sm tracking-wide text-gray-800">
            <p>{product?.description}</p>
            {product?.warrantyInformation && (
              <p className="text-base mt-2">{product?.warrantyInformation}</p>
            )}
          </div>

          <p>
            Brand: <span className="font-medium">{product?.brand}</span>
          </p>
          <p>
            Category: <span className="font-medium capitalize">{product?.category}</span>
          </p>

          {Array.isArray(product?.tags) && product.tags.length > 0 && (
            <p>
              Tags:{' '}
              {product.tags.map((item: string, index: number) => (
                <span key={index} className="font-medium capitalize">
                  {item}
                  {index < product.tags.length - 1 && ', '}
                </span>
              ))}
            </p>
          )}

          <AddToCartButton product={product} />

          <div className="bg-[#f7f7f7] p-5 md:p-10 rounded-md flex flex-col items-center justify-center gap-2">
            <p className="font-semibold">Guaranteed safe & secure checkout</p>
          </div>
        </div>
      </div>

      <div className="p-10 bg-[#f7f7f7] w-full flex items-center justify-center flex-wrap gap-5 md:gap-10">
        {product?.reviews?.map((item: any) => (
          <div
            key={item?.reviewerName}
            className="bg-oklch(98.5% 0.002 247.839) p-5 border-[1px] border-[#fa8900/50] rounded-md hover:bg-oklch(98.5% 0.002 247.839) duration-200 flex flex-col gap-1"
          >
            <p className="text-base font-semibold">{item?.comment}</p>
            <div className="text-xs">
              <p className="font-semibold">{item?.reviewerName}</p>
              <p className="font-semibold">{item?.reviewerEmail}</p>
            </div>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <MdStar
                  key={index}
                  className={`${
                    index < item?.rating ? 'text-[#fa8900]' : 'text-[#ccc]'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SingleProductPage;

