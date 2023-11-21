
CREATE TABLE images(
                       id INT UNSIGNED NOT NULL AUTO_INCREMENT,
                       image VARCHAR(255) NOT NULL,
                       PRIMARY KEY (id)
);

CREATE TABLE skills(
                       id INT UNSIGNED NOT NULL AUTO_INCREMENT,
                       name VARCHAR(255) NOT NULL,
                       performance INT UNSIGNED NOT NULL,
                       PRIMARY KEY (id)
);

CREATE TABLE projects(
                         id INT UNSIGNED NOT NULL AUTO_INCREMENT,
                         name VARCHAR(255) NOT NULL,
                         description TEXT NOT NULL,
                         link VARCHAR(255) NOT NULL,
                         PRIMARY KEY (id)
);

CREATE TABLE projects_images(
                                project_id INT UNSIGNED NOT NULL,
                                image_id INT UNSIGNED NOT NULL,
                                FOREIGN KEY (project_id) REFERENCES projects(id),
                                FOREIGN KEY (image_id) REFERENCES images(id)
);

CREATE TABLE projects_skills(
                                project_id INT UNSIGNED NOT NULL,
                                skill_id INT UNSIGNED NOT NULL,
                                FOREIGN KEY (project_id) REFERENCES projects(id),
                                FOREIGN KEY (skill_id) REFERENCES skills(id)
);

INSERT INTO projects (name, description, link) VALUES
('JobItBetter', 'Project de fin de formation, il a ete repris par la suite pour etre ameliore. Il s\'agit d\'une plateforme de mise en relation entre entreprises et demandeurs d''emploi. Le Projet est en cours de développement. Projet de fin de formation, il a ete repris par la suite pour etre ameliore. Il s\'agit d\'une plateforme de mise en relation entre entreprises et demandeurs d''emploi. Le Projet est en cours de développement.', 'https://github.com/Chadowww/JobItBetter'),
('Project Certification', 'Projet developpe dans le but de passer la certification RNCP. Il s''agit d''une plateforme de libraire en ligne. Le Projet n''est pas arrive à sont therme.', 'https://github.com/Chadowww/Porject_Certification'),
('ApiChado', 'Refonte en cours du Projet JobItBetter le but etant de travailler comme des Projets réel fonctionnant avec un Projet front et un Projet back et une API pour la communication.', 'https://github.com/Chadowww/ApiChado'),
('Portfolio-react', 'Projet de portfolio realise en React actuellement en developpement.', 'https://github.com/Chadowww/portfolio-react'),
('EarthWindAndWire', 'Premier Projet en POO sans framework php, il s''agit d''un reseau social.', 'https://github.com/WildCodeSchool/2023-02-PHP-Bordeaux-P2-EarthWindAndWire'),
('DHM', 'Projet de site vitrine pour un client, il s''agit d''un site de maintenant et de vente informatique.', 'https://github.com/Chadowww/DHM');

INSERT INTO skills(name, performance) VALUES
                                          ('PHP', 70),
                                          ('Symfony', 65),
                                          ('Mysql', 65),
                                          ('Laravel', 5),
                                          ('React', 50),
                                          ('TailwindCSS', 80),
                                          ('Bootstrap', 80),
                                          ('PhpUnit', 25),
                                          ('Twig', 50),
                                          ('API Rest', 50),
                                          ('Java Script', 60),
                                          ('Webpack', 60),
                                          ('Symfony UX', 45),
                                          ('HTML', 85),
                                          ('CSS', 85),
                                          ('Vue.JS', 5),
                                          ('Doctrine', 60),
                                          ('GitHub', 60),
                                          ('Node.js', 5),
                                          ('Express', 5)
;

INSERT INTO projects_skills (project_id, skill_id) VALUES
                                                       (1,1), (1,2), (1,3), (1,5), (1,7), (1,9), (1,11), (1,12), (1,13), (1,14), (1,15), (1,17), (1,18),
                                                       (2,1), (2,2), (2,3), (2,6), (2,8), (2,10), (2,11), (2,12), (2,13), (2,14), (2,15), (2,17), (2,18),
                                                       (3,1), (3,2), (3,3), (3,8), (3,10),
                                                       (4,3), (4,5), (4,6), (4,11), (4,12), (4,14), (4,15), (4,19), (4,20),
                                                       (5,1), (5,3), (5,7), (5,11), (5,14), (5,15),
                                                       (6,1), (6,4), (6,6), (6,12), (6,14), (6,15), (6,16)
;