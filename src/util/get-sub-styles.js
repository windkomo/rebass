
const isObj = o => typeof o === 'object' && o !== null && !Array.isArray(o)

const getSubStyles = (...args) => {
  const keys = args.reduce((a, obj) => [ ...a, ...Object.keys(obj) ], [])
    .reduce((a, key) => {
      const hasObj = args.reduce((acc, b) => {
        return acc || isObj(b[key])
      }, false)
      if (!hasObj) {
        return a
      }
      if (a.indexOf(key) < 0) {
        a.push(key)
      }
      return a
    }, [])

  return keys
    .reduce((a, key) => {
      args.forEach(obj => {
        if (isObj(obj[key])) {
          a[key] = {
            ...a[key],
            ...obj[key]
          }
        }
      })
      return a
    }, {})
}

export default getSubStyles

