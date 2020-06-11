import getUser from '../../utils/getUser'

const apiGetUser = async(req, res) => {
    const data = await getUser('walber2903')
    res.send(data)
}

export default apiGetUser