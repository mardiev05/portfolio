import React, { Component } from "react";

export default class Portfolios extends Component {
    render() {
        return <div className="portfolio">
            <div className="card">
                <ol>
                    <li> Some Things I’ve Built <span className="card__line"></span></li>
                </ol>

                {/* ----------------------Halcyon------------------------------------------------ */}


                <div className="halcyon__row">
                    <div className="halcyon__card">
                        <div className="halcyon__img">
                            <img src="https://miro.medium.com/max/1400/1*82FDExCfh-idv8rJ7czz-A.png" alt="" />
                        </div>
                        <div className="halcyon__content-tow">
                            <div className="content__title">
                                <p>Featured Project</p>
                                <h3>Halcyon Theme</h3>
                            </div>
                            <div className="content__text">
                                <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                            </div>
                            <ul>
                                <li>VS Code</li>
                                <li>Sublime</li>
                                <li>Text</li>
                                <li>Atom</li>
                                <li>iTerm2</li>
                                <li>Hyper</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ----------------------Spotify------------------------------------------------ */}

                <div className="spotify__row">
                    <div className="spotify__card">
                        <div className="spotify__content-tow">
                            <div className="content__title">
                                <p>Featured Project</p>
                                <h3>Spotify Profile</h3>
                            </div>
                            <div className="content__text">
                                <p>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                            </div>
                            <ul>
                                <li>React</li>
                                <li>Styled</li>
                                <li>Components</li>
                                <li>Express</li>
                                <li>Spotify</li>
                                <li>API</li>
                                <li>Heroku</li>
                            </ul>
                        </div>
                        <div className="spotify__img">
                            <img src="https://techcrunch.com/wp-content/uploads/2020/12/GettyImages-1158411062.jpg?w=730&crop=1" alt="" />
                        </div>
                    </div>
                </div>

                {/* ----------------------Book------------------------------------------------ */}

                <div className="book__row">
                    <div className="book__card">
                        <div className="book__img">
                            <img src="https://embed-ssl.wistia.com/deliveries/d4b1dbc916195ceca90e0111d8d60c5e.jpg" alt="" />
                        </div>
                        <div className="book__content-tow">
                            <div className="content__title">
                                <p>Featured Project</p>
                                <h3>Build a Spotify Connected App</h3>
                            </div>
                            <div className="content__text">
                                <p>Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
                                    <br /><br />
                                    Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers
                                    everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a
                                    React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.</p>
                            </div>
                            <ul>
                                <li>React</li>
                                <li>Express</li>
                                <li>Spotify</li>
                                <li>API</li>
                                <li>Styled</li>
                                <li>Components</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>;
    }
}
