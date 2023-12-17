export function getStaticBlurDataUrl() {
  const blurSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5">
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='1' />
      </filter>

      <rect preserveAspectRatio="none" filter='url(#b)' x="0" y="0" width="100%" height="100%"
        stroke-width="3" stroke="#F9F0EE" fill="#F5643D" />
    </svg>
  `

  const toBase64 = (str: string): string =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`
}
