import { View, Text, ImageBackground } from 'react-native';
import React, { FC } from 'react';
import { IAccount } from '../types';

import tw from 'twrnc';

const ImageCard: FC<{ account: IAccount }> = ({
	account: { name, cardNumber },
}) => {
	return (
		<View
			style={{
				...tw`w-13 h-9 justify-end items-end py-1 px-1 rounded-sm`,
				backgroundColor: `${
					name === 'Tinkoff All Airlines' ? '#2857c4' : '#373637'
				}`,
			}}
		>
			<Text style={{ ...tw`text-white font-medium`, fontSize: 11 }}>
				{cardNumber.slice(-4)}
			</Text>
		</View>
	);
};

export default ImageCard;
