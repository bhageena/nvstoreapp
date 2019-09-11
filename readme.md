  

# Functionality:

- Name and Value are stored in the MySQL table *nv_store*.

- The Lambda functions are written in JavaScript.

- The PUT operation returns 'OK' if storing the name and value is successful.

- The GET operation returns the (name, value) pairs with the highest *value* in the table.

 # Caveats:

 Name is of text type in DB and in GET request fetching rows with highest value requires a group by.
 Group by on text type is not very performance friendly.


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
