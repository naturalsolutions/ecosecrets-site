import { PropsWithChildren } from "react";
import Image from "next/image";

const Member = ({
  name,
  img,
  description,
}: PropsWithChildren<{ name?: string; img?: any; description?: string }>) => (
  <div className="card">
    <Image
      src={img ? img : require("public/images/contacts/unknown.jpg")}
      className="card-img-top"
      alt="..."
      style={{ maxWidth: "80%", height: "80%", content: "center" }}
    ></Image>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

export default Member;
