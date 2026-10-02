const homeElement = require("../../elements/Home")


class HomePage{
    get echoBox(){
        return $(homeElement.echoBox)
    }
    get loginbtn(){
        return $(homeElement.loginbtn)
    }
}
module.exports= new HomePage()