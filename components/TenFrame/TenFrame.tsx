import { View } from 'react-native';
import { useEffect, useState } from "react";
import Circle from "../../assets/circle.svg";
import CircleLight from "../../assets/circle-light.svg";
import { RandomNumber } from '../../types/TenFrame';
import { tenFrameStyles } from './TenFrameStyles';

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
			{frames.map((frame, idx) => {
				if(frame === 'X') {
					return (
						<View key={idx} style={tenFrameStyles.frame}>
							<Circle />
						</View>
					);
				} else {
					return (
						<View key={idx} style={tenFrameStyles.frame}>
							<CircleLight />
						</View>
					);
				}
			})}
		</View>
	);
}

export default TenFrame;