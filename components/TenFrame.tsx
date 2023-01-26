import { View, StyleSheet, Text } from 'react-native';
import { useEffect, useState } from "react";
import Circle from "../assets/circle.svg";
import { RandomNumber } from '../types/TenFrame';

const TenFrame = ({ randomNumber }: {
	randomNumber: RandomNumber
}) => {
	const [frames, setFrames] = useState(['','','','','','','','','','']);

	useEffect(() => {;
		const arr = ['','','','','','','','','',''];

		if(!randomNumber) return;

		for(let i = 0; i < randomNumber; i++) {
			arr[i] = 'X';
		}

		setFrames(arr);
	}, [randomNumber]);
	return (
		<View style={tenFrameStyles.container}>
			<Text>{randomNumber}</Text>
			{frames.map((frame, idx) => {
				if(frame === 'X') {
					return (
						<View key={idx} style={tenFrameStyles.frame}>
							<Circle />
						</View>
					);
				} else {
					return <View key={idx} style={tenFrameStyles.frame}></View>
				}
			})}
		</View>
	);
}

const tenFrameStyles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		borderTopColor: '#777',
		borderTopWidth: 2,
		borderLeftColor: '#777',
		borderLeftWidth: 2,
	},
	frame: {
		alignItems: 'center',
		display: 'flex',
		flexGrow: 1,
		flexShrink: 0,
		flexBasis: '20%',
		justifyContent: 'center',
		borderBottomColor: '#777',
		borderBottomWidth: 2,
		borderRightColor: '#777',
		borderRightWidth: 2,
		padding: 4,
		minHeight: 56,
	}
});

export default TenFrame;