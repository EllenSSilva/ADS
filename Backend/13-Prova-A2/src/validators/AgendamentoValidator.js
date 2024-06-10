const yup = require('yup');

const AgendamentoSchema = yup.object().shape({
    data: yup
        .date()
        .required("Campo data é obrigatório"),
    hora: yup
        .string()
        .required("Campo hora é obrigatório"),
    pet: yup
        .string()
        .required("Campo pet é obrigatório"),
    servico: yup
        .string()
        .required("Campo servico é obrigatório")
});

function validarAgendamento(req, res, next) {
    AgendamentoSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json({
            mensagem: "Erro na validação dos campos!",
            erro: err.errors
        }));
}

module.exports = {
    validarAgendamento
};