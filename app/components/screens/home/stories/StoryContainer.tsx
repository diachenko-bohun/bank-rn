import React, { FC } from 'react';
//@ts-ignore
import { StoryContainer as SC } from 'react-native-stories-view';

import { useData } from '../../../../hooks/useData';

import tw from 'twrnc';

const StoryContainer: FC = () => {
	const { activeStories, setActiveStories } = useData();

	return (
		activeStories && (
			<SC
				visible
				enableProgress
				images={activeStories}
				// duration={10}
				onComplete={() => setActiveStories(null)}
				containerStyle={tw`w-full h-full`}
			/>
		)
	);
};

export default StoryContainer;
