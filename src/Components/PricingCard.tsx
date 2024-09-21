import React from "react";
import "./PricingCardStyle.css";
import { Link } from "react-router-dom";

interface PricingCardProps {
  planTypes: string;
  price: string;
  duration: string;
  size: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  planTypes,
  price,
  duration,
  size,
}) => {
  return (
    <div className="card">
      <h2> {planTypes} </h2>
      <span className="bar"> </span>
      <p className="btc">{price}</p>
      <p>{duration}</p>
      <p>{size}</p>
      <p>Featured</p>
      <p>Responsive Design</p>
      <Link to="/contact" className="btn">
        Purchase Now
      </Link>
    </div>
  );
};

export default PricingCard;
