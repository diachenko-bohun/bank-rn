import {
	collection,
	getDocs,
	onSnapshot,
	query,
	where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../../firebase';
import { useAuth } from '../../../../hooks/useAuth';
import { IProfile } from '../../profile/useProfile';
import { IContact } from './types';

export const useContacts = () => {
	const { user } = useAuth();
	const [contacts, setContacts] = useState<IContact[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(
		() =>
			onSnapshot(
				query(collection(db, 'accounts'), where('userId', '!=', user?.uid)),
				async snapshot => {
					const contactsFire = await Promise.all(
						snapshot.docs.map(async d => {
							const data = d.data() as IContact & { userId: string };

							let displayName = '';

							const q = query(
								collection(db, 'users'),
								where('_id', '==', data.userId)
							);

							const querySnapshot = await getDocs(q);

							querySnapshot.forEach(doc => {
								displayName = (doc.data() as IProfile).displayName;
							});

							return {
								...data,
								_id: d.id,
								displayName,
							};
						})
					);
					setContacts(
						contactsFire
							.filter(
								(v, i, a) =>
									a.findIndex(t => t.displayName === v.displayName) === i
							)
							.filter(i => i.displayName)
					);
					setIsLoading(false);
				}
			),
		[]
	);
	return { contacts, isLoading };
};
