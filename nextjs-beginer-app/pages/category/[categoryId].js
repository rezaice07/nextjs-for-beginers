import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function CategoryDetail() {

  const router=useRouter();

  console.log(router.query.categoryId)


  return (
    <h1>
      Category Details
      
      <br/>
      <Link href='/category' passHref>Back to category</Link>

    </h1>
  )
}

export default CategoryDetail