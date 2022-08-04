import { View, ScrollView } from 'react-native';
import React, { FC } from 'react';
import SubHeading from '../../../ui/SubHeading';
import OtherItem from './item/OtherItem';
import tw from 'twrnc';
import { otherItems } from './data';

const Other: FC = () => {
	return (
		<View>
			<SubHeading text='Important transfers' />
			<ScrollView
				style={tw`py-5`}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				{otherItems.map(item => (
					<OtherItem key={item.title} item={item} />
				))}
			</ScrollView>
		</View>
	);
};

export default Other;
