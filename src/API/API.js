import axios from "../axios";

// ***** POST SEND EMAIL ***** //
export const SendEmail = async ({ firstName, lastName, email, phone, message }, { setSend, setLoading }) => {
  try {
    setLoading(true);
    const data = { firstName, lastName, email, phone, message }
    let response = await axios.post(`https://mern-shoppay-3ce29f4adce3.herokuapp.com/api/send`, data);

    if (response) {
      setSend(response.data);
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
    console.log('ERROR SEND:', error);
  }
};