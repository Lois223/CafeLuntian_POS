import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CategoryTabs from './CategoryTabs';

type Props = {
  setSelectedCategory: (category: string) => void;
};

const ItemStatus: React.FC<Props> = ({ setSelectedCategory }) => {
  const [selectedItem, setSelectedItem] = useState('Coffee');

  const items = [
    { label: 'Coffee', count: 50 },
    { label: 'Refreshers', count: 20 },
    { label: 'Snacks', count: 30 },
  ];

  useEffect(() => {
    // Automatically select the first category under the selected item group
    const defaultCategoryMap: Record<string, string[]> = {
      Coffee: ['Hotdrinks', 'Iced Coffee', 'Iced Non-Coffee', 'Frappe'],
      Refreshers: ['Fruit Tea', 'Iced Tea'],
      Snacks: ['Pastries', 'Savory Bites'],
    };

    const firstCategory = defaultCategoryMap[selectedItem]?.[0];
    if (firstCategory) {
      setSelectedCategory(firstCategory);
    }
  }, [selectedItem]);

  return (
    <View>
      <View style={styles.container}>
        {items.map((item, index) => {
          const isSelected = selectedItem === item.label;
          return (
            <TouchableOpacity
              key={index}
              style={[styles.boxContainer, isSelected && styles.selectedBox]}
              onPress={() => setSelectedItem(item.label)}
            >
              <View style={[styles.btn, isSelected && styles.selectedBtn]}>
                <Text style={[styles.btnText, isSelected && styles.selectedBtnText]}>Available</Text>
              </View>
              <View style={styles.info}>
                <Text style={[styles.name, isSelected && styles.selectedText]}>{item.label}</Text>
                <Text style={[styles.itemNum, isSelected && styles.selectedText]}>{item.count} items</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <CategoryTabs selectedGroup={selectedItem} setSelectedCategory={setSelectedCategory} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    marginLeft: 10,
    marginVertical: -7,
    gap: 10,
  },

  boxContainer: {
    width: 220,
    height: 120,
    backgroundColor: '#FFF',
    borderWidth: 1.2,
    borderColor: '#13602A',
    borderRadius: 10,
    padding: 10,
  },

  selectedBox: {
    backgroundColor: '#13602A',
    borderColor: '#13602A',
  },

  btn: {
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 13,
    borderRadius: 15,
    borderWidth: 1.2,
    borderColor: '#13602A',
    alignSelf: 'flex-start',
  },

  selectedBtn: {
    backgroundColor: '#13602A',
    borderColor: '#fff',
  },

  btnText: {
    color: '#13602A',
    fontSize: 12,
    fontWeight: '800',
  },

  selectedBtnText: {
    color: '#fff',
  },

  info: {
    marginTop: 30,
    alignItems: 'flex-start',
  },

  selectedText: {
    color: '#fff',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#13602A',
  },

  itemNum: {
    fontSize: 12,
    color: '#555',
  },
});

export default ItemStatus;
