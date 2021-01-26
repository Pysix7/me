import { IProfileData } from '~/interface';

const data: IProfileData = {
  name: "Prathap K",
  description: "Just a guy Who's Developer for Fun!",
  skills: [
    {
      title: "JavaScript",
      key: "javascript",
    },
    {
      title: "HTML",
      key: "html"
    },
    {
      title: "CSS",
      key: "css",
      children: [
        {
          title: "LESS",
          key: "less"
        }
      ]
    },
    {
      title: "MERN",
      key: "mern",
      children: [
        {
          title: "MongoDB",
          key: "mongo-db",
        },
        {
          title: "Express JS",
          key: "express-js",
        },
        {
          title: "React",
          key: "react",
          children: [
            {
              title: "Next.JS",
              key: "nextjs"
            },
            {
              title: "Create React App",
              key: "cra"
            },
            {
              title: "Ant Design",
              key: "ant-design"
            },
            {
              title: "Redux",
              key: "redux"
            },
            {
              title: "React Router",
              key: "redux-router"
            },
          ]
        },
        {
          title: "React Native",
          key: "react-native"
        },
        {
          title: "Node jS",
          key: "node-js"
        }
      ]
    },
    {
      title: "Micro Services",
      key: "micro-services"
    }
  ],
  projects: [
    {
      title: "Carbooking app (MERN based)",
      features: [
        "user authentication (login, signup).",
        "roundtrip.",
        "dummy stripe integration for booking confirmation.",
      ],
      appLinks: [
        "https://carbooking1.herokuapp.com"
      ]
    },
    {
      title: "Chat app (MERN based)",
      features: [
        "React PWA (Progessive Web application)",
        "user authentication (login, signup)",
        "multi user chat (by creating and joining rooms)",
        "chat model - to create and maintain `roomid` and `participants` ",
        "uuid based room-id",
        "contact list to display the users .",
      ],
      appLinks: [],
      todos: [
        "group chat/channel",
        "deploy chat app",
      ]
    },
  ]
}
export default data;