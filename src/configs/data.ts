import { IProfileData } from '~/interface';

const data: IProfileData = {
  name: "Prathap K",
  description: "Just a guy Who's Developer for Fun!",
  skills: [
    {
      title: "JavaScript",
      key: "javascript",
      color: "#fadb14",
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
          color: "#237804",
        },
        {
          title: "Express JS",
          key: "express-js",
          color: "#faad14",
        },
        {
          title: "React",
          key: "react",
          color: "#69c0ff",
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
          key: "react-native",
          color: "#69c0ff",
        },
        {
          title: "Node jS",
          key: "node-js",
          color: "#95de64",
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
        "User authentication (login, signup).",
        "Roundtrip.",
        "Dummy stripe integration for booking confirmation.",
      ],
      appLinks: [
        {
          url: "https://carbooking1.herokuapp.com",
          title: "Carbooking"
        }
      ]
    },
    {
      title: "Chat app (MERN based)",
      features: [
        "React PWA (Progessive Web application)",
        "User authentication (login, signup)",
        "Multi user chat (by creating and joining rooms)",
        "Global Chat",
        "Chat model - to create and maintain `roomid` and `participants`",
        "UUID based room-id",
        "Contact list to display the users",
        "React Hooks Based"
      ],
      appLinks: [
        {
          url: "https://pysix-chat.herokuapp.com/",
          title: "Chat (React PWA)",
        },
        {
          url: "https://pysix-chat-server.herokuapp.com/ui",
          title: "Node based Global chat UI"

        }
      ],
      todos: [
        "group chat/channel",
      ]
    },
  ]
}
export default data;