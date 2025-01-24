import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import CustomerDetails from './CustomerDetails';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCustomer: null,
      customerList: null,
      error: null,
    };
  }

  componentDidMount() {
    this.getCustomerData();
  }

  // Function to fetch customer data from JSON
  getCustomerData() {
    axios
      .get('assets/samplejson/customerlist.json')
      .then((response) => {
        this.setState({ customerList: response.data });
      })
      .catch((error) => {
        console.error('Error fetching customer data:', error);
        this.setState({ error: 'Failed to load customer data' });
      });
  }

  render() {
    const { customerList, selectedCustomer, error } = this.state;

    if (error) return <p className="text-danger">{error}</p>;

    if (!customerList) return <p>Loading data...</p>;

    return (
      <div className="addmargin">
        <div className="col-md-3">
          {customerList.map((customer) => (
            <Card key={customer.id} className="mb-3 text-center">
              <Card.Header as="h5">{customer.name}</Card.Header>
              <Card.Body>
                <Card.Text>Email: {customer.email}</Card.Text>
                <Card.Text>Phone: {customer.phone}</Card.Text>
                <Button
                  variant="info"
                  onClick={() => this.setState({ selectedCustomer: customer.id })}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="col-md-6">
          {selectedCustomer && <CustomerDetails val={selectedCustomer} />}
        </div>
      </div>
    );
  }
}

// PropTypes validation
Customers.propTypes = {
  selectedCustomer: PropTypes.number,
  customerList: PropTypes.array,
  error: PropTypes.string,
};
