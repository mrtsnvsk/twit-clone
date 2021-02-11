import MainTweetHelper from './MainTweetHelper';
import { connect } from 'react-redux';
import {
  deleteTweet,
  likeTweet,
  unlikeTweet,
} from '../../redux/actions/twitterAction';

const MainTweetProfile = ({
  userProfile,
  deleteTweet,
  likeTweet,
  unlikeTweet,
  allTweets,
}) => {
  const tweets = allTweets.filter((el) => {
    return el.login === userProfile.login;
  });

  return (
    <MainTweetHelper
      data={tweets}
      currentUser={userProfile}
      deleteTweet={deleteTweet}
      likeTweet={likeTweet}
      unlikeTweet={unlikeTweet}
    />
  );
};

const mapStateToProps = ({ userProfile, allTweets }) => {
  return {
    allTweets,
    userProfile,
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

export default connect(mapStateToProps, mapDispatchToProps)(MainTweetProfile);
