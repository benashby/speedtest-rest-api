import * as express from 'express';
import {speedtestApi} from "@speedtest-rest-api/speedtest-api";

const app = express();

app.get('/all.json', async (req, res) => {
  console.log(`${new Date().toISOString()} - Performing SpeedTest`);
  const result = await speedtestApi();
  console.log(`${new Date().toISOString()} - Speedtest Finished`);
  res.send(result);
});

app.get('/telegraf.json', async (req, res) => {
  console.log(`${new Date().toISOString()} - Performing SpeedTest`);
  const result = await speedtestApi();
  console.log(`${new Date().toISOString()} - Speedtest Finished`);
  const mappedValue: any = {
    'pingJitter': result.ping.jitter,
    'pingLatency': result.ping.latency,
    'upBandwidth': result.upload.bandwidth,
    'upBytes': result.upload.bytes,
    'upElapsed': result.upload.elapsed,
    'downBandwidth': result.download.bandwidth,
    'downBytes': result.download.bytes,
    'downElapsed': result.download.elapsed
  }
  res.send(mappedValue);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
