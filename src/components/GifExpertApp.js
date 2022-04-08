import React, { useState } from 'react';
import AddCategory from './Category/AddCategory';
import './GifExpertApp.css';
import GifGrid from './GifGrid/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Samurai X'])


    // const handleAdd = () => {
    //     setCategories( cats => [...categories, 'Boruto'])
    // }

  return (
    <>
        <div>
            <h2>Gif GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr></hr>
            <button>Agregar</button>
            <ol>
                    {
                        categories.map(category => (
                            <GifGrid
                            key = { category } 
                            category = { category }
                            />
                       ))
                    }
                </ol>
        </div>
    </>
  )
}
