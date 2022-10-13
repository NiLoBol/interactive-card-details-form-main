const cardname =document.querySelector("#cardname-input")
const cardnamep =document.querySelector("#cardname")


const cardnum =document.querySelector("#card-num-input")
const cardnump =document.querySelector("#card-num")


const cardMM =document.querySelector("#cardMM")
const cardMMs =document.querySelector("#MM")

const cardYY =document.querySelector("#cardYY")
const cardYYs =document.querySelector("#YY")

const cardCVC =document.querySelector("#cardCVC")
const cardCVCs =document.querySelector("#CVC")


cardname.addEventListener('input', updateValuename);
cardnum.addEventListener('input', updateValuenum);
cardMM.addEventListener('input', updateValueMM);
cardYY.addEventListener('input', updateValueYY);
cardCVC.addEventListener('input', updateValueCVC);


function updatehtml() {
    console.log(
        document.querySelector(".Confirm").innerHTML
    );
    if(document.querySelector(".Confirm").innerHTML=="Confirm"){
    document.querySelector(".content-2").innerHTML=
    `
    <div class="card-form m-card-3">
        <div class="form-group text-center">
          <img src="images/icon-complete.svg" class="text-center  mb-5" alt="">
          <p class="c-d fs-3 mb-3">Thank you!</p>
          <p class="notup fs-5 mb-3">We'added your card details</p>
          <button type="button" class="btn btn-dark Confirm x-2" onclick="updatehtml()">Continue</button>
        </div>
      </div>
    `
    }
    else{
        document.querySelector(".content-2").innerHTML=
    `
    <div class="card-form m-card-3">
        <div class="form-group">
          <p>Cardholder Name</p>
          <input type="email" maxlength="22" class="form-control" name="" id="cardname-input" aria-describedby="emailHelpId"
            placeholder="e.g. Jane Appleseed">
          <p>Card Number</p>
          <input type="email" maxlength="19" class="form-control" name="" id="card-num-input" aria-describedby="emailHelpId"
            placeholder="e.g. 1234 5678 9123 0000">
          <div class="row ">
            <p class="col-6 mp0">Exp. Date (MM/YY)</p>
            <p class="col-6 ps-3 ">CVC</p>
            <div class="row m-0">
              <div class="col-3 h-50 p-0 pe-2">
                <input type="email" maxlength="2" class="form-control " name="" id="cardMM" aria-describedby="emailHelpId" placeholder="MM">
              </div>
              <div class="col-3 h-50 p-0 ps-2">
                <input type="email" maxlength="2" class="form-control " name="" id="cardYY" aria-describedby="emailHelpId" placeholder="YY">
              </div>
              <div class="col-6 h-50 ps-3 pe-0">
                <input type="email" maxlength="3" class="form-control " name="" id="cardCVC" aria-describedby="emailHelpId"
                  placeholder="e.g. 123">
                </input>
              </div>
            </div>
            <button type="submit" class="btn btn-dark Confirm x-2" onclick="updatehtml()">Confirm</button>
          </div>
        </div>
      </div>
    `
    }
}

function updateValuename(e) {
    cardnamep.textContent = e.target.value;
}
function updateValuenum(e) {
    cardnump.textContent = e.target.value;
}
function updateValueMM(e) {
    cardMMs.textContent = e.target.value;
}
function updateValueYY(e) {
    cardYYs.textContent = e.target.value;
}
function updateValueCVC(e) {
    cardCVCs.textContent = e.target.value;
}