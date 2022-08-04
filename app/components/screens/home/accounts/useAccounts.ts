import {
	collection,
	onSnapshot,
	orderBy,
	query,
	where,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../../../firebase';
import { useAuth } from '../../../../hooks/useAuth';
import { IAccount } from './types';

export const useAccounts = () => {
	const { user } = useAuth();

	const [accounts, setAccounts] = useState<IAccount[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(
		() =>
			onSnapshot(
				query(collection(db, 'accounts'), where('userId', '==', user?.uid)),
				snapshot => {
					setAccounts(
						snapshot.docs.map(
							d =>
								({
									_id: d.id,
									...d.data(),
								} as IAccount)
						)
					);
					setIsLoading(false);
				}
			),
		[]
	);

	return { accounts, isLoading };
};
