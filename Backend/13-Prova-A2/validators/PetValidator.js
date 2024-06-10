const yup = require('yup');

const PetSchema = yup.object().shape({
    nome: yup
        .string()
        .required("Campo nome é obrigatório"),
    raca: yup
        .string(),
    dono: yup
        .string()
        .required("Campo dono é obrigatório")
});

function validarPet(req, res, next) {
    PetSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json({
            mensagem: "Erro na validação dos campos!",
            erro: err.errors
        }));
}

module.exports = {
    validarPet
};