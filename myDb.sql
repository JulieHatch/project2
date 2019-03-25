DROP TABLE Bird;
DROP TABLE Breeder;
DROP TABLE Specie;

CREATE TABLE Specie
(
specie_id SERIAL PRIMARY KEY,
name varchar(100) NOT NULL
);

CREATE TABLE Breeder
(
breeder_id SERIAL PRIMARY KEY,
name varchar(100) NOT NULL,
info varchar(1000),
pass varchar(200)
);

CREATE TABLE Bird
(
bird_id SERIAL PRIMARY KEY,
name varchar(100) NOT NULL,
info varchar(1000),
cost int NOT NULL,
birth date NOT NULL,
specie_id int NOT NULL REFERENCES Specie(specie_id),
breeder_id int NOT NULL REFERENCES Breeder(breeder_id)
);

INSERT INTO Specie(name) VALUES 
('Macaw'),
('Parakeet'),
('Dove'),
('Chicken');

INSERT INTO Breeder(name, info, pass) VALUES 
('Macaw Lady', 'I breed many macaws', 'macaw'),
('Parakeet Dude', 'I breed many parakeets', 'macaw'),
('Dove Girl', 'I breed many doves', 'macaw'),
('Chicken Boy', 'I breed many chickens', 'macaw');

INSERT INTO Bird(name, info, cost, birth, specie_id, breeder_id) VALUES 
('Macawz', 'I am a macaw', 200, '3-3-2011', (SELECT specie_id from Specie WHERE name='Macaw'), (SELECT breeder_id from Breeder WHERE name='Macaw Lady')),
('Parakeetz', 'I am a parakeet', 15, '03-25-2019', (SELECT specie_id from Specie WHERE name='Parakeet'), (SELECT breeder_id from Breeder WHERE name='Parakeet Dude')),
('Dovez', 'I am a dove', 11, '09-12-2018', (SELECT specie_id from Specie WHERE name='Dove'), (SELECT breeder_id from Breeder WHERE name='Dove Girl')),
('Chickenz', 'I am a chicken', 10, '03-10-2011', (SELECT specie_id from Specie WHERE name='Chicken'), (SELECT breeder_id from Breeder WHERE name='Chicken Boy'));

