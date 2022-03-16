import React from 'react'
import categoryData from '../mockdata/categories'
import CategoryItem from './CategoryItem'

const CategoryList = () => {
  return (
    <div class="category-item-list flex children-centered wrap">
        {
            categoryData.map((category)=><CategoryItem category={category}/>)
        }
    </div>
  )
}

export default CategoryList