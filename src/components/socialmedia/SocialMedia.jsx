import React from "react";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialYoutube,
} from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import './socialmedia.css';

export default function SocialMedia() {
  return (
    <div className="social-container">
      <div className="social-icon">
        <SlSocialLinkedin />
      </div>
      <div className="social-icon">
        <SlSocialFacebook />
      </div>
      <div className="social-icon">
        <RiTwitterXFill />
      </div>
      <div className="social-icon">
        <SlSocialYoutube />
      </div>
    </div>
  );
}
