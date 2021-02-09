import MainTweetHelper from './MainTweetHelper';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/twitterAction';

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

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    allTweets: state.allTweets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTweet: (userId, tweetId) =>
      dispatch(action.deleteTweet(userId, tweetId)),
    likeTweet: (tweetId, likedUser) =>
      dispatch(action.likeTweet(tweetId, likedUser)),
    unlikeTweet: (tweetId, likedUser) =>
      dispatch(action.unlikeTweet(tweetId, likedUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainTweetHome);
