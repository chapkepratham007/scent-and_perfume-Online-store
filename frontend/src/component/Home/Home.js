import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../inc/Slider';
import photo1 from '../../images/photo1home.jpg'
import photo2 from '../../images/photo2home.jfif'
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Pratham Perfumes</p>
            <h1 >FIND AWESOME PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
            
          </div>
          <br>
          
          </br>
          <div>
          <h2 className="homeHeading1">Offer Wall</h2>
            <div className="slider">
          <Slider />
          </div>

          <br></br>
          <br></br>
          <br></br>
        <div >
          <a style={{textDecoration:"none"}}href="http://localhost:3000/products">
        <img style={{float:"left", width:"540px", height:"359px"}}src={photo1} alt="perfume" /><h1 className= "heading0"><h1 className="heading00">Click Here to Buy Trending Products</h1></h1>
        </a>
        </div>
        
       
        <div>
          <a style={{textDecoration:"none"}} href="http://localhost:3000/products/versace" alt="">
          <img style={{float:"right",width:"550px", height:"411px"}}src={photo2}  alt="cosmetics" />
          <h1 className= "heading2"><h1 className="heading22">Buy Awesome products at <del style={{backgroundColor:"yellow",color:"black",textShadow:"none"}}>best</del> cheaper price</h1> </h1> 
          </a>
          </div>


          <h3 className="homeHeading">Featured Products</h3>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          </div>
          
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
