import { View, Text } from 'react-native';
import React, { FC } from 'react';

import Padding from './Padding';

import tw from 'twrnc';

const Heading: FC<{ text: string; isCenter?: boolean }> = ({
	text,
	isCenter = false,
}) => {
	return (
		<Padding>
			<Text
				style={tw`text-2xl font-bold text-gray-800 ${
					isCenter ? 'text-center' : ''
				}`}
			>
				{text}
			</Text>
		</Padding>
	);
};

export default Heading;
