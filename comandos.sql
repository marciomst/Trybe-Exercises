# SAKILA
SELECT cu.first_name AS `primeiro_nome`, cu.last_name, ad.address, ad.district, ci.city, co.country
	FROM customer AS cu
INNER JOIN address AS ad ON cu.address_id = ad.address_id
INNER JOIN city AS ci ON ci.city_id = ad.city_id
INNER JOIN country AS co ON co.country_id = ci.country_id
	WHERE first_name = 'PATRICIA' OR first_name = 'LISA';
 

# DB
SELECT friend_name, pet_name 
	FROM friends AS fr
RIGHT JOIN pets AS pe
	ON fr.friend_id = pe.owner_id;