const yup = require('yup');

const FuncionarioSchema = yup.object().shape({
    nome: yup
        .string()
        .required("Campo nome é obrigatório"),
    cargo: yup
        .string()
        .required("Campo cargo é obrigatório")
});

function validarFuncionario(req, res, next) {
    FuncionarioSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json({
            mensagem: "Erro na validação dos campos!",
            erro: err.errors
        }));
}

module.exports = {
    validarFuncionario
};