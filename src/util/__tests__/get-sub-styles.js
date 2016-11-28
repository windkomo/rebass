
import getSubStyles from '../get-sub-styles'

test('getSubcomponentStyles parses out nested objects', () => {
  const styles = getSubStyles({
    color: 'tomato',
    foo: {
      color: 'blue'
    }
  }, {
    color: 'green',
    foo: {
      margin: 16
    },
    bar: {
      color: 'magenta'
    }
  }, {
    color: 'black'
  })
  const styleKeys = Object.keys(styles)
  expect(styleKeys.length).toBe(2)
  expect(styles.foo).toEqual({
    color: 'blue',
    margin: 16
  })
  expect(styles.bar).toEqual({
    color: 'magenta'
  })
})
