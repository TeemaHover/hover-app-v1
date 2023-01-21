import React from 'react';
import { ScrollView } from 'react-native';
import { STYLES } from '../../constants/style';

const Layout = ({ children, ...props }) => {
  return <ScrollView className={`${STYLES.section}`}>{children}</ScrollView>;
};

export default Layout;
