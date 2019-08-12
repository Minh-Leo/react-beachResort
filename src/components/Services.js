import React, {Component} from "react";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "basic guest services and facilities. Larger, higher-priced hotels may provide additional guest facilities such as a swimming pool, business centre."
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info:
          "with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts."
      },
      {
        icon: <FaShuttleVan />,
        title: "Airport shuttles",
        info:
          "a hotel is required by law to serve food and drinks to all guests within certain stated hours.[citation needed] In Japan, capsule hotels provide."
      },
      {
        icon: <FaBeer />,
        title: "Strongest beers",
        info:
          "precursor to the modern hotel was the inn of medieval Europe. For a period of about 200 years from the mid-17th century, coaching inns served."
      }
    ]
  };

  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
