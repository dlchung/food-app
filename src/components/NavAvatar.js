import React from 'react'

import { Grid, Image } from 'semantic-ui-react'

const NavAvatar = () => {
  return (
    <React.Fragment>
      <Grid.Column width={4} textAlign="right">Username <Image avatar src="/images/avatars/download-1.jpg" size="mini" /></Grid.Column>
    </React.Fragment>
  )
}

export default NavAvatar
