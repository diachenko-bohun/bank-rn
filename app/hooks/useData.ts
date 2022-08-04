import React, { useContext } from 'react';
import { DataContext } from '../providers/DataProvider';

export const useData = () => useContext(DataContext);
