/**
 * Created by trevororgill on 3/15/2017.
 */
import React, { Component } from 'react';
import './App.css';
import { Form, Text, Select } from 'react-form'

export default class MyForm extends Component {
    render() {
        return (
            <Form onSubmit={(values) => {
      console.log('Success!', values)
    }} validate={({ name, phone, email }) => {
      return {
        name: !name ? 'A name is required' : undefined,
        phone: (!phone || !phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) ? 'Valid phone number is required' : undefined,
        email: (!email || !email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) ? 'Valid email is required' : undefined
      }
    }}
                  onValidationFail={() => {
      window.alert('There is something wrong with your form!')
    }}>
                {({submitForm}) => {
                    return (
                        <form onSubmit={submitForm}>
                            <br/><h2>Name:</h2><br/>
                            <Text field='name' placeholder="Name"/>
                            <br/><h2>Phone:</h2><br/>
                            <Text field='phone' placeholder="Phone Number"/>
                            <br/><h2>Email:</h2><br/>
                            <Text field='email' placeholder="Email"/>
                            <div>
                                <h2>Relationship Status (Optional)</h2>
                                <Select field='status'
                                    options={[{
                                        label: 'Rather Not Say',
                                        value: null
                                      }, {
                                        label: 'Single',
                                        value: 'single'
                                      }, {
                                        label: 'In a Relationship',
                                        value: 'relationship'
                                      }, {
                                        label: 'It\'s Complicated',
                                        value: 'complicated'
                                      }]}
                                />
                            </div>
                            <br/><br/>
                            <button id="submit" type='submit'>Submit</button>
                        </form>
                    )
                }}
            </Form>
        );
    }
}
