# Middleware

    # What is it?
        * app.use() - possibly takes two arguments
            1. (optional) - Mount path ( endpoint )
            2. Callback function - receives the request, response object, also the "next" function

    # The "next" function
        * Moves on to the next middleware in line on our server.
