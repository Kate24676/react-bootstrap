/* eslint-disable */

import React, { Component } from 'react';

class AddProperty extends React.component {
  constructor(props) {
    super(props);
    this.state= {
      state: {
        fields: {
          title: '',
          type: '',
          bedrooms: '',
          bathrooms: '',
          price: '',
          city: '',
          email: '',
        },
      },
    };

  }

  handleAddProperty (event) {
    event.preventDefault();
    console.log(this.state.fields);
  }

  handleFieldChange (event) {
    this.setState ({
      fields: {
        ...this.state.state.fields,
        [event.target.name]: event.target.value
      },
    });
  };

render () {
    return <div className="Add Property">
      <form onSubmit={this.handleAddProperty}>
        <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} />
        <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
          <option value="Flat">Flat</option>
          <option value="Detached">Detached</option>
          <option value="Semi-Detached">Semi-Detached</option>
          <option value="Terraced">Terraced</option>
          <option value="End of Terrace">End of Terrace</option>
          <option value="Cottage">Cottage</option>
          <option value="Bungalow">Bunaglow</option>
        </select>
        <label className="label-Class">
        city:
        <select name="type" value={this.state.fields.city} onChange={this.handleFieldChange}>
          <option value="Manchester">Manchester</option>
          <option value="Leeds">Leeds</option>
          <option value="Sheffield">Sheffield</option>
          <option value="Liverpool">Liverpool</option>
        </select>
        </label>
        <label className="label-Class">
        bathroom:
        <select name="type" value={this.state.fields.bathroom} onChange={this.handleFieldChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button type="submit">Add</button>
        </label>
        <label className="label-Class">
        bathroom:
        <select name="type" value={this.state.fields.bathroom} onChange={this.handleFieldChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button type="submit">Add</button>
        </label>
      </form>
      Add a Property Page
      </div>
  }
}


export default AddProperty;
