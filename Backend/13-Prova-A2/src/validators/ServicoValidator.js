const yup = require('yup');

const ServicoSchema = yup.object().shape({
    nome: yup
        .string()
        .required("Campo nome é obrigatório"),
    descricao: yup
        .string(),
    preco: yup
        .number()
        .required("Campo preço é obrigatório")
});

function validarServico(req, res, next) {
    ServicoSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json({
            mensagem: "Erro na validação dos campos!",
            erro: err.errors
        }));
}

module.exports = {
    validarServico
};