import React, { useState } from "react";
import { FaGithub, FaRegFolderOpen } from 'react-icons/fa';
export default function Projects() {

    const [card, setCard] = useState([
        {
            title: "Learn Beginner Golang",
            text: "Collection of small code gists along my Golang learning journey",
            li1: "Go",
            li2: "Rest",
            li3: "API"
        },
        {
            title: "Kubernetes Handbook",
            text: "This handbook covers a beginner-friendly detailed understanding of Kubernetes core concepts.",
            li1: "Kubernetes",
        },
        {
            title: "IntelliJ Idea Tips & Tricks",
            text: "IntelliJ Idea Tips and Tricks for Java/Spring Microservices Handling",
            li1: "IntelliJ Idea",
        },
        {
            title: "100DaysOfCode",
            text: "Repository dedicated to my #100DaysOfCode journey",
            li1: "Kotlin/Java",
            li2: "Spring Microservices",
            li3: "Javascript",
            li4: "CSS",
            li5: "Python"
        },
        {
            title: "Portfolio Website v1",
            text: "Portfolio Website Version 1 hosted using GitHub Pages. Updates coming soon!",
            li1: "HTML",
            li2: "CSS",
            li3: "Javascript",
            li4: "Bootstrap"
        },
        {
            title: "Face Recognition in Python",
            text: "A real time face recognition system developed in Python using Pillow, OpenCV and NumPy libraries",
            li1: "Python",
            li2: "OpenCV",
            li3: "Pillow",
            li4: "NumPy"
        }
    ])

    return <div className="Projects">
        <div className="projects__title__cont">
            <h2 className="projects__title">Other Noteworthy Projects</h2>
            <p className="projects__title__link">
                View Complete List of Projects/Codes
            </p>
        </div>
        <div className="projects__row">

            {card.map(item => (
                <div className="projects__card">
                    <div className="projects__card-icons">
                        <FaRegFolderOpen className="folder__icon" />
                        <FaGithub className="github__icon" />
                    </div>
                    <div className="project__card-title">
                        <h4>{item.title}</h4>
                    </div>
                    <div className="projects__card-text">
                        <p>{item.text}</p>
                    </div>
                    <ul className="projects__card-footer">
                        <li>{item.li1}</li>
                        <li>{item.li2}</li>
                        <li>{item.li3} </li>
                        <li>{item?.li4} </li>
                        <li>{item?.li5} </li>
                        <li>{item?.li6} </li>
                    </ul>
                </div>
            ))}

        </div>
    </div>;
}
