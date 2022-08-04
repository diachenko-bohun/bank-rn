import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { TypeCurrency } from '../types';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import tw from 'twrnc';

const Currency: FC<{ currency: TypeCurrency }> = ({ currency }) => {
	return (
		<View
			style={tw`rounded-full bg-blue-500 w-9 h-9 items-center justify-center`}
		>
			<View
				style={{
					...tw`rounded-full w-5 h-5 items-center justify-center`,
					backgroundColor: '#EDF4FE',
				}}
			>
				{currency === 'UAH' ? (
					<FontAwesome5 color='#488CF9' size={13} name='hryvnia' />
				) : (
					<FontAwesome color='#488CF9' size={13} name='usd' />
				)}
			</View>
		</View>
	);
};

export default Currency;
