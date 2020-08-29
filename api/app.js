const express = require('express');
const app = express();

//connect database
const { mongoose } = require('./db/mongoConnection');

const bodyParser = require('body-parser');

const { Transaction } = require('./models');

//parse request body of HTTP request - body-parser
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );
    
    next();
});

//get request - get all transactions
app.get('/transactions', (req, res) => {
    //return an array of lists in the database
    if (req.query.startDate && req.query.endDate) {
        console.log(req.query.startDate, req.query.endDate);
        Transaction.find({
            date: {
                $gte: new Date(new Date(req.query.startDate).setHours(00, 00, 00)),
                $lt: new Date(new Date(req.query.endDate).setHours(23, 59, 59))
            }
        })
        .sort({ date: 'asc' })
        .then((transactions) => {
            res.send(transactions);
        })
        .catch((error) => {
            console.log(error);
        })
    } else {
        Transaction.find().then((transactions) => {
            res.send(transactions);
        }).catch((error) => {
            console.log(error);
        })
    }

})

app.get('/transactions/month-summary', (req, res) => {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toJSON();
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toJSON();
    var utilities = 0
    var rent = 0
    var grocery = 0
    var shopping = 0
    var subscriptions = 0
    var other = 0
    var income = 0
    Transaction.find({
        date: {
            $gte: firstDay,
            $lt: lastDay
        }
    })
    .sort({ date: 'asc' })
    .then((transactions) => {
        transactions.forEach((trans) => {
            // console.log(trans, typeof trans);
            if (trans['category'] == 'Utilities') {
                utilities += 1
            } else if (trans['category'] == 'Rent') {
                rent += trans['amount']
            } else if (trans['category'] == 'Grocery') {
                grocery += trans['amount']
            } else if (trans['category'] == 'Shopping') {
                shopping += trans['amount']
            } else if (trans['category'] == 'Subscriptions') {
                subscriptions += trans['amount']
            } else if (trans['category'] == 'Other') {
                other += trans['amount']
            } else if (trans['category'] == 'Income') {
                income += trans['amount']
            }

            // console.log(utilities, rent, grocery, shopping)
        })

        result = [
            {
                "label": "Utilities",
                "value": utilities
            },
            {
                "label": "Rent",
                "value": rent
            },
            {
                "label": "Grocery",
                "value": grocery
            },
            {
                "label": "Shopping",
                "value": shopping
            },
            {
                "label": "Subscriptions",
                "value": subscriptions
            },
            {
                "label": "Other",
                "value": other
            },
            {
                "label": "Income",
                "value": income
            },
        ]

        res.send(result);
    })
    .catch((error) => {
        console.log(error);
    })
})

// app.get('/transactions/:startDate/:endDate', (req, res) => {
//     Transaction.find({
//         date: {
//             $gte: new Date(new Date(req.query.startDate).setHours(00, 00, 00)),
//             $lt: new Date(new Date(req.query.endDate).setHours(23, 59, 59))
//         }
//     })
//     .sort({ date: 'asc' })
//     .then((transactions) => {
//         res.send(transactions);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// })

//post request - create new transaction
app.post('/transactions', (req, res) => {
    //create a new list and return new list doc to user
    //list information passed via JSON request body

    let { title, amount, date, category } = req.body;
    let newTrans = new Transaction({
        title,
        amount,
        date,
        category
    });
    newTrans.save().then((transDoc) => {
        res.send(transDoc);
    }).catch((error) => {
        console.log(error);
    })
})

//patch request - update a transaction
app.patch('/transactions/:id', (req, res) => {
    //update a list with specified id and JSON data from request
    Transaction.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
    })
})

//delete request - delete a transaction
app.delete('/transactions/:id', (req, res) => {
    //delete the specified list
    Transaction.findOneAndRemove({ _id: req.params.id }).then((removedList) => {
        res.send(removedList);
    }).catch((error) => {
        console.log(error);
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
