import axios from "../../utils/Axios";
import { loadtv } from "../reducers/tvslice";
export { removetv } from "../reducers/tvslice";

export const asyncloadtv =  (id) =>async (dispatch, getstate) => {
    try {
        const detail = await axios.get(`/tv/${id}`)
        const externalid =  await axios.get(`/tv/${id}/external_ids`)
        const recommendations =await axios.get(`/tv/${id}/recommendations`)
        const videos =await axios.get(`/tv/${id}/videos`)
        const watchproviders = await axios.get(`/tv/${id}/watch/providers`)
        const similar=await axios.get(`/tv/${id}/similar`)
        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            videos: videos.data.results.find(m=>m.type==="Trailer"),
            watchproviders: watchproviders.data.results.IN,
            similar: similar.data.results,
        };
        dispatch(loadtv(theultimatedetails));
        
    }
    catch(e){
        console.log("Error :",e)
    }
}