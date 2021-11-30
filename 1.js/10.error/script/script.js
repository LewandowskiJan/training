function zwykla(){
    // throw new Error("do dupy")
    return arguments.b.c
}


function niezwykla(){
    try {zwykla()
        
    } catch (error) {
        // zwykla()
        console.log(error)
    }
    finally {
        // console.log("finally")
      }
}
niezwykla()

try {
    try {
      throw new Error('oops');
    } catch (ex) {
      console.error('inner', ex.message);
      throw ex;
    } finally {
      console.log('finally');
    }
  } catch (ex) {
    console.error('outer', ex.message);
  }
  
  // Output:
  // "inner" "oops"
  // "finally"
  // "outer" "oops"


  (function() {
    try {
      try {
        throw new Error('oops');
      } catch (ex) {
        console.error('inner', ex.message);
        throw ex;
      } finally {
        console.log('finally');
        return;
      }
    } catch (ex) {
      console.error('outer', ex.message);
    }
  })();