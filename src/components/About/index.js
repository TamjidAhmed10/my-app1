import React from 'react'
import {Link} from 'react-router-dom'

export default function About(){

    return (
        <div>
            <h1>This is about Page <Link to="/">Home</Link></h1>
        </div>
    )
}