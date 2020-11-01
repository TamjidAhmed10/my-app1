import React from 'react'
import {useParams} from 'react-router-dom'

export default function Greetings(){

    let params = useParams()
    return (
        <h1>Greetings my fellow {params.var1}</h1>
    )
}