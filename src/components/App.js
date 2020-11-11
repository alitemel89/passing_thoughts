import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from '../utils/helpers';
import { AddThoughtForm } from './AddThoughtForm';

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
    
  
    return (
        <div className="App">
            <header>
                <h1>Passing Thoughts</h1>
            </header>

            <main>
                <AddThoughtForm addThought={addThought} />
            </main>
        </div>

    )    
      
}

export default App;


