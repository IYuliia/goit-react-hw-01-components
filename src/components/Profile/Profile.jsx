import PropTypes from 'prop-types';
import {
  Box,
  Descr,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Info,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <>
      <Box>
        <Descr>
          <Avatar src={avatar} alt={username} className="avatar" />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Descr>

        <Stats className="stats">
          <Info>
            <Label className="label">Followers</Label>
            <Quantity className="quantity">{followers}</Quantity>
          </Info>
          <Info>
            <Label className="label">Views</Label>
            <Quantity className="quantity">{views}</Quantity>
          </Info>
          <Info>
            <Label className="label">Likes</Label>
            <Quantity className="quantity">{likes}</Quantity>
          </Info>
        </Stats>
      </Box>
    </>
  );
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
