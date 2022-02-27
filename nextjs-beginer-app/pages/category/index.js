import Link from 'next/link'
import React from 'react'

function Category() {

  const categories = [
    { id: 1, name: 'Fish' },
    { id: 2, name: 'Grocery' },
    { id: 3, name: 'Rice' },
    { id: 4, name: 'Oil' },
  ]
  return (
    <div>
      <h1>Category</h1>
      <ul>
        {
          categories.map((item, index) => {
            return (
              <Link key={index} href={`/category/${item.id}?subcategory=lifestyle`} passHref>
                <li>
                  {item.id}. {item.name}
                </li>
              </Link>

            )
          })
        }
      </ul>
      <br />
      <Link href='/.' passHref>Back to Home</Link>
    </div>
  )
}

export default Category