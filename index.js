/* global XMLHttpRequest, document */
export default (url, addClassOnLoad, cb) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const style = document.createElement('style')
      style.innerHTML = xhr.responseText
      document.head.appendChild(style)
      if (addClassOnLoad) document.documentElement.className += ' ' + addClassOnLoad
      if (cb && typeof cb === 'function') cb(xhr)
    }
  }
  xhr.send()
}
