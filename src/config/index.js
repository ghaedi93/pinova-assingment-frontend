require("dotenv").config();
const manualAddress = "";
const serverUrl = manualAddress || window.location.origin;
export default serverUrl;
