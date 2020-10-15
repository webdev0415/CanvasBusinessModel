var express = require('express');
var User = require('../models').User;
var Canvas = require('../models').Canvas;
var Placeholder = require('../models').Placeholder;
var router = express.Router();
const sendEmail = require("../libs/sendEmail")
const messages = require("../libs/messages")
const templates = require("../libs/templatesEmail");
const bcrypt = require("bcryptjs");
const passport = require('../passport');
const jwt = require("jsonwebtoken")

router.post('/registration', function(req, res){
    User.findOne({where: { useremail: req.body.email}})
    .then(user=> {
        if (!user) {
            const newUser = new User({
                    password: bcrypt.hashSync(req.body.password1, 10),
                    useremail: req.body.email,
                    username: req.body.username,
                    
                });
            newUser
                    .save()
                    .then(user=>sendEmail(user.useremail, templates.confirmed(user.id)))                    
                    .then(()=>res.json({msg:messages.confirm}))
                    .catch(err=>res.json(err));
        } else if (user && !user.confrim) {
                sendEmail(user.useremail, templates.confirmed(user.id))
                .then(()=>res.json({msg: messages.resend}))
                .catch(err=>res.json(err))
        } else {
                return res.status(400).json({email: "Email already exists"});
        }
    })
    .catch(err=> res.json(err))
});
router.post("/register/confirm/:id", (req,res)=>{
    const {id} = req.params;

    User.findById(id)
    .then(user => {
      // A user with that id does not exist in the DB. Perhaps some tricky 
      // user tried to go to a different url than the one provided in the 
      // confirmation email.
      if (!user) {
        res.json({ msg: messages.couldNotFind })
      }
      
      // The user exists but has not been confirmed. We need to confirm this 
      // user and let them know their email address has been confirmed.
      else if (user && !user.confirmed) {

          User.update({
                confirm: true
            },{ 
                where: { id: id } 
            }).then(result => {
                res.status(200).json({msg: messages.confirmed});
            })
          .catch(err => console.log(err))
      }

      // The user has already confirmed this email address.
      else  {
        res.json({ msg: msgs.alreadyConfirmed })
      }

    })
    .catch(err => console.log(err))
})

router.post(
    "/login",
    (req, res, next) =>{


        passport.authenticate("local", function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { 
                res.status(400).json(info)
             }
            
            const cleanUser = Object.assign({}, user.dataValues)
            console.log("user", user, "cleanUser", cleanUser)
            if (cleanUser.password) {
                delete cleanUser.password
            }
            const payload = cleanUser

                jwt.sign(
                    payload,
                    "secret",
                    (err,token)=>{
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    });
        })(req,res,next)
})

router.post('/canvas/create/', (req, res) => {
    Canvas.create(req.body).then(data=>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
    // return res.status(200).json(req.body);
})

router.post('/canvas/read_all/', (req, res) => {
    Canvas.findAll().then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving canvases."
        });
      });
})

router.post('/canvas/read_data', (req, res) => {
    const id = req.body.id;
    // res.send(id)

    Placeholder.findAll({where: {
        canvas_id: id
    }}).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving canvases."
        });
      });
})

router.post('/canvas/update_data', async (req, res) => {
    var data = req.body.data;
    const id = req.body.id;

    // data.forEach(async item=>{
    //     await Placeholder.update(item, {where: {id: item.id}});
    // })
    for(var i=0; i<data.length; i++){
        await Placeholder.update(data[i], {where: {id: data[i].id}})
    }

    Placeholder.findAll({where: {
        canvas_id: id
    }}).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving canvases."
        });
      });
})

router.post('/canvas/delete_data', async (req, res) => {
    var data = req.body.data;
    const id = req.body.id;

    // data.forEach(async item=>{
    //     await Placeholder.update(item, {where: {id: item.id}});
    // })
    await Placeholder.destroy({where: {id: data.id}})

    Placeholder.findAll({where: {
        canvas_id: id
    }}).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving canvases."
        });
      });
})

router.post('/canvas/create_placeholder', (req, res) => {
    Placeholder.create(req.body).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving canvases."
        });
      });
})
// router.get('/:id', function(req, res){
//     console.log('getting one book');
//     Book.findById(req.params.id).then(book => {
//         console.log(book);
//         res.json(book);
//     });
    /* another ways to do it
    Book.findOne({ where: {id: req.params.id} }).success(book => {
        console.log(book);
        res.json(book);
    }).error(err => {
        res.send('error has occured');
    });
    */
// });

// router.put('/:id', function(req, res){
//     Book.update({
//         title: req.body.title,
//         author: req.body.author,
//         category: req.body.category
//     },{ 
//         where: { id: req.params.id } 
//     }).then(result => {
//         res.status(200).json(result);
//     });
// });

// router.delete('/:id', function(req, res){
//     Book.destroy({ 
//         where: { id: req.params.id } 
//     }).then(result => {
//         res.status(200).json(result);
//     });
// });

module.exports = router;