import React from "react";
import {
  Twitter,
  Facebook,
  Whatsapp,
  Mail,
  Telegram,
} from "react-social-sharing";
const Sharing = ({ link }) => {
  return (
    <div className="d-flex flex-wrap align-items-center ">
      <Twitter solidcircle small link={link} />
      <Facebook solidcircle small link={link} />
      <Whatsapp solidcircle small link={link} />
      <Mail solidcircle small link={link} />
      <Telegram solidcircle small link={link} />
    </div>
  );
};

export default Sharing;
