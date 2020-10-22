import React from "react";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import FeaturedProducts from '../components/Products/FeaturedProducts';

export default function Home() {
  return <>
  <Banner>
    <Link to="products" className="btn btn-primary btn-banner-back">
      our flowers
    </Link>
  </Banner>
  <FeaturedProducts />
  </>;
}
