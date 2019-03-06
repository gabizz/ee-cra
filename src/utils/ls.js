import Config from '../Config'

const config = Config()

const ls = () => {
    let result = {name: ''}
    let lsobject = localStorage.getItem(config.NAMESPACE)
    if ( lsobject ) {
        result = JSON.parse(lsobject)
    }
    return result

}

export default ls