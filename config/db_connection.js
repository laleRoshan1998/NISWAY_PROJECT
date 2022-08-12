// const { count } = require("console");
const fs=require("fs")



const knex = require('knex')({
    client: 'mysql',
    connection:{
        host: 'localhost',
        user: "root",
        database: 'salary_data',
        password: "Roshan@1"
    }
})
// console.log("we are here");
knex.schema.createTable("company_bio_data",t=>{
    t.increments().primary()
    t.string('Date')
    t.string("Age")
    t.string("Industry")
    t.string("Job_title")
    t.string("Anual_Salary")
    t.string("currency")
    t.text("Location")
    t.string("Experience")
    t.text("Context")
    t.string('Other')
})
.then(async()=>{
    console.log("jay");
    const unparsed_data = fs.readFileSync('../conversaton/users.json')
    const data = JSON.parse(unparsed_data)
    // console.log(data);
    
    let count=0
    for(r of data){
        await knex('company_bio_data').insert({
            Date:r['Timestamp'],
            Age:r['How old are you?'],
            Industry:r['What industry do you work in?'],
            Job_title:r['Job title'],
            Anual_Salary:r['What is your annual salary?'],
            currency:r['Please indicate the currency'],
            Location:r['Where are you located? (City/state/country)'],
            Experience:r['How many years of post-college professional work experience do you have?'],
            Context:r['If your job title needs additional context, please clarify here:'],
            Other:r['If \"Other,\" please indicate the currency here:']
            
        })
        count+=1
        console.log(r);
    }

})
.catch((err)=>{
    // console.log(err);
})

module.exports=knex