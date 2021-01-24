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
  ]
}
export default data;