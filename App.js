import React from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchUserActions from './src/redux/actions/fetchUserActions';

let styles;

const App = (props) => {
  const {container, text, button, buttonText, mainContent} = styles;

  return (
    <View style={container}>
      <Text style={text}>Redux Examples</Text>
      <TouchableHighlight
        style={button}
        onPress={() => props.actions.fetchData()}>
        <Text style={buttonText}>Load Data</Text>
      </TouchableHighlight>
      <View style={mainContent}>
        {props.userData.isFetching && <Text>Loading</Text>}
        {props.userData.data.length
          ? props.userData.data.map((person, i) => {
              return (
                <View key={i}>
                  <Text>Name: {person.name}</Text>
                  <Text>Age: {person.age}</Text>
                </View>
              );
            })
          : null}
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  text: {
    textAlign: 'center',
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff',
  },
  buttonText: {
    color: 'white',
  },
  mainContent: {
    margin: 10,
  },
});

function mapStateToProps(state) {
  return {
    userData: state.fetchUserReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchData: bindActionCreators(fetchUserActions.fetchData, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
