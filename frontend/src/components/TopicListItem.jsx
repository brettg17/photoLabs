import React from "react";
import "../styles/TopicListItem.scss";


//renders individual topic item in the list of topics
const TopicListItem = ({ topic, onClick }) => {
  return (
    <div className="topic-list__item" onClick={() => onClick(topic.id)}>
      <p>{topic.title}</p>
    </div>
  );
};

export default TopicListItem;