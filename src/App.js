import React, { useState } from 'react';

import {fetchGallery} from './api/fetchGallery';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [gallery, setGallery] = useState({});

    const search = async (e) =>{
        if(e.key === 'Enter') {
            const data = await fetchGallery(query);
            setGallery(data);
            setQuery('');
        }
    }

    return (
        <div className="main-container">
            <img className="searchlogo" src="https://i.imgur.com/4YwQu1k.jpg" alt="search face" />
            <br></br>
            <h1>React Imgur Search Gallery</h1>
            <input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            {gallery.data && (
                <ul className="row"><h1>Searched Images</h1>
                {gallery.data.map(images => (
                    <li className="column"key={images.id}>
                    <img src={images.images[0].link} link={images.images[0].link} alt={images.title} />
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
}

export default App;