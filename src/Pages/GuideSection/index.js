import React, { Component } from "react";
import work from "../../Assets/work.png";
import WorkCards from "../../Component/workcard/workcard.js";

export class GuideSection extends Component {
    constructor() {
        super();
        this.state = {
            spaces: [
                {
                    id: 1,
                    name: "Guide to Affordable Coworking Spaces in Kuala Lumpur",
                    description:
                        "Take a stroll around the Golden Triangle of Kuala Lumpur, and you're bound to come across so many coworking spaces in every corner of the streets.The coworking space phenomenon isn't just a startup buzzword anymore",
                    pic: work
                },
                {
                    id: 2,
                    name: "Guide to Affordable Coworking Spaces in Kuala Lumpur",
                    description:
                        "Take a stroll around the Golden Triangle of Kuala Lumpur, and you're bound to come across so many coworking spaces in every corner of the streets.The coworking space phenomenon isn't just a startup buzzword anymore",
                    pic: work
                },
                {
                    id: 3,
                    name: "Guide to Affordable Coworking Spaces in Kuala Lumpur",
                    description:
                        "Take a stroll around the Golden Triangle of Kuala Lumpur, and you're bound to come across so many coworking spaces in every corner of the streets.The coworking space phenomenon isn't just a startup buzzword anymore",
                    pic: work
                }
            ]
        };
    }
    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center mt-5'>
                    <h1>TETAP TERINFORMASI</h1>
                </div>
                <div className='row'>
                    {this.state.spaces.map(
                        ({ id, name, subname, description, pic }) => (
                           
                                <WorkCards
                                    key={id}
                                    name={name}
                                    subname={subname}
                                    description={description}
                                    pic={pic}
                                />
                            
                        )
                    )}
                </div>
                <div className='row justify-content-center'>
                    <a href='google.com'><u>See all news ></u></a>
                </div>
            </div>
        )

    }
}

export default GuideSection;
