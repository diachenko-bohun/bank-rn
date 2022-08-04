import { View, Text } from 'react-native';
import React, { FC } from 'react';

import tw from 'twrnc';

const Header: FC = () => {
	return (
		<View style={tw`flex-row h-14 items-center mb-1`}>
			<View
				style={{
					...tw`w-11 h-11 rounded-full items-center justify-center mr-2`,
					backgroundColor: '#FFD53E',
				}}
			>
				<Text style={tw`text-sm`}>Bot</Text>
			</View>
			<View>
				<Text style={tw`text-sm text-gray-800 fomt-medium mb-1`}>Support</Text>
				<Text style={tw`text-xs text-gray-500`}>We are there 24/7</Text>
			</View>
		</View>
	);
};

export default Header;
