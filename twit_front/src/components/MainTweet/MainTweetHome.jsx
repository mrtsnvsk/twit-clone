import MainTweetHelper from './MainTweetHelper';
import { connect } from 'react-redux';
import {
  deleteTweet,
  likeTweet,
  unlikeTweet,
} from '../../redux/actions/twitterAction';

const MainTweetHome = ({ allTweets, currentUser, likeTweet, unlikeTweet }) => {
  return (
    <MainTweetHelper
      data={allTweets}
      currentUser={currentUser}
      likeTweet={likeTweet}
      unlikeTweet={unlikeTweet}
    />
  );
};

const mapStateToProps = ({ currentUser, allTweets }) => {
  return {
    currentUser,
    allTweets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTweet: (userId, tweetId) => dispatch(deleteTweet(userId, tweetId)),
    likeTweet: (tweetId, likedUser) => dispatch(likeTweet(tweetId, likedUser)),
    unlikeTweet: (tweetId, likedUser) =>
      dispatch(unlikeTweet(tweetId, likedUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainTweetHome);
