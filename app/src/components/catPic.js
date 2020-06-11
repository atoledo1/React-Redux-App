import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCatImage } from "../actions/actions";

const CatImage = (props) => {
 

  useEffect(() => {
    props.getCatImage();
  }, [props.getCatImage]);

  if (props.isFetching) {
    return <h3>Getting you a cat!</h3>;
  }

  return (
    <div>
      <img src={props.catImage} alt="a cat" />
      <div>
      <button onClick={props.getCatImage}>Cute Kitty </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  
  return {
    catImage: state.image.catImage,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getCatImage })(CatImage);
