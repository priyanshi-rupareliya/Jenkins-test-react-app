import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import CustomerDetails from './CustomerDetails'


export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    this.setState({customerList: [
    {
      "id": 1,
      "name": "John Smith",
      "email": "jsmith@test.com",
      "phone": "123456789",
      "city": "bangalore",
      "state": "karnataka",
      "country": "India",
      "organization": "Company 1",
      "jobProfile": "Software Developer",
      "additionalInfo": "Has Bought a lot of products before and a high Value Customer"
    },
    {
      "id": 2,
      "name": "ABCD",
      "email": "abcd@test.com",
      "phone": "987654321",
      "city": "Mangalore",
      "state": "karnataka",
      "country": "India",
      "organization": "Company 2",
      "jobProfile": "Software Developer",
      "additionalInfo": "Buys Products Rarely"
    },
    {
      "id": 3,
      "name": "Tyrion",
      "email": "tyrion@test.com",
      "phone": "123412345",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "country": "India",
      "organization": "Company 3",
      "jobProfile": "Software Developer",
      "additionalInfo": "Buys Lots of Products in general"
    }
    ]});
    // axios.get('assets/samplejson/customerlist.json').then(response => {
    //   this.setState({customerList: response})
    // })
  };

  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {

          this.state.customerList.map(customer => <Panel bsStyle="info" key={customer.name} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{customer.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{customer.email}</p>
              <p>{customer.phone}</p>
              <Button bsStyle="info" onClick={() => this.setState({selectedCustomer: customer.id})}>

                Click to View Details

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-6">
        <CustomerDetails val={this.state.selectedCustomer} customerList={this.state.customerList}/>
      </div>
    </div>)
  }

}
