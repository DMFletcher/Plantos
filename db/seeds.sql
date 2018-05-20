USE hngplants_db;

INSERT INTO plants(plant_common_name, plant_scientific_name, plant_water_text, plant_water_int, pet_friendly, sun_placement, createdAt, updatedAt, masterPlantId) 
VALUES ('Areca Palm/ Butterfly Palm', 'Chrysalidocarpus lutescense', 'Water daily! The soil should always be moist.', 1, false, 2, 0, 0, 1),
('Rubber Plant', 'Ficus robusta', 'Rubber plants love water when they are growing, but not too frequently. Water them really well once the soil has dried out quite a bit, then wait until it dries out again. No more than once a week.', 1, true, 2, 0, 0, 2),
('English Ivy', 'Hedera helix', 'The Englsih Ivy likes moist soil, you should roughly water twice a week.', 2, true, 1, 0, 0, 3),
('Coffee Plant', 'Coffea arabica', 'Keep soil thoroughly moist in spring and summer, and barely moist in fall and winter. Always use tepid water.', 1, false, 1, 0, 0, 4),
('Aloe Vera/ Burn Plant', 'Aloe barbadensis', 'Do not let soil dry out completely', 2, false, 2, 0, 0, 5),
('Hibiscus', 'Hibiscus rosa sinensis' , 'Allow top inch of soil to dry out between waterings. Place in a pot with drainage holes.' , 1, true, 1, 0, 0, 6),
('Daffodil', 'Narcissus', 'Keep soil lightly moist and check often', 1, false, 1, 0, 0, 7),
('Blue Agave', 'Agave parryi', 'Water thoroughly in spring and summer allowing top half of soil to dry out inbetween waterings. Be sure to not over water in winter.', 1, false, 2, 0, 0, 8),
('Dumb Cane', 'Dieffenbachia', 'Water thoroughly and allow soil to dry out between waterings. Drooping leaves indicate being too dry.', 1, false, 1, 0, 0, 9),
('Elephants Ear', 'Alocasia x amazonica', 'keep soil moist from spring to fall, but water sparingly in winter.', 7, false, 1, 0, 0, 10),
('Babies Tears', 'Soleirolia soleirolii', 'keep soil moist at all times', 2, true, 2, 0, 0, 11),
('California Pitcher Plant', 'Darlingtonia californica', 'keep soil moist year-round. Use distilled or rain water. Limp leaves indicate dry soil.', 5, true, 2, 0, 0, 12),
('Foxtail Fern', 'Asparagus densiflorus', 'Allow water to dry out between waterings. Too much water will make roots rot.', 1, false, 2, 0, 0, 13),
('Nerve Plant', 'Fittonia Verschaffeltii', 'Always keep soil moist. Yellow leaves indicate too much water or poor drainage. Allow soil to slightly dry between waterings.', 1, true, 1, 0, 0, 14),
('Gold Dust Plant', 'Aucuba Japonica', 'Keep soil evenly moist from spring through fall, but cut back once growth has slowed.', 1, false, 1, 0, 0, 15),
('Angel Trumpet Plant', 'Brugmansia', 'Water thoroughly spring through fall. Cut back when growth has slowed.', 1, false, 2, 0, 0, 16),
('Begonia', 'Begonia x hiemalis', 'Keep soil evenly moist, but not soggy. Allow top inch of soil to dry between waterings', 1, false, 1, 0, 0, 17),
('Jade Plant', 'Crassula Ovata', 'Allow water to slightly dry out between waterings. Dropped leaves or brown spots on leaves indicate the plant needs more water.', 1, false, 1, 0, 0, 18),
('Tulips', 'Tulipa spp', 'Keep soil lightly moist, check soil often', 1, false, 1, 0, 0, 19),
('Christmas Cactus', 'Schlumbergera Bridgesii', 'Keep soil moist, but avoid making it too soggy.', 1, true, 2, 0, 0, 20);

SELECT * FROM plants;

INSERT INTO users (name, email, password, createdAt, updatedAt) 
VALUES ('William', 'william@william.com', 'password', 0, 0);

SELECT * FROM users;

INSERT INTO lastwatereds (createdAt, updatedAt, userId, PlantId) 
VALUES ('2018-05-4', null, 1, 1),
('2018-05-8', null, 1, 1),
('2018-05-12', null, 1, 1),
('2018-05-16', null, 1, 1),
(null, null, 1, 2),
('2018-05-15', null, 1, 3),
('2018-05-16', null, 1, 3),

INSERT INTO plantuser (userID, plantID, createdAt, updatedAt) VALUES (1, 1, 0, 0);