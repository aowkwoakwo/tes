const fs = require('fs')
let _db = JSON.parse(fs.readFileSync('./database/afk.json'))


global.addAfk = (from, pushname, sender) => {
    obj = { participants: from, name: pushname, id: sender }
    _db.push(obj)
    global.setDatabase('afk.json', JSON.stringify(_db))
}


global.delAfk = (from, sender) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].participants === from && _db[i].id === sender) {
            position = i
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        global.setDatabase('afk.json', JSON.stringify(_db))
    }
    return true
}


global.getNameAfk = (from, sender) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].participants === from && _db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].name
    }
}

global.getidAfk = (from, sender) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].participants === from && _db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].id
    }
}

global.cekAfk = (from, sender) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].participants === from && _db[i].id === sender) {
            status = true
        }
    })

    return status
}