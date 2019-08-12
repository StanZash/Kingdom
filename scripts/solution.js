function solve(){
  let buttonKingdom = $('#kingdom button')
  let names = ['CASTLE', 'DUNGEON', 'FORTRESS', 'INFERNO', 'NECROPOLIS', 'RAMPART', 'STRONGHOLD', 'TOWER', 'CONFLUX' ]
  let points = {
    MAGES:{
      attack:70,
      defenses:30
    },
    FIGHTERS:{
      attack:50,
      defenses:50
    },
    TANKS:{
      attack:20,
      defenses:80
    }
  }
  buttonKingdom.on('click', function(){

    let king = $('#kingdom input[placeholder="King..."]').val().toUpperCase();
    let kingdom = $('#kingdom input[placeholder="Kingdom..."]').val().toUpperCase();
    if(!names.includes(kingdom)){
      $('#kingdom input[placeholder="Kingdom..."]').val('')
      $('#kingdom input[placeholder="King..."]').val('')
      return
    }

    if(king.length<2){
      $('#kingdom input[placeholder="Kingdom..."]').val('')
      $('#kingdom input[placeholder="King..."]').val('')
      return
    }
    
    
      let element = $(`#${kingdom.toLowerCase()}`)
     let h1 = $('<h1>').text(kingdom);
     let div = $('<div class="castle"></div>')
     let h2 = $('<h2>').text(king)
     let fieldset = $('<fieldset>')
     let legend = $('<legend>').text('Army')
     let pTanks = $('<p>').text('TANKS - 0')
     let pFighters = $('<p>').text('FIGHTERS - 0')
     let pMages = $('<p>').text('MAGES - 0')
     let div2 = $('<div class="armyOutput"></div>')
     fieldset.append(legend,pTanks,pFighters,pMages,div2)
     element.append(h1,div,h2,fieldset)
     element.css('display', 'inline-block')
    
  })

  $('#characters button').on('click', function(){
    let radios = $('input[type="radio"]:checked');
let ch = $('#characters input[placeholder="Character..."]').val()
let kingdom = $('#characters input[placeholder="Kingdom..."]').val()

if(ch.length<2){
  $('#characters input[placeholder="Character..."]').val('')
  $('#characters input[placeholder="Kingdom..."]').val('')
  return;
}


if(!names.includes(kingdom.toUpperCase())||$(`#${kingdom.toLowerCase()}`)[0].style.display!=='inline-block'){
  $('#characters input[placeholder="Character..."]').val('')
  $('#characters input[placeholder="Kingdom..."]').val('')
  return;
}

    if(radios){
let currKingdom=$(`#${kingdom.toLowerCase()} p:contains('${radios[0].value.toUpperCase()}')`)
 
let currKingdomText = currKingdom.text().split(' - ')

let currValue = Number(currKingdomText[1])
currKingdomText[1]=++currValue
currKingdom.text(currKingdomText.join(' - '))
let divOutput = $(`#${kingdom.toLowerCase()} .armyOutput`)

divOutput.text()===''?divOutput.text(ch+' '):divOutput.text(divOutput.text()+ch+' ')
    }
return


  })
  $('#actions button').on('click',function(){
let attackerUnit = $('input[placeholder="Attacker..."]').val().toUpperCase()
let defenderUnit = $('input[placeholder="Defender..."]').val().toUpperCase()

if(!names.includes(attackerUnit)||$(`#${attackerUnit.toLowerCase()}`)[0].style.display!=='inline-block'){
  $('input[placeholder="Attacker..."]').val('')
  $('input[placeholder="Defender..."]').val('')
  return;
}

if(!names.includes(defenderUnit)||$(`#${defenderUnit.toLowerCase()}`)[0].style.display!=='inline-block'){
  $('input[placeholder="Attacker..."]').val('')
  $('input[placeholder="Defender..."]').val('')
  return;
}
let attacker = $(`#${attackerUnit.toLowerCase()} p`)
let defender = $(`#${defenderUnit.toLowerCase()} p`);
let attackerScores = 0;
let defenderScores =0;

[...attacker].forEach(e=>attackerScores+=+e.textContent.split(' - ')[1]*+points[e.textContent.split(' - ')[0]]['attack']);

[...defender].forEach(e=>defenderScores+=+e.textContent.split(' - ')[1]*+points[e.textContent.split(' - ')[0]]['defenses'])
if(attackerScores>defenderScores){
  $(`#${defenderUnit.toLowerCase()} h2`).text($(`#${attackerUnit.toLowerCase()} h2`).text())
}
  })

}
solve()


