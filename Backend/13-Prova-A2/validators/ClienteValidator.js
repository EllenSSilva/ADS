const yup = require('yup');

const ClienteSchema = yup.object().shape({
    nome: yup
        .string()
        .required("Campo nome é obrigatório"),
    cpf: yup
        .string()
        .required("Campo CPF é obrigatório"),
    telefone: yup
        .string()
        .required("Campo telefone é obrigatório"),
    endereco: yup
        .object()
        .required("Campo endereço é obrigatório")
});

function validarCliente(req, res, next) {
    ClienteSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json({
            mensagem: "Erro na validação dos campos!",
            erro: err.errors
        }));
}

module.exports = {
    validarCliente
};