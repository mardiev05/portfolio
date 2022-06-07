import React, { Component } from 'react';

class IveWorked extends Component {
    render() {
        const { expHandler, newList } = this.props
        const pos = newList?.[0]

        return (
            <div className='worked'>
                <div className="card">
                    <ol>
                        <li> <p>Where I’ve Worked</p> <span className="card__line"></span></li>
                    </ol>

                    <div className="exp__row">
                        <ul className='exp__row-lists'>
                            <li onClick={() => expHandler(1)}>Upstatement</li>
                            <li onClick={() => expHandler(2)}>Scout</li>
                            <li onClick={() => expHandler(3)}>Apple</li>
                            <li onClick={() => expHandler(4)}>Scout</li>
                            <li onClick={() => expHandler(5)}>Starry</li>
                            <li onClick={() => expHandler(6)}>MullenLowe</li>
                        </ul>

                        <div className="exp">
                            <div className="exp__title">
                                <h3>{pos?.title} <span>{pos?.titleSpan}</span></h3>
                                <p className='exp__date'>{pos?.date}</p>
                            </div>
                            <ul className='exp__overview'>
                                <li>{pos?.firsP}</li>
                                <li>{pos?.secondP}</li>
                                <li>{pos?.thirdP}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IveWorked;