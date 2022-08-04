import { View } from 'react-native';
import React, { FC } from 'react';

import tw from 'twrnc';

interface IPadding {
	children: any;
	style?: any;
}

const Padding: FC<IPadding> = ({ children, style = {} }) => {
	return <View style={{ ...tw`px-4`, ...style }}>{children}</View>;
};

export default Padding;
