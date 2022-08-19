DROP DATABASE IF EXISTS trybeteca;
CREATE DATABASE trybeteca;

USE trybeteca;

CREATE TABLE pessoa_autora (
	autor_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL
);

CREATE TABLE categoria (
	categoria_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL
);

CREATE TABLE livro (
	livro_id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100) NOT NULL,
	ano DATE,
	autor_id INT NOT NULL,
	categoria_id  INT NOT NULL,
	FOREIGN KEY (autor_id) REFERENCES pessoa_autora (autor_id),
	FOREIGN KEY (categoria_id) REFERENCES categoria (categoria_id)
);

CREATE TABLE cliente (
	cliente_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL
);

CREATE TABLE historico (
	historico_id INT AUTO_INCREMENT, 
	cliente_id INT NOT NULL,
	livro_id INT NOT NULL,
	leitura DATE,
	CONSTRAINT PRIMARY KEY (cliente_id, livro_id, historico_id),
	FOREIGN KEY (cliente_id) REFERENCES cliente (cliente_id),
	FOREIGN KEY (livro_id) REFERENCES livro (livro_id)
);