export const badRequestOne = (field) => {
    return {
        status: 400,
        message: `Preencha o ${field}`
    }
}

export const unauthorized = {
    status: 401,
    message: `Usuário não autorizado`
}

export const notFound = (resource) => {
    return {
        status: 404,
        message: `${resource} não encontrado`
    }
}

export const sucess = (content) => {
    return {
        status: 200,
        message: content
    }
}

export const created = (content) => {
    return {
        status: 201,
        message: content
    }
}

export const notContent = {
    status: 204
}


export const internalServer = (res) => {
    return res.status(500).json("Erro interno servidor")
}

