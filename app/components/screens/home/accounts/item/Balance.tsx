import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { IAccount } from '../types';

import tw from 'twrnc';

const Balance: FC<{ account: IAccount }> = ({
	account: { balance, currency, name },
}) => {
	return (
		<View style={tw`w-8/12`}>
			<Text style={{ fontSize: 15 }}>{name}</Text>
			<Text style={{ ...tw`font-bold`, marginTop: 2, fontSize: 15 }}>
				{Intl.NumberFormat(undefined, {
					currency,
					style: 'currency',
				}).format(balance)}
			</Text>
		</View>
	);
};

export default Balance;
