import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          molestias, fugiat alias accusamus quod blanditiis pariatur asperiores
          doloribus obcaecati consequatur!
        </p>
        <p>
            <Link to={"/"}>
                Back to Home
            </Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
