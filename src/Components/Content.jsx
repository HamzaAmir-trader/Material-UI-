import { Card, Grid } from '@material-ui/core'
import React from 'react'
import CoffeeCard from './CoffeeCard'
import coffeeMakerList from './constants'

const Content = () => {
    const getCoffeeMaker = (coffeeMakerObj) => {
        return (
            <Grid key={Math.random() * 1000} item xs={12} sm={4}>
                <CoffeeCard {...coffeeMakerObj} />
            </Grid>
        )
    }
    return (
        <Grid container spacing={4}>
            {coffeeMakerList.map(coffeeMakerObj => getCoffeeMaker(coffeeMakerObj))}
        </Grid>
    )
}

export default Content
