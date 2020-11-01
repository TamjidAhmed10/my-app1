
import React from 'react'

import {Link} from 'react-router-dom'

export default function Home(){
    return (
        <div>
            <h1>Hello. go to <Link to="/about">About</Link> </h1>
        </div>
    )
}