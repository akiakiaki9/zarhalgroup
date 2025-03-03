import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <div className="header-blok">
                <p className='header-blok__p-1'>Where Elegance Meeting Class</p>
                <h1>Textile</h1>
                <p className='header-blok__p-2'>When select the best of your choice, let our fabrics be an exception!</p>
                <Link to='/store'><button className='button'>STORE</button></Link>
            </div>
        </div>
    )
};