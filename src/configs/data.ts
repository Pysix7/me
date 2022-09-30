import { IProfileData } from '~/interface';

const data: IProfileData = {
  name: "Prathap K",
  description: "just a guy who's developer for fun!",
  skills: [
    {
      title: "JavaScript",
      key: "javascript",
      color: "#fadb14",
    },
    {
      title: "HTML",
      key: "html",
      color: "#ff4d4f",
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
      title: "Webpack",
      key: "webpack",
      color: "#69c0ff",
    },
    {
      title: "Electron.js",
      key: "electron.js",
      color: "#69c0ff",
    },
    {
      title: "Docker",
      key: "docker",
      color: "#69c0ff",
    },
    {
      title: "Micro Services",
      key: "micro-services"
    },
  ],
  projects: [
    {
      title: "Memory Game",
      features: [
        "simple cards game",
        "3 difficulty levels",
        "websockets api"
      ],
      links: [
        {
          url: "http://pysix-game.herokuapp.com",
          title: "Memory Game"
        },
        {
          url: "https://github.com/Pysix7/memory-game",
          title: "Codebase - github"
        }
      ]
    },
    {
      title: "Chat app",
      features: [
        "MERN Stack",
        "PWA (Progessive Web application)",
        "user authentication (login, signup)",
        "multi user chat (by creating and joining rooms)",
        "global chat",
        "chat model - to create and maintain `roomid` and `participants`",
        "UUID based room-id",
        "contact list to display the users",
        "react hooks based"
      ],
      links: [
        {
          url: "https://pysix-chat.herokuapp.com/",
          title: "Chat (React PWA)",
        },
        {
          url: "https://pysix-chat-server.herokuapp.com/ui",
          title: "Node based Global chat UI"

        },
        {
          url: "https://github.com/Pysix7/myApps/tree/master/apps",
          title: "Codebase - github"
        }
      ]
    },
    {
      title: "Carbooking app",
      features: [
        "MERN Stack",
        "user authentication (login, signup).",
        "roundtrip.",
        "dummy stripe integration for booking confirmation.",
      ],
      links: [
        {
          url: "https://carbooking1.herokuapp.com",
          title: "Carbooking"
        },
        {
          url: "https://github.com/Pysix7/myApps/tree/master/apps/cb",
          title: "Codebase - github"
        }
      ]
    },
  ]
}
export default data;