import React from 'react';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  Form,
  FormGroup,
  Input,
  Button
} from 'reactstrap';
import {
  Link,
  withRouter,
} from 'react-router-dom'

import queryString from 'query-string'
import SearchTagContainer from '../containers/SearchTagContainer'
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getTag = this.getTag.bind(this);

    this.state = {
      input: ''
    };
  }

  handleChange(e) {
    if (e.target.value !== this.state.input)
      this.setState({ input: e.target.value });
  }

  handleClick() {

    this.props.history.push('/photos?tag=' + this.state.input)
  }
  getTag() {
    const url = window.location.href;
    return queryString.parseUrl(url).query.tag;
  }
  render() {
    var x = this.getTag();
    x = x == null ? "Search" : x;
    return (
      <div id="nav">
        <Navbar color="dark" light expand="md">
          <Link to="/" id="headerNav"> Flickr</Link>
          <Collapse navbar>
            <Nav className="" navbar>
              <NavItem className="nav-item-custom">
                <Link to="/explore">Explore</Link>
              </NavItem>
            </Nav>
            <SearchTagContainer history={this.props.history} />
            {/* <Form className="navbar-form ml-auto" action="photos" inline>
                    <FormGroup>
                        <Input type="text" onChange={this.handleChange} placeholder={x} name="tag"></Input>
                    </FormGroup>
                    <Button className="fa fa-search" onClick={this.handleClick}></Button>
                </Form> */}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(Header);