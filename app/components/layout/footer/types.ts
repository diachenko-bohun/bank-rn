import { TypeRootStackParamList } from '../../../navigation/types';
import { AntDesign } from '@expo/vector-icons';

export interface IFooterItem {
	iconName: keyof typeof AntDesign.glyphMap;
	title: keyof TypeRootStackParamList;
}
