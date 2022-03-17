import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Colors from './colors';

const StatusBarCase = ({kind, bg}) => {
  if (kind === 'hidden') return <StatusBar hidden={true} />
  else return <StatusBar barStyle={kind} backgroundColor={bg} />
}

const Container = (props) => {
  const {
    padding = 8,
    background = Colors.smoke,
    layout = 'default',         // default (top-left), top-center, center, center-left
    statusbar = 'dark-content', // dark-content, light-content, hidden
  } = props

  const ptop = Constants.statusBarHeight + padding;
  const wrap = {
    flex: 1, 
    paddingTop: ptop,
    paddingBottom: padding,
    paddingHorizontal: padding,
    backgroundColor: background,
  }
  const layouts = {
    default: {
      alignItems: 'flex-start', 
      justifyContent: 'flex-start',
    },
    topcenter: {
      alignItems: 'center', 
      justifyContent: 'flex-start',
    },
    center: {
      alignItems: 'center', 
      justifyContent: 'center',
    },
    centerleft: {
      alignItems: 'flex-start', 
      justifyContent: 'center',
    },
  }
  
  const lay = (layout === 'top-center') ? layouts['topcenter'] :
      (layout === 'center') ? layouts['center'] :
      (layout === 'center-left') ? layouts['centerleft'] :
      layouts['default']
  
  return (
    <SafeAreaView style={[wrap, lay]}>
      {props.children}
      <StatusBarCase kind={statusbar} bg={background} />
    </SafeAreaView>
  );
}

export default Container;
