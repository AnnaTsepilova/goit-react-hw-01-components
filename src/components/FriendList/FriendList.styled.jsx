import styled from 'styled-components';

export const FriendListBox = styled.ul`
  width: 100%;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.space[7]}px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  min-width: 64px;
  height: auto;
  margin-bottom: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[5]}px;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.borderColor};
  background-color: ${props => props.theme.colors.backgroundSecondary};
  box-shadow: ${props => props.theme.shadows.boxShadow};
`;

export const FriendStatus = styled.span`
  display: inline-block;
  margin-right: ${props => props.theme.space[5]}px;
  height: 16px;
  width: 16px;
  background-color: ${props => (props.color ? `#4caf50` : `#f44336`)};
  border-radius: ${props => props.theme.radii.round};
  color: ${props => props.theme.colors.primary};
`;

export const FriendAvatar = styled.img`
  display: block;
  margin-right: ${props => props.theme.space[5]}px;
  max-width: 100%;
  height: auto;
`;

export const FriendName = styled.p`
  font-size: ${props => props.theme.fontSizes.m}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
  color: ${props => props.theme.colors.primary};
`;

//   margin-top: ${props => props.theme.space[7]}px;
// margin-bottom: ${props => props.theme.space[7]}px;
//   box-shadow: ${props => props.theme.shadows.boxShadow};

// export const Title = styled.h2`
//   padding-top: ${props => props.theme.space[6]}px;
//   padding-bottom: ${props => props.theme.space[6]}px;
//   font-size: ${props => props.theme.fontSizes.m}px;
//   font-weight: ${props => props.theme.fontWeights.bold};
//   text-align: center;
//   text-transform: uppercase;
//   color: ${props => props.theme.colors.secondary};
//   background-color: ${props => props.theme.colors.background};
// `;

// export const friendList = styled.ul`
//   display: flex;
//   justify-content: center;
//   background-color: ${props => props.theme.colors.backgroundSecondary};
// `;

// export const Label = styled.span`
//   display: block;
//   margin-bottom: ${props => props.theme.space[4]}px;
//   text-align: center;
//   color: ${props => props.theme.colors.secondary};
// `;

// export const Percentage = styled.span`
//   display: block;
//   text-align: center;
//   font-weight: ${props => props.theme.fontWeights.bold};
//   font-size: 20px;
// `;
