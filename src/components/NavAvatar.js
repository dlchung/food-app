import React from 'react'

import { Grid, Header, Image } from 'semantic-ui-react'

const NavAvatar = () => {
  return (
    <React.Fragment>
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={12}><Header as="h1">App Logo</Header></Grid.Column>
          <Grid.Column width={4} textAlign="right">Username <Image src="/images/avatars/download-1.jpg" size="mini" avatar /></Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  )
}

export default NavAvatar
