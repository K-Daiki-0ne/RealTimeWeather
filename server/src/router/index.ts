export const router = async (fastify: any, options: any) => {
  await fastify.get(':lat', (req: any, rep: any) => {
  console.log(req.params)
  })
};