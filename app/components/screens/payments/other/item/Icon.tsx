import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { IFooterItem } from '../../../../layout/footer/types';
import tw from 'twrnc';

interface IIcon extends Pick<IFooterItem, 'iconName'> {}

const Icon: FC<IIcon> = ({ iconName }) => {
	return (
		<View
			style={tw`rounded-full bg-blue-500 w-8 h-8 items-center justify-center`}
		>
			<AntDesign name={iconName} size={19} color='#EDF4FE' />
		</View>
	);
};

export default Icon;
