import "dotenv/config";

const parsePort = ( value:String | undefined): Number => {
const port = Number(value ?? 4000);

if(!Number.isInteger(port) || port < 1 || port > 65535 ){
    throw new Error("Port mut be a Intiger Between 1 to 65535")
}

return port;
}


