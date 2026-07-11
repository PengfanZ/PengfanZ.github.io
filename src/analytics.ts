const CLOUDFLARE_BEACON_URL =
  'https://static.cloudflareinsights.com/beacon.min.js'
const CLOUDFLARE_ANALYTICS_TOKEN = 'e7952cd24d1b46ef8f41cb98923762e8'

export function initializeAnalytics() {
  if (document.querySelector(`script[src="${CLOUDFLARE_BEACON_URL}"]`)) {
    return
  }

  const script = document.createElement('script')
  script.defer = true
  script.src = CLOUDFLARE_BEACON_URL
  script.dataset.cfBeacon = JSON.stringify({
    token: CLOUDFLARE_ANALYTICS_TOKEN,
  })
  document.body.append(script)
}
