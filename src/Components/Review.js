import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/index";
import "../Components/styles/Review.css";
import Spinner from "../Components/UI/Loading";

const Review = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const reviews = useSelector((state) => {
    return state.singleResidential.reviews;
  });

  const onSendPost = useCallback(
    (comment) => dispatch(actions.sendComment(comment)),
    [dispatch]
  );
  const onFetchReview = useCallback(() => dispatch(actions.fetchReview()), [
    dispatch,
  ]);
  const sentPost = (event) => {
    event.preventDefault();
    const comments = {
      comment: input,
    };
    onSendPost(comments);
    setInput("");
  };

  useEffect(() => {
    onFetchReview();
  }, [onFetchReview]);

  return (
    <div className="review">
      <h1>Leave us some review</h1>
      <div>
        <form className="input__review">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <div className="button__div">
            <button onClick={sentPost}>Post Comment</button>
          </div>
        </form>
        {reviews ? (
          <ul>
            {reviews.map((review) => {
              return (
                <div className="outer__comment__box">
                  <div className="comment__box">
                    <h1>Name</h1>
                    <p>{review.comment}</p>
                  </div>
                </div>
              );
            })}
          </ul>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Review;
