import * as express from 'express';
import {speedtestApi} from "@speedtest-rest-api/speedtest-api";

const app = express();

app.get('/api', async (req, res) => {
  console.log(`${new Date().toISOString()} - Performing SpeedTest`)
  const result = await speedtestApi();
  console.log(`${new Date().toISOString()} - Speedtest Finished`)
  res.send(result);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
