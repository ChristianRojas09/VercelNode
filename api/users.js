/*
This is practice for hosting an API on vercel using Node and JS
*/

//use module.exports that takes a request (req) and sends a response (res)
module.exports = (req, res) => {
    //if loop to find request method. In this case it is 'get'
    if(req.method == 'GET') {
        res.json([ //the return response will be in a json format, so we use .json here
            {name: "Christian", location: "Texas"}
        ])
    }
}