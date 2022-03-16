import React from 'react'
import { CategoryList, SearchBar } from '../components';
import ProductList from '../components/ProductList';
import { CategorySection } from '../containers';

const Home = () => {
  return (
    <>
    <section className="avavya-hero w-90">
        <div className="avavya-hero-img w-100 flex">
        </div>
        <div className="avavya-hero-txt">
            <h1 className="heading1">Order your</h1>
            <h1 className='heading1'>Daily Groceries</h1>
            <h2 className="heading2 txt-brand-color gap-d30">#Free Delivery</h2>
            <SearchBar/>   
        </div>
    </section>
    <CategorySection title="Categories">
      <CategoryList />
    </CategorySection>
    <CategorySection title="Popular Items" variation="primary">
      <ProductList/>
    </CategorySection>
    </>
  )
}

export default Home;