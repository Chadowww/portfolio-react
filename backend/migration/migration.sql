
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
                                          ('Twig', 50),
                                          ('Java Script', 60),
                                          ('React', 50),
                                          ('TailwindCSS', 80),
                                          ('Bootstrap', 80),
                                          ('HTML', 85),
                                          ('CSS', 85),
                                          ('API Rest', 50),
                                          ('PhpUnit', 25),
                                          ('Webpack', 60),
                                          ('Doctrine', 60),
                                          ('GitHub', 60),
                                          ('Symfony UX', 45),
                                          ('Vue.JS', 5),
                                          ('Node.js', 5),
                                          ('Express', 5),
                                          ('Laravel', 5)
;

INSERT INTO projects_skills (project_id, skill_id) VALUES
                                                       (1,1), (1,2), (1,3), (1,4), (1,5), (1,8), (1,9), (1,10), (1,13), (1,14), (1,15), (1,16),
                                                       (2,1), (2,2), (2,3), (2,4), (2,5), (2,7), (2,9), (2,10), (2,12), (2,13), (2,14), (2,15), (2,16),
                                                       (3,1), (3,2), (3,3), (3,11), (3,12),(3,15),
                                                       (4,5), (4,6), (4,7), (4,9), (4,10), (4,11), (4,13), (4,15),(4,18),(4,19),
                                                       (5,1), (5,2), (5,5), (5,8), (5,19), (5,10),(5,15),
                                                       (6,1), (6,5), (6,7), (6,9), (6,10), (6,16), (6,20)
;
INSERT INTO images (image) VALUES
                               ('../../images/projects/ApiChado/API-database.png'),
                               ('../../images/projects/ApiChado/API-doc.png'),
                               ('../../images/projects/ApiChado/API-exception.png'),
                               ('../../images/projects/ApiChado/API-repository.png'),
                               ('../../images/projects/ApiChado/API-routing.png'),
                               ('../../images/projects/ApiChado/API-test-valid.png'),
                               ('../../images/projects/ApiChado/API-video-controller.mov'),
                               ('../../images/projects/ApiChado/API-video-doc.mov'),
                               ('../../images/projects/ApiChado/API-video-doc2.mov'),
                               ('../../images/projects/ApiChado/API-video-test.mov'),
                               ('../../images/projects/ApiChado/API-video-test2.mov'),
                               ('../../images/projects/DHM/DHM-contact.png'),
                               ('../../images/projects/DHM/DHM-home.png'),
                               ('../../images/projects/DHM/DHM-home-animation.mov'),
                               ('../../images/projects/DHM/DHM-map.png'),
                               ('../../images/projects/DHM/DHM-open.png'),
                               ('../../images/projects/EarthWindAndWire/BOKAS-home.png'),
                               ('../../images/projects/EarthWindAndWire/BOKAS-home-user.png'),
                               ('../../images/projects/EarthWindAndWire/BOKAS-user-posted.png'),
                               ('../../images/projects/EarthWindAndWire/BOKAS-login.png'),
                               ('../../images/projects/EarthWindAndWire/BOKAS-login-animation.mov'),
                               ('../../images/projects/EarthWindAndWire/BOKAS-user-profile-edit.png'),
                               ('../../images/projects/JobItBetter/JIB-admin-pannel.pgn'),
                               ('../../images/projects/JobItBetter/JIB-header-job-offer'),
                               ('../../images/projects/JobItBetter/JIB-home.png'),
                               ('../../images/projects/JobItBetter/JIB-my-search.png'),
                               ('../../images/projects/JobItBetter/JIB-mys-search-result.png'),
                               ('../../images/projects/JobItBetter/JIB-serch.png'),
                               ('../../images/projects/JobItBetter/JIB-update-infos.png'),
                               ('../../images/projects/JobItBetter/JIB-user-pannel.png'),
                               ('../../images/projects/JobItBetter/JIB-validation.png'),
                               ('../../images/projects/JobItBetter/JIB-video-home.move'),
                               ('../../images/projects/JobItBetter/JIB-video-job-offer.mov'),
                               ('../../images/projects/ProjectCertification/PC-admin-pannel1.png'),
                               ('../../images/projects/ProjectCertification/PC-admin-pannel2.png'),
                               ('../../images/projects/ProjectCertification/PC-book-page.png'),
                               ('../../images/projects/ProjectCertification/PC-calendar.png'),
                               ('../../images/projects/ProjectCertification/PC-login.png'),
                               ('../../images/projects/ProjectCertification/PC-card.png'),
                               ('../../images/projects/ProjectCertification/PC-update-profile.png'),
                               ('../../images/projects/Protfolio-react/PR-contact.png'),
                               ('../../images/projects/Protfolio-react/PR-database.png'),
                               ('../../images/projects/Protfolio-react/PR-home.png'),
                               ('../../images/projects/Protfolio-react/PR-loader.png'),
                               ('../../images/projects/Protfolio-react/PR-loader2.png'),
                               ('../../images/projects/Protfolio-react/PR-model.png'),
                               ('../../images/projects/Protfolio-react/PR-project-list.png'),
                               ('../../images/projects/Protfolio-react/PR-routing.png'),
                               ('../../images/projects/Protfolio-react/PR-routing2.png'),
                               ('../../images/projects/Protfolio-react/PR-skill.png');

INSERT INTO projects_images (project_id, image_id) VALUES
                                                       (3,1),
                                                       (3,2),
                                                       (3,3),
                                                       (3,4),
                                                       (3,5),
                                                       (3,6),
                                                       (3,7),
                                                       (3,8),
                                                       (3,9),
                                                       (3,10),
                                                       (3,11),
                                                       (6,12),
                                                       (6,13),
                                                       (6,14),
                                                       (6,15),
                                                       (6,16),
                                                       (5,17),
                                                       (5,18),
                                                       (5,19),
                                                       (5,20),
                                                       (5,21),
                                                       (5,22),
                                                       (1,23),
                                                       (1,24),
                                                       (1,25),
                                                       (1,26),
                                                       (1,27),
                                                       (1,28),
                                                       (1,29),
                                                       (1,30),
                                                       (1,31),
                                                       (1,32),
                                                       (1,33),
                                                       (2,34),
                                                       (2,35),
                                                       (2,36),
                                                       (2,37),
                                                       (2,38),
                                                       (2,39),
                                                       (2,40),
                                                       (4,41),
                                                       (4,42),
                                                       (4,43),
                                                       (4,44),
                                                       (4,45),
                                                       (4,46),
                                                       (4,47),
                                                       (4,48),
                                                       (4,49),
                                                       (4,40)
;


