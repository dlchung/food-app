import React, { Component } from 'react'

import { Container, Grid, Divider } from 'semantic-ui-react'

export default class HomeContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Grid centered>
            <Grid.Row>
              <Grid.Column width={5}>
                <Divider section horizontal>Top Restaurants in Your Area</Divider>
                <p>Praesent quis nisi non tellus pretium tempor. Nam risus enim, mattis id tellus sit amet, rhoncus congue justo. In pretium leo semper ipsum mattis, at dapibus orci varius.</p>
                <p>Aliquam vulputate odio enim, ut facilisis nibh semper vel. Nulla non eros eget elit semper fermentum. Integer nibh eros, varius et dui non, pellentesque fringilla mi.</p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Divider section horizontal>Your Favorite Restaurants</Divider>
                <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. In ornare purus at libero tempus egestas. Nunc eget egestas metus.</p>
                <p>Proin tempus, libero sed fermentum scelerisque, mi ex lacinia neque, ac pellentesque sapien nulla aliquam arcu. Etiam ac finibus eros.</p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Divider section horizontal>Suggested Restaurants</Divider>
                <p>Sed sit amet dui quis arcu auctor elementum. Etiam in nulla augue. Maecenas metus lorem, iaculis sed eros vel, varius suscipit arcu. Quisque ut aliquam nulla. Donec urna sapien, congue vitae tristique in, mollis sed nisi.</p>
                <p>Quisque ullamcorper pulvinar nunc, et tempus nibh pharetra nec. Nam molestie lacinia pellentesque.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}
