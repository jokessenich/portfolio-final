

function handleNav(){
  $(".nav-links").click(e=> {
    e.preventDefault();
  $('html,body').animate({scrollTop: $(e.currentTarget['hash']).offset().top},800);
  console.log('slow click')
  });
} 

function handleButtons(){

  let showbuttons ={
    ["smart-chef-info"] : false,
    ["seinfeld-info"] : false,
    ["our-health-info"]: false,
    ["baby-tracks-info"]: false,
    ["exam-calculator-info"]: false

  }

  $(".showbutton").click(e=>{

    if(showbuttons[e.currentTarget.id] === false){

        $(`.${e.currentTarget.id}`).removeClass('hidden');
        showbuttons[e.currentTarget.id] = true;
        document.getElementById(`${e.currentTarget.id}`).innerHTML="Click for less"
        return;
    }

    else{    

        $(`.${e.currentTarget.id}`).addClass('hidden');

        showbuttons[e.currentTarget.id] = false
        document.getElementById(`${e.currentTarget.id}`).innerHTML="Click for more info"
        handleButtons();      
        return;    
    }
    })
  }

function handlePage(){

  handleButtons();
  
  handleNav();




console.log('end')

}

$(handlePage());