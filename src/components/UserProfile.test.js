import React from 'react';
import { render } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile component', () => {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        profilePicture: 'https://example.com/profile.jpg'
    };

    it('renders user name and email', () => {
        const { getByText, getByAltText } = render(<UserProfile {...user} />);
        const nameElement = getByText(user.name);
        const emailElement = getByText(user.email);
        const profilePictureElement = getByAltText('Profile');

        expect(nameElement).toBeInTheDocument();
        expect(emailElement).toBeInTheDocument();
        expect(profilePictureElement).toHaveAttribute('src', user.profilePicture);
    });

    it('greets the user', () => {
        const { getByText } = render(<UserProfile {...user} />);
        const greetingElement = getByText(`Hi, ${user.name}`);

        expect(greetingElement).toBeInTheDocument();
    });
});
