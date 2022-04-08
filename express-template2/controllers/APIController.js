class APIController {
    
    example(req, res){
        res.json({
            text: "This is an example API Route"
        })
    }

    example2(req, res){
        res.json([1,2,3,4,5])
    }


}

export default APIController