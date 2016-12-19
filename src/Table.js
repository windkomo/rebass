
import React from 'react'
import createComponent from './create-component'

/**
 * Table element with simplified props
 */

export const styles = {
  root: ({ colors }) => ({
    maxWidth: '100%',
    overflow: 'auto',
    borderColor: colors.gray
  }),
  table: {
    lineHeight: 1.25,
    borderCollapse: 'separate',
    borderSpacing: 0,
    width: '100%'
  },
  th: ({ scale }) => ({
    textAlign: 'left',
    verticalAlign: 'bottom',
    padding: scale[1],
    paddingLeft: 0,
    borderBottom: '2px solid inherit'
  }),
  td: ({ scale }) => ({
    padding: scale[1],
    paddingLeft: 0,
    borderBottom: '1px solid inherit'
  })
}

export const TableBase = createComponent('table', styles.table)

export const TH = createComponent('th', styles.th)
export const TD = createComponent('td', styles.td)

const Base = ({
  headings = [],
  data = [],
  ...props
}) => (
  <div {...props}>
    <TableBase>
      <thead>
        <tr>
          {headings.map((heading, i) => (
            <TH key={i} children={heading} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((datum, j) => (
              <TD key={j} children={datum} />
            ))}
          </tr>
        ))}
      </tbody>
    </TableBase>
  </div>
)

const Table = createComponent(Base, styles.root, {
  name: 'Table',
  removeProps: [
    'headings',
    'data'
  ]
})

export default Table

/*
const Table = ({
  headings,
  data,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { fontSizes, scale, borderColor } = theme

  const cx = classnames('Table', className)

  const sx = {
    root: {
      maxWidth: '100%',
      overflowX: 'scroll',
      marginBottom: scale[2],
      borderColor,
      ...style
    },
    table: {
      fontSize: fontSizes[5],
      lineHeight: 1.25,
      borderCollapse: 'separate',
      borderSpacing: 0,
      width: '100%',
      ...subComponentStyles.table
    },
    thead: {
      ...subComponentStyles.thead
    },
    tbody: {
      ...subComponentStyles.tbody
    },
    tr: {
      ...subComponentStyles.tr
    },
    th: {
      textAlign: 'left',
      verticalAlign: 'bottom',
      padding: scale[1],
      paddingLeft: 0,
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      borderColor: 'inherit',
      ...subComponentStyles.th
    },
    td: {
      padding: scale[1],
      paddingLeft: 0,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderColor: 'inherit',
      ...subComponentStyles.td
    }
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx.root}>
      <table style={sx.table}>
        <thead style={sx.thead}>
          <tr style={sx.tr}>
            {headings.map((heading, i) => (
              <th key={i}
                style={sx.th}
                children={heading} />
            ))}
          </tr>
        </thead>
        <tbody style={sx.tbody}>
          {data.map((row, i) => (
            <tr key={i}
              style={sx.tr}>
              {row.map((datum, j) => (
                <td key={j}
                  style={sx.td}
                  children={datum} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Table.defaultProps = {
  headings: [],
  data: []
}

Table._name = 'Table'

export default withRebass(Table)
*/
