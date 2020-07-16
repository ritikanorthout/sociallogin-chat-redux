import React from "react";
import "./Home.css";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Chat from "../Chat/Chat";

function Home(props) {
  console.log("props", props);

  return (
    <div className="detail-container">
      <Header />
      <div className="text">Welcome {props.data.userInfo.name}
      </div>
      <Card className="containers">
        {(props.data.userInfo.imgUrl) &&
        <CardBody>
          <img
            width="200px"
            height="200px"
            src={props.data.userInfo.imgUrl}
            alt="Profle Pic"
          />
        </CardBody>
        }

        <CardBody>
          <CardTitle className="text">
            Name : {props.data.userInfo.name}
          </CardTitle>
          {props.data.userInfo.email ? (
            <p className="text">Email : {props.data.userInfo.email}</p>
          ) : null}
        </CardBody>
  
      </Card>
      <div>
      <Card className="containers2">
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <Chat name={props.data.userInfo.name}/>
        </CardBody>
      </Card>
    </div>

      <Footer />
    </div>
  );
}

export default Home;
