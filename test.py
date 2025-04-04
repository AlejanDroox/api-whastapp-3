import http.client
import json
from time import sleep
conn = http.client.HTTPSConnection("147.93.130.43", 3001)

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "application/json" 
}

payload = json.dumps({
  "message": "ignorar",
  "number": "584126468694"
})



for i in range(0, 25):
    sleep(1)
    conn.request("POST", "/v1/messages", payload, headersList)
    response = conn.getresponse()
    result = response.read()

    print(result.decode("utf-8"))