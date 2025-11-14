-- Criação do banco de dados supermercado
CREATE DATABASE supermercado;

-- Seleciona o banco de dados supermercado
USE supermercado;

-- Criação da tabela usuarios
CREATE TABLE usuarios(
id int auto_increment primary key,
usuario VARCHAR(255),
email VARCHAR(255),
senha VARCHAR(255),
tipo VARCHAR(255)
);

-- Criação da tabela produtos
CREATE TABLE produtos(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255), 
categoria VARCHAR(20),
descricao VARCHAR(255),
imagemUrl VARCHAR(255),
preco DECIMAL(6,2),
quantidade INT (255) 
);

-- Verifica as tabelas criadas
SELECT * FROM usuarios;

-- Insere dados na tabela usuarios
INSERT INTO usuarios (id, usuario, email, senha, tipo)
VALUES
(DEFAULT, 'Samuel', 'samuel@gmail.com', '5', 'Administrador'),
(DEFAULT, 'George', 'george@gmail.com', '3', 'Funcionário'),
(DEFAULT, 'Vitor', 'vitor@gmail.com', '4', 'Emgenheiro'),
(DEFAULT, 'Renato', 'renato@gmail.com', '7', 'Gerente'),
(DEFAULT, 'Guzera', 'renato@gmail.com', '7', 'Eletricista');

--  Verifica os dados inseridos na tabela usuarios
INSERT INTO produtos (id, nome, categoria, descricao, imagemUrl, preco, quantidade)
VALUES
(DEFAULT,
 'Fone de Ouvido Bluetooth', 
'Sony', 'Fone sem fio com cancelamento de ruído', 
'https://m.media-amazon.com/images/I/61+4GqFf0gL._AC_SX679_.jpg',
 299.90, 10
 ),

(DEFAULT, 
'Monitor Gamer 27"',
 'Samsung', 'Monitor curvo Full HD 144Hz ideal para jogos',
  'https://m.media-amazon.com/images/I/71trh4RZayL._AC_SX679_.jpg',
   1399.00, 5
),

(DEFAULT,
 'Teclado Mecânico RGB',
 'Redragon',
 'Teclado gamer com iluminação RGB e switches azuis',
 'https://m.media-amazon.com/images/I/71F3b2POOfL._AC_SX679_.jpg', 
289.90, 15

),
(DEFAULT,
'Mouse Gamer',
'Logitech',
'Mouse gamer com sensor HERO 25K e 11 botões programáveis',
'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX679_.jpg',
349.00, 12

),

(DEFAULT,
 'Notebook Aspire 5',
  'Acer',
   'Notebook com Ryzen 5,
    8GB RAM e SSD 512GB',
 'https://m.media-amazon.com/images/I/71zN0QqYxLL._AC_SX679_.jpg',
  3199.00, 7
  ),

(DEFAULT,
 'Smartphone Galaxy S23',
 'Samsung', 
 'Smartphone Android com câmera tripla e 256GB',
 'https://m.media-amazon.com/images/I/71LvybZ3c2L._AC_SX679_.jpg',
  4599.00, 6
),

(DEFAULT,
 'Smartwatch Amazfit',
  'Xiaomi',
   'Relógio inteligente com GPS e monitor cardíaco',
 'https://m.media-amazon.com/images/I/61pLx3D4yyL._AC_SX679_.jpg',
  699.90, 9
),

(DEFAULT, 'Caixa de Som Portátil',
 'Anker',
  'Caixa de som Bluetooth com bateria de 24h', 
'https://m.media-amazon.com/images/I/71Pz3+4QqLL._AC_SX679_.jpg',
 399.00, 8
),

(DEFAULT,
'TV 50" 4K UHD', 
'LG',
'Smart TV com inteligência artificial ThinQ AI',
'https://m.media-amazon.com/images/I/81+ltJ2-p6L._AC_SX679_.jpg', 
 2599.00, 4
 ),

(DEFAULT, 
'Headset Gamer Cloud II', 
'HyperX',
 'Headset com som surround 7.1 e microfone removível',
'https://m.media-amazon.com/images/I/61D2QiqR5rL._AC_SX679_.jpg', 
499.90, 10
),

(DEFAULT,
'Câmera de Ação GoPro Hero 12',
'GoPro',
'Câmera à prova d’água 5K com estabilização avançada',
'https://m.media-amazon.com/images/I/71vC2JfYtKL._AC_SX679_.jpg', 
2899.00, 5
),

(DEFAULT, 'Kindle Paperwhite', 'Amazon', 'Leitor digital à prova d’água com iluminação ajustável e tela antirreflexo',
 'https://m.media-amazon.com/images/I/61N6tZ5c6mL._AC_SX679_.jpg', 
 699.00, 8
),

(DEFAULT,
 'Console PlayStation 5',
 'Sony',
 'Console de última geração com SSD ultrarrápido e suporte a jogos 4K',
 'https://m.media-amazon.com/images/I/51fT06Jq6LL._AC_SX679_.jpg', 
 4999.00, 3
),

(DEFAULT,
'Roteador Wi-Fi 6 AX1800',
'TP-Link',
'Roteador dual-band com tecnologia Wi-Fi 6 e 1.8 Gbps de velocidade',
'https://m.media-amazon.com/images/I/61JpS0CSa-L._AC_SX679_.jpg', 
599.00, 10
),

(DEFAULT,
'Cadeira Gamer ThunderX3 TGC12',
'ThunderX3',
'Cadeira ergonômica com revestimento em couro sintético e ajuste reclinável',
'https://m.media-amazon.com/images/I/71zZ4bIbZxL._AC_SX679_.jpg', 
 1299.00, 6
);
 
-- Verifica os dados inseridos na tabela produtos
SELECT * FROM produtos; 
 
--  Atualiza dados na tabela usuarios
 UPDATE usuarios
 set usuario = "Samuel" , senha = "boa"
where id = 1;

-- Atualiza dados na tabela produtos
 UPDATE produtos
 set quantidade = 10, imagemUrl = "https://www.shutterstock.com/image-vector/batman-design-logo-sign-icon-600nw-2317334183.jpg"
where id = 1;
 
 
 
 
 
 
 
 
 
 
 