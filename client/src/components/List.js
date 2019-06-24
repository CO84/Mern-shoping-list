import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/ItemActions";
import PropTypes from "prop-types";

class List extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <Row className="list-row">
          <Col sm="12">
            <TransitionGroup className="shopping-list">
              {items.map(({ _id, name, description }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <Col md="3" sm="3">
                    <Card body className="card-body">
                      <CardTitle>{name}</CardTitle>
                      <CardText>{description}</CardText>
                      {this.props.isAuthenticated ? (
                        <Button
                          className="remove-btn"
                          color="danger"
                          size="sm"
                          onClick={this.onDeleteClick.bind(this, _id)}
                        >
                          Delete
                        </Button>
                      ) : null}
                    </Card>
                  </Col>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(List);
