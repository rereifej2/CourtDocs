module.exports = async function (context, req) {
   
   
   // context.res.json({
    //    text: "Your IP Address is"
    //});/
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Header: ' + req.headers['user-agent']);

    if (true) {
        context.log(req.headers['Authorization'])
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello there " 
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
    
};
//};/



