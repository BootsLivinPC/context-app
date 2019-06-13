import React from "react";
import { Form, } from "semantic-ui-react";

class AccountForm extends React.Component {
  state = 
  { username: "", firstName: "", lastName: "", avatar: "", email: "", favoriteHobby: "", };
  
  handleChange = (e, { name, value }) => 
  this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { username, firstName, lastName, avatar, email, favoriteHobby } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Input
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}         
        />
        <Form.Input
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}        
        />
        <Form.Input
          label="Avatar"
          type="text"//figure out how to upload image
          name="avatar"
          value={avatar}
          onChange={this.handleChange}          
        />
        <Form.Input
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Favorite Hobby"
          name="favoriteHobby"
          value={favoriteHobby}
          onChange={this.handleChange}
          options={hobbyOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

const hobbyOptions = [
  { key: "b", text: "Biking", value: "Biking", },
  { key: "s", text: "Skating", value: "Skating", },
  { key: "s", text: "Skiing", value: "Skiing", },
  { key: "a", text: "Snowboarding", value: "Snowboarding", },
  { key: "a", text: "Arts", value: "Arts", },
  { key: "r", text: "Reading", value: "Reading", },
  { key: "c", text: "Comics", value: "Comics", },
  { key: "d", text: "Comedy", value: "Comedy", },
  { key: "l", text: "Climbing", value: "Climbing", },
  { key: "n", text: "Running", value: "Running", },
  { key: "t", text: "Travel", value: "Travel", },
  { key: "g", text: "Dining", value: "Dining", },
  { key: "o", text: "Others", value: "Others", },
];

export default AccountForm;
