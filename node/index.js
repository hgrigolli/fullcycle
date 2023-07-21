const app = require('./src/app');
const PORT = 3000
const database = require('./src/db/database')

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
      await database.authenticate();
      console.log('Database connection OK!');
  } catch (error) {
      console.log('Unable to connect to the config:');
      console.log(error.message);
      process.exit(1);
  }
}

async function init() {

  console.log(`Starting node server...`)
  
  await assertDatabaseConnectionOk();

  console.log(`Starting MySQL + Express example on port ${PORT}...`);

  await database.initateDatabase();

  app.listen(PORT, () => {
      console.log(`Express server started on port ${PORT}.`);
  });
}

init();