import React from "react";
import "./EventList.css";
import event1 from "../assets/images/indonesian.png";
import event2 from "../assets/images/kuliner.png";
import event3 from "../assets/images/makati.png";
import event4 from "../assets/images/culinery.png";

const events = [
    {
        img: event1,
        title: "INDONESIAN FESTIVAL",
        date: "01 Oktober 2023"
    },
    {
        img: event2,
        title: "KULINER NUSANTARA",
        date: "23 September 2023"
    },
    {
        img: event3,
        title: "MAKATI FESTIVAL",
        date: "07 Oktober 2023"
    },
    {
        img: event4,
        title: "INDONESIAN CULINARY",
        date: "19 Oktober 2023"
    }
];

const EventList = () => (
    <section className="event-section">
        <h2 className="event-title">Event Kuliner</h2>
        <div className="event-grid">
            {events.map((event, idx) => (
                <div className="event-card" key={idx}>
                    <img src={event.img} alt={event.title} className="event-image" />
                    <div className="event-info">
                        <h3 className="event-name">{event.title}</h3>
                        <p className="event-date">{event.date}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="button-container">
            <button className="lihat-lainnya">Lihat Lainnya <span>→</span></button>
        </div>
    </section>
);

export default EventList;