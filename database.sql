CREATE DATABASE blood_donation;

USE blood_donation;

CREATE TABLE donors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    blood_group VARCHAR(3) NOT NULL,
    contact_details VARCHAR(255) NOT NULL,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recipients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    contact_details VARCHAR(255) NOT NULL,
    blood_group VARCHAR(3) NOT NULL,
    requested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
