import { View } from 'react-native';
import React, { FC } from 'react';
import { list } from './list';
import MenuItem from './MenuItem';

const Menu: FC = () => {
	return (
		<View>
			{list.map(item => (
				<MenuItem key={item.title} item={item} />
			))}
		</View>
	);
};

export default Menu;
