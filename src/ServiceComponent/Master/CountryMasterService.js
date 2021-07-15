import axios from "axios";

const addCountryDetails_URL = "/addCountryDetails";
const showCountryDetails_URL = "/showAllCountry";
const updateCountryDetails_URL = "/updateCountryDetails";
const deleteCountryDetails_URL = "/deleteCountryDetails";
class CountryMasterService{

   
    addCountryDetail(country)
    {
        return axios.post(addCountryDetails_URL,country);
    }

    showCountryDetail()
    {
        return axios.get(showCountryDetails_URL);
    }

    updateCountryDetail(country)
    {
        return axios.put(updateCountryDetails_URL,country);
    }

    getCountryById(id)
    {
        return axios.get(showCountryDetails_URL+'/'+id);
    }

    deleteCountryDetails_(country)
    {
        return axios.delete(deleteCountryDetails_URL,{ data: country });
    }
   
}
export default new CountryMasterService();