// registerApi: async (req: Request, res: Response) => {
//     const sql = 'insert into ${table} set ?';
//     const body = req.body;

//     let currentPassword = body.user_password;
//     const encryptedPW = bcrypt.hashSync(currentPassword, 10) //패스워드 암호화

//     const param = {
//         user_id : body.user_id,
//     }
// }