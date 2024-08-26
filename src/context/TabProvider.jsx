import { useState } from 'react';
import PropTypes from 'prop-types';
import TabContext from './tab-context';

// Create a provider component
export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('new-recipes');

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

TabProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
