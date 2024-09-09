import axios from "../../utils/Axios";
import { loadmovie } from "../reducers/movieSlice";
export { removemovie } from "../reducers/movieSlice";

export const asyncloadmovie =  (id) =>async (dispatch, getstate) => {
    try {
        const detail = await axios.get(`/movie/${id}`)
        const externalid =  await axios.get(`/movie/${id}/external_ids`)
        const recommendations =await axios.get(`/movie/${id}/recommendations`)
        const videos =await axios.get(`/movie/${id}/videos`)
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`)
        const similar=await axios.get(`/movie/${id}/similar`)
        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            videos: videos.data.results.find(m=>m.type==="Trailer"),
            watchproviders: watchproviders.data.results.IN,
            similar: similar.data.results,
        };
        dispatch(loadmovie(theultimatedetails));
        
    }
    catch(e){
        console.log("Error :",e)
    }
}