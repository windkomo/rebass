
import React from 'react'
import withRebass from './withRebass'

/**
 * Table element with simplified props
 */

const Table = ({
  headings,
  data,
  theme,
  sx,
  ...props
}) => {
  const { fontSizes, scale, borderColor } = theme

  const styles = {
    root: {
      maxWidth: '100%',
      overflowX: 'scroll',
      marginBottom: scale[2],
      borderColor,
    },
    table: {
      fontSize: fontSizes[5],
      lineHeight: 1.25,
      borderCollapse: 'separate',
      borderSpacing: 0,
      width: '100%',
    },
    thead: {},
    tbody: {},
    tr: {},
    th: {
      textAlign: 'left',
      verticalAlign: 'bottom',
      padding: scale[1],
      paddingLeft: 0,
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      borderColor: 'inherit',
    },
    td: {
      padding: scale[1],
      paddingLeft: 0,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderColor: 'inherit',
    }
  }

  return (
    <div
      {...props}
      {...sx(styles.root)}>
      <table {...sx(styles.table)}>
        <thead {...sx(styles.thead)}>
          <tr {...sx(styles.tr)}>
            {headings.map((heading, i) => (
              <th key={i}
                {...sx(styles.th)}
                children={heading} />
            ))}
          </tr>
        </thead>
        <tbody {...sx(styles.tbody)}>
          {data.map((row, i) => (
            <tr key={i}
              {...sx(styles.tr)}>
              {row.map((datum, j) => (
                <td key={j}
                  {...sx(styles.td)}
                  children={datum} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  /** Headings for <th> */
  headings: React.PropTypes.array,
  /** Array of table row data for <td> */
  data: React.PropTypes.arrayOf(React.PropTypes.array)
}

Table.defaultProps = {
  headings: [],
  data: []
}

Table._name = 'Table'

export default withRebass(Table)

