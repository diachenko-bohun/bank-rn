import { ScrollView, View } from 'react-native';
import React, { FC, useState } from 'react';
import Layout from '../../layout/Layout';
import Padding from '../../ui/Padding';
import Header from './Header';
import Message from './Message';
import { useMessages } from './useMessages';
import Field from './Field';

import tw from 'twrnc';

const Support: FC = () => {
	const { messages } = useMessages();
	const [screenHeight, setScreenHeight] = useState<number>(0);
	const scrollHeight = screenHeight - 153;

	const onLayout = (event: any) => {
		const { height } = event.nativeEvent.layout;
		setScreenHeight(height);
	};

	return (
		<View onLayout={onLayout}>
			<Layout isScrollView={false}>
				<Padding style={tw``}>
					<Header />
					<ScrollView style={{ height: scrollHeight }}>
						{messages.map(msg => (
							<Message key={msg._id} message={msg} />
						))}
					</ScrollView>
					<Field />
				</Padding>
			</Layout>
		</View>
	);
};

export default Support;
