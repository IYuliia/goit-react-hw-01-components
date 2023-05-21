import PropTypes from 'prop-types';
import { ListItem, Status, Avatar, Name } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <ListItem>
        <Status isOnline={isOnline}></Status>
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
      </ListItem>
    </>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
