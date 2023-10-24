import React from 'react'

import "./Card.css";

export const Card = ({
    imgSrc,
    imgAlt, 
    title, 
    description,
    buttonText,
    link,
}) => {
  return (
    <div className="card-container">
        {imgSrc && imgAlt &&(
        <img src={imgSrc} alt={imgAlt} className="card-img"></img>
)}
       {title && <h1 className="card-title">{title}</h1>}
        {description && <p className="card-description"> {description}
        </p>}
        {buttonText && link && (<a href={link} className="card-btn">
            {buttonText}
        </a>
        )}
        
    </div>
  );
};

<Card 
  imgSrc="https://picsum.photos/300/200" 
  imgAlt="Card Image"
  title="Card Title"
  description="This is the card description, you can add more details about the card here."
  buttonText="Learn More"
  link="cardPage"
  />