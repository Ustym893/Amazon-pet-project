import { formatCurrency  } from "../../scripts/utils/money.js";

console.log('test suite: format currency');

console.log('converts cents into dolars');
if (formatCurrency(2095) === '20.95'){
  console.log('passed');
}else{
  console.log('failed');
}

console.log('works with zero');
if(formatCurremcy(0) === '0.00'){
  console.log('passed');
}else{
  console.log('failed');
}

console.log('rounds up to the nearest cent')
if(formatCurremcy(2000.5) === '20.01'){
  console.log('passed');
}else{
  console.log('failed');
}
if(formatCurremcy(2000.4) === '20.00'){
  console.log('passed');
}else{
  console.log('failed');
}