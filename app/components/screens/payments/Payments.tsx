import React, { FC } from 'react';
import Layout from '../../layout/Layout';
import Heading from '../../ui/Heading';
import Contacts from './contacts/Contacts';
import Other from './other/Other';

const Payments: FC = () => {
	return (
		<Layout>
			<Heading isCenter text='Payments' />
			<Contacts />
			<Other />
		</Layout>
	);
};

export default Payments;
