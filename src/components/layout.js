import React from "react"

import Menu from "./menu"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Menu />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          <main>{children}</main>
        </div>
      </>
    )
  }
}

export default Layout
