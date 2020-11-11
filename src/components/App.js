import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from '../utils/helpers';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';

function App() {
    const [thoughts, setThoughts] = useState([
        {
            id: generateId(),
            text: 'This is your first',
            expiresAt: getNewExpirationTime()

        },
        {
            id: generateId(),
            text: 'This is your second',
            expiresAt: getNewExpirationTime()

        }
    ]);

    const addThought = (thought) => {
        setThoughts(prev => [thought, ...prev])
    }

    const removeThought = (thoughtIdtoRemove) => {
        setThoughts(prev => prev.filter((thought) => thought.id !== thoughtIdtoRemove))
    }
    
  
    return (
        <div className="App">
            <header>
                <h1>Passing Thoughts</h1>
            </header>

            <main>
                <AddThoughtForm addThought={addThought} />
                <ul className="thoughts">
                {thoughts.map((thought) => (<Thought thought={thought} removeThought={removeThought} key={thought.id} />) )}
                </ul>
            </main>
        </div>
    )    
      
}

export default App;


