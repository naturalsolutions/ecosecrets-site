import { PropsWithChildren } from "react";
import Image from "next/image";

const Contact = ({
  name,
  img,
  description,
  children,
}: PropsWithChildren<{ name?: string; img?: any; description?: string }>) => (
  <div className="card mb-3 border-0" style={{ maxWidth: "900px" }}>
    <div className="row g-0">
      <div className="col-md-2">
        <Image
          src={img ? img : require("public/images/contacts/unknown.jpg")}
          style={{ width: 150, height: 150 }}
          alt={"Pas de photo disponible"}
        ></Image>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
