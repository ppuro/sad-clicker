let count = 0
const click = document.querySelector('#you')
let speeed = 0

let store = 0
let storeCost = 150

let bus = 0
let busCost = 1000

let clinic = 0
let clinicCost = 5000

let university = 0
let universityCost = 25000

click.onclick = () => {
  if (store === 0){
    count ++
    document.querySelector('#counter').innerHTML = 'текущее значение депрессии: ' + Math.floor(count) + ' ч сожалений.'
  } else {
    count = count + 10 * store
    document.querySelector('#counter').innerHTML = 'текущее значение депрессии: ' + Math.floor(count) + ' ч сожалений.'
  }
}

setInterval(function() {
  count = count + speeed
  document.querySelector('#counter').innerHTML = 'текущее значение депрессии: ' + Math.floor(count) + ' ч сожалений.'
}, 1000)

function getStore() {
  if (count >= storeCost){
    count -= storeCost
    store ++
    storeCost = storeCost * 1.15 ** store
    document.querySelector('#storePrice').innerHTML = Math.floor(storeCost)
    document.querySelector('#counter').innerHTML = 'текущее значение депрессии: ' + Math.floor(count) + ' ч сожалений.'
    document.querySelector('#storeAmount').innerHTML = store
  }
}

function getBus(){
  if (count >= busCost){
    count -= busCost
    bus ++
    busCost = busCost * 1.15 ** bus
    speeed = speeed + 15
    document.querySelector('#busPrice').innerHTML = Math.floor(busCost)
    document.querySelector('#counter').innerHTML = 'текущее значение депрессии: ' + Math.floor(count) + ' ч сожалений.'
    document.querySelector('#busAmount').innerHTML = bus

  }
}

function getClinic(){
  if (count >= clinicCost){
    count -= clinicCost
    clinic ++
    clinicCost = clinicCost * 1.15 ** clinic
    speeed = speeed + 75
    document.querySelector('#clinicPrice').innerHTML = Math.floor(clinicCost)
    document.querySelector('#counter').innerHTML = 'текущее значение депрессии: ' + Math.floor(count) + ' ч сожалений.'
    document.querySelector('#clinicAmount').innerHTML = clinic

  }
}

function getUniversity(){
  if (count >= universityCost){
    count -= universityCost
    university ++
    universityCost = universityCost * 1.15 ** university
    speeed = speeed + 500
    document.querySelector('#universityPrice').innerHTML = Math.floor(universityCost)
    document.querySelector('#counter').innerHTML = 'текущее значение депрессии: ' + Math.floor(count) + ' ч сожалений.'
    document.querySelector('#universityAmount').innerHTML = university

  }
}
