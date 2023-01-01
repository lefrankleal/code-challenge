import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Text } from '../components';
import { getProductsList, ProductProps } from '../services/products';

export const HomeScreen = () => {
  const [items, setItems] = useState<Array<ProductProps>>();

  useEffect(() => {
    getProductsList().then(resp => setItems(resp.data));
  }, []);

  const ListItem = ({ item }: { item: ProductProps }) => {
    return <Text>{item.product}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text size={20} face={'Avenir Heavy'}>
        Bienvenido de vuelta!
      </Text>
      <Text size={16} face={'Avenir Regular'}>
        Ruben Rodriguez
      </Text>
      <Text size={14} face={'Avenir Heavy'} style={styles.subTitle}>
        TUS PUNTOS
      </Text>
      <Text size={14} face={'Avenir Heavy'} style={styles.subTitle}>
        TUS MOVIMIENTOS
      </Text>
      <FlatList
        ListEmptyComponent={<Text>No items to show, sorry...</Text>}
        data={items}
        renderItem={ListItem}
        style={styles.movementsList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 27,
    marginBottom: 40,
  },
  subTitle: {
    color: '#9B9898',
  },
  movementsList: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 23,
  },
});
