import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  selectedGroup: string;
  setSelectedCategory: (category: string) => void;
};

const categoryMap: Record<string, string[]> = {
  Coffee: ['Hotdrinks', 'Iced Coffee', 'Iced Non-Coffee', 'Frappe'],
  Refreshers: ['Fruit Tea', 'Iced Tea'],
  Snacks: ['Pastries', 'Savory Bites'],
};

const CategoryTabs: React.FC<Props> = ({ selectedGroup, setSelectedCategory }) => {
  const categories = categoryMap[selectedGroup] || [];
  const [selectedTab, setSelectedTab] = useState(categories[0]);

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedTab(categories[0]);
      setSelectedCategory(categories[0]);
    }
  }, [selectedGroup]);

  const handleTabPress = (category: string) => {
    setSelectedTab(category);
    setSelectedCategory(category);
  };

  return (
    <View style={styles.tabs}>
      {categories.map((category, index) => {
        const isSelected = selectedTab === category;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.tab, isSelected && styles.selectedTab]}
            onPress={() => handleTabPress(category)}
          >
            <Text style={[styles.tabText, isSelected && styles.selectedTabText]}>
              {category}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    paddingHorizontal: 30,
    paddingBottom: 10,
    marginTop: 10,
  },

  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#13602A',
    backgroundColor: '#fff',
  },

  selectedTab: {
    backgroundColor: '#13602A',
  },

  tabText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#13602A',
  },

  selectedTabText: {
    color: '#fff',
  },
});

export default CategoryTabs;

