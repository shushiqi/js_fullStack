const GROUP_NAME = 'shops'
module.exports=[
  {
    methods: 'GET',
    path: '/${GROUP_NAME}',
    handler: async(Request,reply)=>{
      reply({
        msg: 'hello world'
      })
    }
  }
]