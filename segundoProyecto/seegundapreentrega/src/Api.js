import axios from "axios";


const buscador = async (termino) => {

    const response = await axios.get("https://api.unsplash.com/search/photos", {

        headers: {
            Authorization: "Client-ID aG5_phBqFMMlsVZ59hhinw23bpb8GJxFvsFkJXX0KYI"
        },

        params: {
            query: termino
        }

    })

    return response.data.results



}



export default buscador;

