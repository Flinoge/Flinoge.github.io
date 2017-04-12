/**
 * Created by trevororgill on 3/15/2017.
 */
import React, { Component } from 'react';
import './App.css';
import { Form, Text } from 'react-form'

export default class StatsForm extends Component {
    render() {
        return (
            <Form onSubmit={(values) => {
      console.log('Success!', values)
    }} validate={({ Class, spec }) => {
      return {
        Class: !Class ? 'A class is required' : undefined,
        Spec: !spec ? 'A spec is required' : undefined
       }
    }}
                  onValidationFail={() => {
      window.alert('There is something wrong with your submission!')
    }}>
                {({submitForm}) => {
                    return (
                        <form onSubmit={submitForm}>
                            <br/><h2>Class:</h2>
                            <Text field='Class' placeholder="Class"/>
                            <br/><h2>Spec:</h2>
                            <Text field='spec' placeholder="Specialization"/>
                            <br/><h2>Main Stat:</h2>
                            <Text field='mainStat' placeholder="Agil/Str/Int"/>
                            <br/><h2>Mastery:</h2>
                            <Text field='mastery' placeholder="Mastery Rating"/>
                            <br/><h2>Haste:</h2>
                            <Text field='haste' placeholder="Haste Rating"/>
                            <br/><h2>Crit:</h2>
                            <Text field='crit' placeholder="Crit Rating"/>
                            <br/><h2>Versatility:</h2>
                            <Text field='vers' placeholder="Versatility Rating"/>
                            <br/><br/>
                            <button id="submit" type='submit'>Submit</button>
                        </form>
                    )
                }}
            </Form>
        );
    }
}
