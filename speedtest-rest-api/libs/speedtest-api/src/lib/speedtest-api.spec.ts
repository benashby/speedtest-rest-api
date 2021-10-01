import {speedtestApi} from './speedtest-api';

describe('speedtestApi', () => {

  it('should work', async () => {
    const result = await speedtestApi();
    expect(result).toBeTruthy();
  });

});
