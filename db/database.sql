CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
)

DESCRIBE employee;

INSERT INTO employee VALUES
(1, 'Gil', 1000),
(2, 'Lily', 2000),
(3, 'Samantha', 2500),
(4, 'Paul', 1500);

