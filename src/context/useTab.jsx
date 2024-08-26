import { useContext } from 'react';
import TabContext from './tab-context';

// Custom hook to use the TabContext
export const useTab = () => useContext(TabContext);
