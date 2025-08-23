import React from "react";

const commentsData = [
  {
    name: "Shradha Suman",
    text: "This tutorial was really helpful, thanks a lot!",
    replies: [],
  },
  {
    name: "Rohit Sharma",
    text: "Can someone explain the Redux part again?",
    replies: [
      {
        name: "Priya Verma",
        text: "Sure! Redux is a state management library that helps share data across components.",
        replies: [],
      },
      {
        name: "Amit Singh",
        text: "I also struggled at first, but practice made it easy.",
        replies: [
          {
            name: "Riya Kapoor",
            text: "Same here! Breaking Redux into small steps helped me.",
            replies: [
              {
                name: "Vikram Yadav",
                text: "I totally agree with Riya, try understanding reducers first.",
                replies: [
                  {
                    name: "Suman Gupta",
                    text: "Reducers are just pure functions that update the state!",
                    replies: [
                      {
                        name: "Meena Joshi",
                        text: "Yes, and actions are just objects describing what happened.",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Anil Kumar",
                    text: "Once you understand the flow: Action → Reducer → Store → UI, it’s clear.",
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
    name: "Sneha Mishra",
    text: "Great explanation, I finally got useDispatch!",
    replies: [],
  },
  {
    name: "Karan Patel",
    text: "Thanks for sharing this, very clear!",
    replies: [],
  },
  {
    name: "Deepak Chauhan",
    text: "Redux is tough initially, but practice helps.",
    replies: [],
  },
  {
    name: "Neha Agarwal",
    text: "I prefer Redux Toolkit over plain Redux, less boilerplate code.",
    replies: [],
  },
];


const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm p-2 w-fit rounded-lg my-2">
      <img
        className="h-8 w-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3 rounded-2xl p-2">
        <p className="font-bold">{name}</p>
        <p className="w-[500px]">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className=""> 
      <Comment data={comment} />
      <div className="pl-5 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;