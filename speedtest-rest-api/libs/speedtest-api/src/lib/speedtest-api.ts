import * as speedTest from 'speedtest-net'
import {SpeedtestResult} from "./model";

export async function speedtestApi(): Promise<SpeedtestResult> {
  return new Promise((resolve, reject) => {
    try {
      resolve(speedTest({acceptLicense:true}));
    } catch (e) {
      reject(e);
    }
  })
}
