import React from "react";
import photo from "./Photo.jpg";
import photo1 from "./photo1.jpg"
import photo2 from "./photo2.jpg"

const ProfilePhoto = () => {
  return (
    <div className="container">
     
      <img className="image" src={photo} alt="myPic" />
      <img className="image" src={photo1} alt="myPic" />
      <img className="image" src={photo2} alt="myPic" />

    </div>
  );
};

export default ProfilePhoto;
