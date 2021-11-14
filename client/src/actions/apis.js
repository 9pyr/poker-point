import clientCaller from "./clientCaller"

export const getHelloWorld = async () => {
  return await clientCaller.get('/home/hello')
}
