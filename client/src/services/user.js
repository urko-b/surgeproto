import axios from "axios";

const API_URL = "http://localhost:4000/api/";

const getProfile = async () => {
  let res = await axios.get(API_URL + "getProfile");
  return res.data;
}

const UserService = {
  getProfile
};

export default UserService;
