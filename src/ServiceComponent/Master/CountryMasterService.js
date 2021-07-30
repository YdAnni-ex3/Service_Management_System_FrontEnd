import axios from "axios";

const addCountryDetails_URL = "/countryMaster/addCountryDetails";
const showCountryDetails_URL = "/countryMaster/showAllCountry";
const updateCountryDetails_URL = "/countryMaster/updateCountryDetails";
const deleteCountryDetails_URL = "/countryMaster/deleteCountryDetails";
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