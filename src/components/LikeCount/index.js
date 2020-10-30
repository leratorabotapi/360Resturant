import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Copy from '../Copy';
import './styles.css';

const LikeCount = ({ numberOfLikes }) => (
  <div className="likeCount">
    {numberOfLikes !== 0 ? (
      <>
        <Icon name="Heart" iconColor="grey" />
        <Copy color="grey">{numberOfLikes}</Copy>
      </>
    ) : null}
  </div>
);

LikeCount.propTypes = {
  numberOfLikes: PropTypes.number,
};

LikeCount.defaultProps = {
  numberOfLikes: 0,
};
export default LikeCount;
