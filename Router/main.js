const express=require("express")
const router=express()
const {get_data_by_id,get_all}=require("../conttoler/control.js")


router.get("/salaries/:id",get_data_by_id)

router.get("/salaries",get_all)


module.exports=router