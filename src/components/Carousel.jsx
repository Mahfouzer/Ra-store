import React, { Component } from "react";
import ItemsCarousel from "react-items-carousel";

export default class Carousel extends Component {
  state = { activeItemIndex: 0, w: document.documentElement.clientWidth };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ w: document.documentElement.clientWidth });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  render() {
    return (
      <div className="carousel">
        <div
          style={{
            padding: "0 0px",
            maxWidth: 2000000,
            margin: "0 auto"
          }}
        >
          <ItemsCarousel
            infiniteLoop={false}
            gutter={30}
            activePosition={"center"}
            chevronWidth={60}
            disableSwipe={false}
            alwaysShowChevrons={false}
            numberOfCards={
              this.state.w > 900 ? 3 : Math.floor(this.state.w / 300)
            }
            slidesToScroll={1}
            outsideChevron={false}
            showSlither={true}
            firstAndLastGutter={true}
            activeItemIndex={this.state.activeItemIndex}
            requestToChangeActive={value =>
              this.setState({ activeItemIndex: value })
            }
            rightChevron={<button className="right-scroll">&#10240;</button>}
            leftChevron={<button className="left-scroll">&#10240;</button>}
          >
            {this.props.children}
          </ItemsCarousel>
        </div>
      </div>
    );
  }
}
