import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import union from "../../Assets/union.png";
import cohive from "../../Assets/cohive.png";
import justco from "../../Assets/justco.png";
import Cards from "../../Component/card/card.js";
import "./style.css"

class FeaturedSpace extends Component {
  constructor() {
    super();
    this.state = {
      spaces: [
        {
          id: 1,
          name: "UnionSpace",
          subname: "CoworkingSpace",
          description:
            "Be creative and passionate about your work in this coworking space.",
          pic: union
        },

        {
          id: 2,
          name: "CoHive",
          subname: "Event Space",
          description: "Throw great parties in this events",
          pic: cohive
        },

        {
          id: 3,
          name: "JustCo",
          subname: "Meeting and Conference Room",
          description:
            "A fully furnished meeting room for easy connection and collaboration",
          pic: justco
        },
        {
          id: 4,
          name: "CoHive",
          subname: "Event Space",
          description: "Throw great parties in this events",
          pic: cohive
        }
      ]
    };
  }
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <div>
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12">
              <h1>JAKARTA FEATURED SPACES</h1>
            </div>
          </div>

          <Carousel responsive={responsive}>
            {this.state.spaces.map(
              ({ id, name, subname, description, pic }) => (
                <div>
                  <Cards
                    key={id}
                    name={name}
                    subname={subname}
                    description={description}
                    pic={pic}
                  />
                </div>
              )
            )}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default FeaturedSpace;
