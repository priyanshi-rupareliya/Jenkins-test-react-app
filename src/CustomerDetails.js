import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    const { customerList } = this.props;
   
    const a = customerList.find((c) => c.id === id);

      this.setState({customerDetails: a})
    
  };

  render() {
    if (!this.state.customerDetails)
      return (<p>Loading Data</p>)
    return (<div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.customerDetails.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.customerDetails.name}</p>
          <p>Email : {this.state.customerDetails.email}</p>
          <p>Phone : {this.state.customerDetails.phone}</p>
          <p>City : {this.state.customerDetails.city}</p>
          <p>State : {this.state.customerDetails.state}</p>
          <p>Country : {this.state.customerDetails.country}</p>
          <p>Organization : {this.state.customerDetails.organization}</p>
          <p>Job Profile : {this.state.customerDetails.jobProfile}</p>
          <p>Additional Info : {this.state.customerDetails.additionalInfo}</p>
        </Panel.Body>
      </Panel>
    </div>)
  }
}
