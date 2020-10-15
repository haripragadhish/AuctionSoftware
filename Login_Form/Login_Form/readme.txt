1. Please do a npm install once you open this folder
2. I have changed the password value of user named "prasad" to "hari123" by using the salt from the table using mysql
3. Now Prasad's password is hashed using the above given criteria
4. Inorder to check for the hashed password match, we are hashing the user entered password in sql query
5. We are getting the salt of the particular user using a subquery
6. now if the passwords match user is authenticated