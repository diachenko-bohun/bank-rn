import { Text, Pressable } from 'react-native';
import React, { FC } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { IFooterItem } from './types';

import tw from 'twrnc';
import { TypeRootStackParamList } from '../../../navigation/types';

interface INavItem {
	item: IFooterItem;
	navigate: (screenName: keyof TypeRootStackParamList) => void;
	currentRoute: string;
}

const NavItem: FC<INavItem> = ({ item, navigate, currentRoute }) => {
	const isActive = currentRoute === item.title;
	return (
		<Pressable
			style={{ ...tw`items-center`, width: '20%' }}
			onPress={() => navigate(item.title)}
		>
			<AntDesign
				name={item.iconName}
				style={tw`text-xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`}
			/>
			<Text
				style={{
					...tw`text-xs ${isActive ? 'text-blue-500' : 'text-gray-500'}`,
					marginTop: 1,
				}}
			>
				{item.title}
			</Text>
		</Pressable>
	);
};

export default NavItem;
