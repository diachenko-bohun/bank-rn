import { View, Text, Pressable } from 'react-native';
import React, { FC } from 'react';
import { IContact } from './types';

import tw from 'twrnc';
import Avatar from '../../../ui/Avatar';
import { useAccounts } from '../../home/accounts/useAccounts';
import { handleTransfer } from '../handleTransfer';

const ContactItem: FC<{ contact: IContact }> = ({ contact }) => {
	const { accounts } = useAccounts();
	return (
		<Pressable
			onPress={handleTransfer.bind(this, accounts[0], contact.cardNumber)}
			style={tw`ml-4 mr-1 items-center`}
		>
			<Avatar name={contact.displayName} size='large' />
			<Text style={tw`mt-1 text-sm`}>{contact.displayName}</Text>
		</Pressable>
	);
};

export default ContactItem;
