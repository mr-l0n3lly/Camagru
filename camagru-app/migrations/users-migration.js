module.exports.sql = `
  CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
		role ENUM('user', 'admin') DEFAULT 'user',
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
		updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		PRIMARY KEY (id)
  )
`;
