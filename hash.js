const bcrypt = require('bcrypt');

async function generateHashedPassword(plainPassword) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(plainPassword, salt);
  console.log('Hashed Password:', hashedPassword);
}

generateHashedPassword('1234567890'); 
