
select p.project_title,p.date_added,c.category_name,u.username from ilance_projects as p 
join ilance_users as u on p.user_id = u.user_id
left join ilance_categories as c on p.cid = c.cid 
 

