import { View, StyleSheet } from 'react-native';
import { useEffect, useState } from "react";
import Circle from "../assets/circle.svg";

const TenFrame = () => {
	const [frames, setFrames] = useState(['','','','','','','','','','']);
	const [randomNumber, setRandomNumber] = useState<number | null>(null);

	useEffect(() => {
		setRandomNumber(Math.floor(Math.random() * 10) + 1);
	}, []);

	useEffect(() => {;
		const arr = ['','','','','','','','','',''];

		if(!randomNumber) return;

		for(let i = 0; i < randomNumber; i++) {
			arr[i] = 'X';
		}

		setFrames(arr);
	}, [randomNumber]);
	return (
		<View style={tenFrame.container}>
			{frames.map((frame, idx) => {
				if(frame === 'X') {
					return (
						<View key={idx} style={tenFrame.frame}>
							<Circle />
						</View>
					);
				} else {
					return <View key={idx} style={tenFrame.frame}></View>
				}
			})}
		</View>
	);
}

const tenFrame = StyleSheet.create({
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