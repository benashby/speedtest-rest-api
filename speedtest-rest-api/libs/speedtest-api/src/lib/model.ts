export interface SpeedtestResult {
  ping: Ping,
  download: DownloadSpeed,
  upload: UploadSpeed
}

export interface DownloadSpeed {
  bandwidth: number,
  bytes: number,
  elapsed: number
}

export interface UploadSpeed {
  bandwidth: number,
  bytes: number,
  elapsed: number
}
export interface Ping {
  jitter: number,
  latency: number
}
