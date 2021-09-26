import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-1467526f","/cicd/","CI/CD",["/cicd/index.html","/cicd/README.md"]],
  ["v-51f86e14","/docker/","docker",["/docker/index.html","/docker/README.md"]],
  ["v-fffb8e28","/guide/","",["/guide/index.html","/guide/README.md"]],
  ["v-74485282","/k8s/","k8s",["/k8s/index.html","/k8s/README.md"]],
  ["v-f0383c18","/linux/","linux",["/linux/index.html","/linux/README.md"]],
  ["v-e9a1f7e4","/nginx/","nginx",["/nginx/index.html","/nginx/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
