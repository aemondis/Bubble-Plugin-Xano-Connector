function(properties, context) {

    try {

        return JSON.parse(localStorage.getItem('xano_user')).email;

    } catch(err) {

    }
}