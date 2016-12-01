/* global XMLHttpRequest, document */
export default (url) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const style = document.createElement('style')
      style.innerHTML = xhr.responseText
      document.head.appendChild(style)
    }
  }
  xhr.send()
}
