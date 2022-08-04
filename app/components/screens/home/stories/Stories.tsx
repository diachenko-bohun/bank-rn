import { View, Text, ScrollView } from 'react-native';
import React, { FC } from 'react';
import { useStories } from './useStories';

import StoryItem from './StoryItem';
import Loader from '../../../ui/Loader';

import tw from 'twrnc';

const Stories: FC = () => {
	const { stories, isLoading } = useStories();

	return (
		<View style={tw`my-7`}>
			{isLoading ? (
				<Loader />
			) : (
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{stories.map(story => (
						<StoryItem key={story._id} story={story} />
					))}
				</ScrollView>
			)}
		</View>
	);
};

export default Stories;
