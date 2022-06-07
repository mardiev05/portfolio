import React, { Component } from 'react';

class IveWorked extends Component {
    render() {
        return (
            <div className='worked'>
                <div className="card">
                    <ol>
                        <li> <p>Where I’ve Worked</p> <span className="card__line"></span></li>
                    </ol>

                    <div className="exp__row">
                        <ul className='exp__row-lists'>
                            <li>Upstatement</li>
                            <li>Scout</li>
                            <li>Apple</li>
                            <li>Scout</li>
                            <li>Starry</li>
                            <li>MullenLowe</li>
                        </ul>
                        <div className="exp">
                            <div className="exp__title">
                                <h3>Software Engineer Co-op <span>@ Starry</span></h3>
                                <p className='exp__date'>July - December 2016</p>
                            </div>
                            <ul className='exp__overview'>
                                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                                <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
                                <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IveWorked;