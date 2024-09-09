import { configureStore } from '@reduxjs/toolkit'
import moviereducer from './reducers/movieSlice'
import personreducer from './reducers/personslice'
import tvreducer from './reducers/tvslice'
export const store = configureStore({
    reducer: {
        movie: moviereducer,
        tv: tvreducer,
        person: personreducer,
    },
})