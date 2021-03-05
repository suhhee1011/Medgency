const express = require('express');
const router = express.Router();

router.get("/confirm",(req,res)=>{
    res.render("helper_HelpPage",{
        title: "nearByClinic",
        headingInfo:"nearByClinic",
        script:`<script src="/js/helper_confirmHelp.js"></script>`
    });
});

router.get("/helpPage",(req,res)=>{
    res.render("helper_HelpPage",{
        title: "nearByClinic",
        headingInfo:"Help Page",
        script:`<script src="/js/helper_onArrival.js"></script>`
    });
});

router.get("/nearByClinic",(req,res)=>{
    res.render("helper_nearByClinic",{
        title: "nearByClinic",
        headingInfo:"nearByClinic",
        script:`<script src="/js/helper_nearByClinic.js"></script>`,
    });
});

router.get("/thankyou",(req,res)=>{
    res.render("helper_thankyou",{
        title: "Thank You",
        headingInfo:"Thank You"
    });
});


module.exports=router;