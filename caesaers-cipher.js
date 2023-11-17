function rot13(str) {
    return str.replace(/[A-Z]/gi, c =>
      "NOPQRSTUVWXYZABCDEFGHIJKLM"[
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(c) ] )
  }
  
  console.log(rot13("SERR PBQR PNZC"));