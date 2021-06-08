exports.register = async(req, res) => {
    const { userName, firstname, lastname, email, password, gender, isAdmin } = req.body;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (!passw.test(password)) throw
    if (!emailRegex.test(email)) throw "Email is not supported from your domain";
    if (password.length < 8) throw "Password must be atleast 8 characters long";

}