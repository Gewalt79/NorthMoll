import express from 'express';
import router from './router.js';

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use('/api', router);

async function startApp() {
  try {
    app.listen(PORT, () => console.log(`Server started on port ` + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();

/**
 * Request.body must be:
 * "company": "{company name}",
 * "repo": "{repository name}",
 * "sort" : "{type of sort}", //type of sort can be created/updated/comments
 * "filter" : {"type of filter" : "number"} //type of filter can be number/comments
 * number - will filter issues by number from 1 to number value
 * comments - will filter issues if number of comments more than comments value
 */
