/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState, Fragment } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Keyring } from '@polkadot/keyring';
import { mnemonicGenerate, cryptoWaitReady } from '@polkadot/util-crypto';

const App = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    cryptoWaitReady().then(() => {
      try {
        const keyring = new Keyring({ type: 'sr25519' });
        const phrase = mnemonicGenerate(12);
        const { address, type } = keyring.createFromUri(phrase);

        setInfo({ address, phrase, type });
      } catch (error) {
        console.error(error.message)
      }
    });
  }, []);

  return (
    <Fragment>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>phrase</Text>
          <Text style={styles.sectionDescription}>
            {info.phrase || '<unknown>'}
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>address</Text>
          <Text style={styles.sectionDescription}>
            {info.address || '<unknown>'}
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>type</Text>
          <Text style={styles.sectionDescription}>
            {info.type || '<unknown>'}
          </Text>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
