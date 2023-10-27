import React from "react";
import userImg from "./image/userIcon.png";

const commentData = [
  {
    name: "Ajay kumar",
    text: "lorem fggfgf hshsh kk jeyddh logt.",
    replies: [
      {
        name: "Ajay kumar",
        text: "lorem fggfgf hshsh kk jeyddh logt.",
        replies: [
          {
            name: "Ajay kumar",
            text: "lorem fggfgf hshsh kk jeyddh logt.",
            replies: [
              {
                name: "Ajay kumar",
                text: "lorem fggfgf hshsh kk jeyddh logt.",
                replies: [
                  {
                    name: "Ajay kumar",
                    text: "lorem fggfgf hshsh kk jeyddh logt.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ajay kumar",
    text: "lorem fggfgf hshsh kk jeyddh logt.",
    replies: [],
  },
  {
    name: "Ajay kumar",
    text: "lorem fggfgf hshsh kk jeyddh logt.",
    replies: [
      {
        name: "Ajay kumar",
        text: "lorem fggfgf hshsh kk jeyddh logt.",
        replies: [
          {
            name: "Ajay kumar",
            text: "lorem fggfgf hshsh kk jeyddh logt.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ajay kumar",
    text: "lorem fggfgf hshsh kk jeyddh logt.",
    replies: [
      {
        name: "Ajay kumar",
        text: "lorem fggfgf hshsh kk jeyddh logt.",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-lg bg-gray-200 p-1 my-2 rounded-lg">
      <img className="m-1 h-5" src={userImg} alt={name} />
      <div className="px-3">
        <p className="font-bold">Name</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, ind) => (
    <div key={ind}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        {/*  recursion */}
        {/*  YE N LEVEL NESTNG */}
        <CommentList comments={comment.replies} />
        {/* <Comment key={ind} data={comment} />
        <Comment data={comment} />
        <Comment data={comment} /> */}
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-5">
      <h1 className="font-bold text-2xl">comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
