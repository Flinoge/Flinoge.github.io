/**
 * Created by trevororgill on 3/15/2017.
 */
import React, { Component } from 'react';
import './App.css';
import { Form, Text, Select } from 'react-form'

export default class StatsForm extends Component {



    render() {
        return (
            <Form onSubmit={(values) => {
      console.log('Success!', values);
      localStorage.setItem('myClass', values.Class);
      localStorage.setItem('CritWeight', values.crit);
      localStorage.setItem('MainStateWeight', values.mainStat);
      localStorage.setItem('HasteWeight', values.haste);
      localStorage.setItem('VersWeight', values.vers);
      localStorage.setItem('MasteryWeight', values.mastery);
    }}
                  defaultValues={{
                  Class:parseInt(localStorage.getItem('myClass')),
                  mainStat:localStorage.getItem('MainStateWeight'),
                  mastery:localStorage.getItem('MasteryWeight'),
                  haste:localStorage.getItem('HasteWeight'),
                  crit:localStorage.getItem('CritWeight'),
                  vers:localStorage.getItem('VersWeight')
                  }}
                  validate={({ Class, mainStat, mastery, haste, crit, vers }) => {
      return {
        Class: !Class ? 'A class is required' : undefined,
        mainStat: !mainStat ? 'A Main Stat Weight is required' : undefined,
        mastery: !mastery ? 'A Mastery Weight is required' : undefined,
        haste: !haste ? 'A Haste Weight is required' : undefined,
        crit: !crit ? 'A Crit Weight is required' : undefined,
        vers: !vers ? 'A Vers Weight is required' : undefined
       }
    }}
                  onValidationFail={() => {
      window.alert('There is something wrong with your submission!')
    }}>
                {({submitForm}) => {
                    return (
                        <form onSubmit={submitForm}>
                            <br/><h2>Class:</h2>
                            <Select
                                field='Class'
                                options={[{
                                label: 'Warrior',
                                value: 1
                                }, {
                                label: 'Paladin',
                                value: 2
                                }, {
                                label: 'Hunter',
                                value: 3
                                }, {
                                label: 'Rogue',
                                value: 4
                                }, {
                                label: 'Priest',
                                value: 5
                                }, {
                                label: 'Death Knight',
                                value: 6
                                }, {
                                label: 'Shaman',
                                value: 7
                                }, {
                                label: 'Mage',
                                value: 8
                                }, {
                                label: 'Warlock',
                                value: 9
                                }, {
                                label: 'Monk',
                                value: 10
                                }, {
                                label: 'Druid',
                                value: 11
                                }, {
                                label: 'Demon Hunter',
                                value: 12
                                }]}
                            />
                            <br/><h2>Main Stat:</h2>
                            <Text field='mainStat' placeholder="Agil/Str/Int Weight"/>
                            <br/><h2>Mastery:</h2>
                            <Text field='mastery' placeholder="Mastery Rating Weight"/>
                            <br/><h2>Haste:</h2>
                            <Text field='haste' placeholder="Haste Rating Weight"/>
                            <br/><h2>Crit:</h2>
                            <Text field='crit' placeholder="Crit Rating Weight"/>
                            <br/><h2>Versatility:</h2>
                            <Text field='vers' placeholder="Versatility Rating Weight"/>
                            <br/><br/>
                            <button id="submit" type='submit'>Submit</button>
                        </form>
                    )
                }}
            </Form>
        );
    }
}
