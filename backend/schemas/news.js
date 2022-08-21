export default{
    name:'news',
    title:'News',
    type: 'document',
    fields:[
        {
            name:'newsTitle',
            title:'News Title',
            type:'string'
        },
        {
            name:'content',
            title:'Content',
            type:'text'
        },
        {
            name:'newsUrl',
            title:'NewsUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}