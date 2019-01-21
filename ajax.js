window.jQuery = function (nodeOrSelector) {
  let nodes = {}
  nodes.addClass = function () {}
  nodes.html = function () {}
  return nodes
}

window.jQuery.ajax = function (options) {
  let url = options.url
  let method = options.method
  let body = options.body
  let successFn = options.successFn
  let failFn = options.failFn

  let request = new XMLHttpRequest()
  request.open(method, url)
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        successFn.call(undefined, request.responseText)
      } else if (request.status >= 400) {
        failFn.call(undefined, request)
      }
    }
  }
  request.send(body)
}

function f1 (responseText) {}
function f2 (responseText) {}

window.$ = window.jQuery

myButton.addEventListener('click', (e) => {
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    successFn: (x) => {
      f1.call(undefined, x)
      f2.call(undefined, x)
    }, // callback 就是函数
    failFn: (x) => {
      console.log(x)
      console.log(x.statusText)
    }
  })
})
