import { Text, View } from 'react-native';
import React, { FC } from 'react';
import Layout from '../../layout/Layout';

import tw from 'twrnc';
import { services } from './data';
import ServiceItem from './item/ServiceItem';

const Services: FC = () => {
	return (
		<Layout>
			<Text style={tw`text-center text-lg mb-6`}>Kyiv</Text>
			<View style={tw`flex-row flex-wrap justify-center`}>
				{services.map(service => (
					<ServiceItem key={service.title} service={service} />
				))}
			</View>
		</Layout>
	);
};

export default Services;
