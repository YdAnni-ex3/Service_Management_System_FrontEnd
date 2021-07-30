import axios from "axios";

const addMakeDetails_URL = "/makeMaster/addMakeDetails";
const showAllMake_URL = "/makeMaster/showAllMake";
const updateMake_URL = "/makeMaster/updateMakeDetails";
class MakeMasterService{

   
    addMakeDetail(make)
    {
        return axios.post(addMakeDetails_URL,make);
    }

    showMakeDetails()
    {
        return axios.get(showAllMake_URL);
    }

    updateMakeDetail(make)
    {
        return axios.put(updateMake_URL,make);
    }

    getMakeById(id)
    {
        return axios.get(showAllMake_URL+'/'+id);
    }

    // deleteCountryDetails_(country)
    // {
    //     return axios.delete(deleteCountryDetails_URL,{ data: country });
    // }
   
}
export default new MakeMasterService();