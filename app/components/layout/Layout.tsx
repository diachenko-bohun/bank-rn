import { ScrollView, View } from 'react-native';
import React, { FC } from 'react';
import tw from 'twrnc';

interface ILayout {
	isScrollView?: boolean;
	children: any;
}

export const styleCenter = tw`h-full w-full bg-white pt-10`;

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
	return (
		<View style={styleCenter}>
			{isScrollView ? <ScrollView>{children}</ScrollView> : children}
		</View>
	);
};

export default Layout;
