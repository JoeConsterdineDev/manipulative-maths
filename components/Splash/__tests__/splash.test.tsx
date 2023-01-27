import React from 'react';
import Splash from '../Splash';
import { render, fireEvent } from '@testing-library/react';

describe('Splash screen', () => {
	it('should test play button is clicked', () => {
		const mockFn = jest.fn();
		const Component = render(<Splash updateGameStatus={mockFn} />);
		const button = Component.getByText('Play');
		fireEvent.click(button);

		expect(mockFn).toHaveBeenCalledTimes(1);
	});
})