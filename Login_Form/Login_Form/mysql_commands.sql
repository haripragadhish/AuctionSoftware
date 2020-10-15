-- select salt,md5(md5(password)) from ilance_users

-- select username,salt,password, md5(md5('hari123')+':'+salt) from ilance_users

-- update ilance_users set password='7ac094f9789743d9b0cde4508a4b3d12' where username='prasad'

 -- select user_id, salt from ilance_users where username='prasad' 
-- select user_id where username=@username and password=md5(md5('hari123')+':'+@salt)
 
 
-- select count(*) from ilance_users group by username