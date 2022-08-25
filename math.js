function math_pi(){
return '3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647';
}
function math_e(){
return '2.718281828459045235360287471352662497757247093699959574966967627724076630353547594571382178525166427427466391932003059921'
}

function PrimeFactorization(a){
  let r=[];
    for (let s=2; s<s+1; s++) {
      if (a%s == 0) {
        for (let n=1; n<n+1; n++) {
            if (a%s == 0) {
               r.push(s)
               a=a/s;
            } else {
              break;
            }
        }
    }
      if (a == 1) {
        break;
      }
  }
return r;
}

function isPrime (a) {
  let re;
　　if(a===1){re=0;}else if(a===2){re=1;}
  else {
    for(let i = 2; i<a; i++) {
　　　　　if(a%i===0){re=0;break;}
　　　　　if(i+1===a){re=1;break;}
　　　　}
　　}
return re==1;
}
