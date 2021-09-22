//process.argv since its on the command line. Will want to  go index 2 onward


const times = function () {
  const args = process.argv;
  return args;
};

const beep = ((args) => {
  //if no numbers are provided, return 0 beeps
  if (args.length === 0) {
    number = 0;
  }
   for (let number; number < args.length; number++) {
     //if a negative number is given (number < 0), it should skip the number
     if (args[number] < 0) {
       args[number] = 0;
     }
     //if it's not a number (ex. string, boolean) it should be ignored
     if (args[number] !== Number) {
       args[number] == 0;
     }
     setTimeout(() => {
      process.stdout.write('\x07');
      //each number needs to be the amount of seconds until it beeps 
     }, args[number] * 1000)
  }
});