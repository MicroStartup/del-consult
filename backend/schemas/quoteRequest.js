export default {
    name:'quoteRequest',
    title:'Quote Request',
    type:'document',
    fields:[
           {name:'companyTitle',
               title:'Company Title',
               type:'string'
            },
            {
                name:'needs',
                title:'Needs',
                type:'string'
            },
            {
                name:'details',
                title:'Details',
                type:'Text'
            },
            {
                name:'quantiy',
                title:'Quantity',
                type:'string'
            },
            {
                name:'estimatedTime',
                title:'EstimatedTime',
                type:'string'
            },
            {
                name:'contactName',
                title:'Contact Name',
                type:'string'
            },
            {
                name:'companyAddress',
                title:'Company Address',
                type:'string'
            },
            {
                name:'companyEmail',
                title:'Company Email',
                type:'string'
            },
            {
                name:'companyPhone',
                title:'Company Phone',
                type:'string'
            }
    ]
}