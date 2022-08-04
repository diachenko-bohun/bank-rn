import React, { useEffect, useState } from 'react';
import { URL } from './API';
import { ICurrency } from './types';

export const useCurrencies = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [currencies, setCurrencies] = useState<ICurrency[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const responce = await fetch(`${URL}&base_currency=UAH`);
				const result = await responce.json();
				setCurrencies([
					{
						name: result.data.USD.code,
						value: (1 / result.data.USD.value).toFixed(2),
					},
					{
						name: result.data.EUR.code,
						value: (1 / result.data.EUR.value).toFixed(2),
					},
					{
						name: result.data.GBP.code,
						value: (1 / result.data.GBP.value).toFixed(2),
					},
				]);
			} catch (error: any) {
				console.log('useCurrencies error:', error.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	return { currencies, isLoading };
};
