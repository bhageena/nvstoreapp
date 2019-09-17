  

# Functionality:

- Name and Value are stored in the MySQL table *nv_store*.

- The Lambda functions are written in JavaScript.

- The PUT operation returns 'OK' if storing the name and value is successful.

- The GET operation returns the (name, value) pair with the highest *value* in the table. In case multiple rows are there matching a single highest value, it will return only the latest one.  

 


# Sample CURL Commands:
 
```shell

curl --request PUT \
  --url https://ct83ewufch.execute-api.ap-south-1.amazonaws.com/dev/nvstore/ \
  --header 'content-type: application/json' \
  --data '{
  "name": "chandan",
  "value": 10000
}'



curl --request GET \
--url https://ct83ewufch.execute-api.ap-south-1.amazonaws.com/dev/nvstore
