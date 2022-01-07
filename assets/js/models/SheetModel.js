import {CHARA_NAMES} from '../constants/GameConstants'

class SheetModel {
  memberNamesModel(data) {
    let _out = data.map(v => {return v[0]})
    return _out
  }
  
  sheetDataModel(data) {
    console.log('🎾検証🎾', data);
    const _names = data.map(v => {return v[0]})
    let _outFinal = {}

    data.forEach(_d => {
      let _dataObj = {}
      const _nameKey = _d[0]

      const _index = _names.indexOf(_nameKey)
      const _thisData = data[_index]

      _dataObj.sheetRow = _index + 3

      _dataObj.discordName = _thisData[1]

      _dataObj.powers = {}

      _dataObj.powers[CHARA_NAMES.QUYI] = _thisData[2]
      _dataObj.powers[CHARA_NAMES.LAS] = _thisData[3]
      _dataObj.powers[CHARA_NAMES.KARTE] = _thisData[4]
      _dataObj.powers[CHARA_NAMES.ORTA] = _thisData[5]
      _dataObj.powers[CHARA_NAMES.NAMALIE] = _thisData[6]
      _dataObj.powers[CHARA_NAMES.SERIAD] = _thisData[7]
      _dataObj.powers[CHARA_NAMES.WYIN] = _thisData[8]


      _outFinal[_nameKey] = _dataObj
    })

    return _outFinal
  }

  scheduleDataModel(data) {
    const _names = data.map(v => {return v[0]})
    let _outFinal = {}

    data.forEach(_d => {
      let _dataObj = {}
      const _nameKey = _d[0]

      const _index = _names.indexOf(_nameKey)
      const _thisData = data[_index]

      _dataObj.sheetRow = _index + 3

      _dataObj.day1 = [
        _thisData[18], 
        _thisData[19], 
        _thisData[20], 
        _thisData[21], 
        _thisData[22], 
        _thisData[23],
        _thisData[24],
      ]

      console.log('💓 検証 💓', _thisData);

      _dataObj.day2 = [
        _thisData[26], 
        _thisData[27], 
        _thisData[28],
        _thisData[29], 
        _thisData[30], 
        _thisData[31], 
        _thisData[32],
      ]

      _outFinal[_nameKey] = _dataObj
    })

    return _outFinal
  }
}

export default new SheetModel()