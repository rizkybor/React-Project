import './App.css';
import { useState } from "react"
import AnimalShow from "./AnimalShow"

function getRandomAnimals(){
    const animals = ["bird","cat","cow","dog","gator","heart","horse"]
    return animals[Math.floor(Math.random()*animals.length)]
}

function ProfileCard({title, handle, image}) {
    const [animals, setAnimals] = useState([])

    // Looping Template
    const renderedAnimal = animals.map((animal, index)=>{
        return <AnimalShow type={animal} key={index} />
    })

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimals()])
    }

    
    return (
        <div className="card">
            <div className="app">
                <button onClick={handleClick}>
                    Add Animals
                </button>
                <div className="animal-list">{renderedAnimal}</div>
            </div>
        </div>
    )
}

export default ProfileCard