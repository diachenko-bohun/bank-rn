import { View, TextInput, Pressable } from 'react-native';
import React, { FC, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../../../hooks/useAuth';
import tw from 'twrnc';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase';

const Field: FC = () => {
	const { user } = useAuth();
	const [message, setMessage] = useState('');

	const handleSendMessage = async () => {
		setMessage('');
		try {
			await addDoc(collection(db, 'messages'), {
				timestamp: serverTimestamp(),
				userId: user?.uid,
				text: message,
			});
		} catch (error: any) {
			console.log('Message send error:', error.message);
		}
	};
	return (
		<View style={tw`flex-row items-center justify-between py-1`}>
			<TextInput
				placeholder='Enter your message'
				onChangeText={setMessage}
				value={message}
				showSoftInputOnFocus={false}
				autoCapitalize='none'
				style={tw`bg-gray-100 rounded-xl p-3 w-5/6 h-10 rounded-2xl`}
			/>
			<Pressable onPress={handleSendMessage}>
				<MaterialCommunityIcons
					name='send-circle-outline'
					size={42}
					style={tw`text-blue-300`}
				/>
			</Pressable>
		</View>
	);
};

export default Field;
