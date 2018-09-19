import React, { Component } from 'react'

import HomeSearchBar from './HomeSearchBar'

import { Container, Grid, Divider, Header, Image } from 'semantic-ui-react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Grid centered>
            <Grid.Row>
              <Grid.Column width={12}><Header as="h1">App Logo</Header></Grid.Column>
              <Grid.Column width={4} textAlign="right">Avatar<Image src="/images/avatars/download-1.jpg" size="mini" avatar /></Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid centered>
            <Grid.Row>
              <Grid.Column width={10}>
                <HomeSearchBar />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid centered>
            <Grid.Row>
              <Grid.Column width={5}>
                <Divider section horizontal>Column 1</Divider>
                <p>Praesent quis nisi non tellus pretium tempor. Nam risus enim, mattis id tellus sit amet, rhoncus congue justo. In pretium leo semper ipsum mattis, at dapibus orci varius.</p>
                <p>Aliquam vulputate odio enim, ut facilisis nibh semper vel. Nulla non eros eget elit semper fermentum. Integer nibh eros, varius et dui non, pellentesque fringilla mi.</p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Divider section horizontal>Column 2</Divider>
                <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. In ornare purus at libero tempus egestas. Nunc eget egestas metus.</p>
                <p>Proin tempus, libero sed fermentum scelerisque, mi ex lacinia neque, ac pellentesque sapien nulla aliquam arcu. Etiam ac finibus eros.</p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Divider section horizontal>Column 3</Divider>
                <p>Sed sit amet dui quis arcu auctor elementum. Etiam in nulla augue. Maecenas metus lorem, iaculis sed eros vel, varius suscipit arcu. Quisque ut aliquam nulla. Donec urna sapien, congue vitae tristique in, mollis sed nisi.</p>
                <p>Quisque ullamcorper pulvinar nunc, et tempus nibh pharetra nec. Nam molestie lacinia pellentesque.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}
