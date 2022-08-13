export default{
    name:'services',
    title:'Services',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'serviceDescription',
            title:'Service Description',
            type:'string'
        },
        {
            name:'field',
            title:'Field',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}