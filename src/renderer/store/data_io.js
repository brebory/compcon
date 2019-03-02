import fs from 'fs'
import path from 'path'

const webImageTypes = [
  '.jpeg',
  '.jpg',
  '.png',
  '.gif',
  '.svg',
  '.bmp'
]

export default {
  loadData (filename) {
    var p = path.join(__static, '..', 'src', 'renderer', 'assets', 'data', filename + '.json')
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p))
    } else {
      console.warn(`file ${filename} does not exist at ${p}.`)
      return []
    }
  },
  getImages (subdir) {
    var p = path.join(__static, '..', 'src', 'renderer', 'assets', 'img', subdir)
    if (fs.existsSync(p)) {
      return fs.readdirSync(p).filter(x => webImageTypes.includes(path.extname(x).toLowerCase()))
    } else {
      return []
    }
  },
  newID () {
    return Math.random().toString(36).substr(2, 12)
  },
  loadUserData (userDataPath, filePath) {
    if (fs.existsSync(userDataPath)) {
      if (fs.existsSync(path.join(userDataPath, filePath))) {
        return JSON.parse(fs.readFileSync(path.join(userDataPath, filePath)))
      } else {
        console.warn(`file ${filePath} does not exist in folder ${userDataPath}. (if this is a new installation, ignore this message)`)
        return []
      }
    } else {
      console.warn(`data folder does not exist (if this is a new installation, ignore this message) ${filePath}`)
      return []
    }
  },
  saveUserData (userDataPath, filePath, data, callback) {
    if (!fs.existsSync(path.join(userDataPath))) {
      console.info(`data folder doesn't exist in userData dir, creating...`)
      fs.mkdir(userDataPath, function (err) {
        if (err) {
          alert(`ERROR: Unable to create save data folder at ${userDataPath}. Ensure you have write access to this folder`)
        } else {
          console.info('data folder created successfully')
        }
      })
    }

    fs.writeFile(path.join(userDataPath, filePath), JSON.stringify(data, null, 2), 'utf8', callback)
  },
  saveFile (dataPath, data, callback) {
    fs.writeFile(dataPath, data, 'utf8', callback)
  },
  importFile (path, callback) {
    try {
      var data = JSON.parse(fs.readFileSync(path), callback)
      if (data && typeof data === 'object') return data
    } catch (error) {
      alert('Error reading or parsing JSON data at ' + path)
    }
  }
}
